"""
Red Bull landing page — Flask app.

This is a tiny Python web server. Its only job is to hand the browser
one HTML page (which then runs its own CSS/JS for the interactive
features). Everything you need to run and deploy this lives in this
one file plus requirements.txt.
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    """Serve the landing page."""
    return render_template("index.html")


if __name__ == "__main__":
    # debug=True auto-reloads the page when you edit files — handy while
    # you're working on this locally. Turn it off (or just don't worry
    # about it) once deployed; the deployment step below handles that.
    app.run(debug=True)
