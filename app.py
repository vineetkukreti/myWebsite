from flask import Flask, jsonify, render_template
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load project data from JSON file
with open('projects.json', 'r') as f:
    projects_data = json.load(f)

# In-memory database (replace with a real database in production)
portfolio_data = {
    "name": "Vineet Kukreti",
    "title": "AI/ML Engineer | Computer Science Student",
    "about": "AI/ML Engineer at South Guild Tech, focusing on enhancing machine learning frameworks and applying expertise in data annotation and large language models. Currently pursuing a Bachelor's degree in Computer Science at Graphic Era Hill University.",
    "experiences": [
        {
            "title": "AI/ML Engineer",
            "company": "South Guild Tech",
            "date": "April 2024 - Present",
            "description": "Enhancing machine learning frameworks and applying expertise in data annotation and large language models."
        },
        {
            "title": "Machine Learning Intern",
            "company": "TEKNOCRAT SERVICES LIMITED",
            "date": "April 2024 - August 2024",
            "description": "Contributed to pivotal projects leveraging machine learning and computer vision skills."
        }
    ],
    "skills": [
        "LangChain", "RAG", "Vector Databases", "Machine Learning",
        "Computer Vision", "Flask", "Python", "TensorFlow", "PyTorch"
    ],
    "contact": {
        "email": "vineetkukreti34@gmail.com",
        "linkedin": "https://www.linkedin.com/in/vineetkukretii",
        "github": "https://github.com/vineetkukreti",
        "website": "https://vineetkukreti.rocks/"
    }
}

@app.route('/')
def home():
    return render_template('index.html', portfolio=portfolio_data, projects=projects_data['projects'])

@app.route('/api/portfolio')
def get_portfolio():
    return jsonify(portfolio_data)

@app.route('/api/projects')
def get_projects():
    return jsonify(projects_data)

if __name__ == '__main__':
    app.run(debug=True)