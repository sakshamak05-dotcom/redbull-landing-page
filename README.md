Red Bull Landing Page

University web development assignment — a landing page built with Flask (Python) on the backend and HTML/CSS/JS on the frontend.

Not affiliated with or endorsed by Red Bull GmbH — this is a student project only.

Features
Cursor-following spotlight effect in the hero section
Parallax background shapes that move with the mouse
Scroll-triggered animations and animated stat counters
A live countdown timer to a sample event date
Dark/light mode toggle (saved with localStorage)
Hover effects on the product cards
A front-end newsletter signup form
Tech stack
Python + Flask (serves the page)
HTML / CSS / JavaScript (frontend + interactivity)
Deployed on Render
Running it locally
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

Then open http://127.0.0.1:5000 in a browser.

Live site

[link here]

Project structure
redbull-flask/
├── app.py
├── requirements.txt
├── Procfile
├── templates/index.html
└── static/
    ├── css/style.css
    └── js/script.js
