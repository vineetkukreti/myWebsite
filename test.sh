#!/bin/bash

# Variables for easy customization
PMM_IMAGE="percona/pmm-server:2"
DATA_CONTAINER_NAME="pmm-data"
PMM_CONTAINER_NAME="pmm-server"
POSTGRES_CONTAINER_NAME="postgres-library-db"
DATABASE_NAME="library-db"
PMM_USERNAME="pmm"
PMM_PASSWORD="rahul"

# Logging function
echo_log() {
  echo "[INFO] $1"
}

# Pull the Percona PMM Server docker image
echo_log "Pulling Percona PMM Server docker image..."
sudo docker pull $PMM_IMAGE

# Create a data container for PMM
echo_log "Creating data container..."
sudo docker create --volume /srv --name $DATA_CONTAINER_NAME $PMM_IMAGE /bin/true

# Run the PMM server container
echo_log "Running PMM server container..."
sudo docker run -d --restart always --publish 443:443 --volumes-from $DATA_CONTAINER_NAME --name $PMM_CONTAINER_NAME $PMM_IMAGE

# Confirm external IP using curl
echo_log "Checking external IP..."
curl ident.me && echo

# Install Percona release package
echo_log "Checking for existing Percona release package..."
if [ -f "percona-release_latest.generic_all.deb" ]; then
  echo_log "Existing file found. Removing it..."
  rm percona-release_latest.generic_all.deb
fi

echo_log "Downloading Percona release package..."
wget https://repo.percona.com/apt/percona-release_latest.generic_all.deb

echo_log "Installing Percona release package..."
sudo apt install --reinstall -y ./percona-release_latest.generic_all.deb


# Update and install PMM client
echo_log "Updating and installing PMM client..."
sudo apt update
sudo apt-get install -y pmm2-client

# Verify PMM installation
echo_log "Verifying PMM installation..."
sudo pmm-admin -v

# Configure PMM Client
echo_log "Configuring PMM Client..."
sudo pmm-admin config --server-insecure-tls --server-url=https://admin:rahul@172.17.0.1:443 --force

# Connect to PostgreSQL and create a PMM user
echo_log "Creating PMM user in PostgreSQL..."
sudo docker exec -it $POSTGRES_CONTAINER_NAME psql -U postgres -d $DATABASE_NAME -c "CREATE USER $PMM_USERNAME WITH SUPERUSER ENCRYPTED PASSWORD '$PMM_PASSWORD';"


# Create pg_stat_statement Extension inside the psql
sudo docker exec -it $POSTGRES_CONTAINER_NAME psql -U postgres -d $DATABASE_NAME -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements";
# Add PostgreSQL instance to PMM
echo_log "Adding PostgreSQL instance to PMM..."

sudo pmm-admin add postgresql --username=$PMM_USERNAME --password=$PMM_PASSWORD --database=$DATABASE_NAME

# Restart PostgreSQL container
echo_log "Restarting PostgreSQL container..."
sudo docker restart $POSTGRES_CONTAINER_NAME

echo_log "Automation complete!"