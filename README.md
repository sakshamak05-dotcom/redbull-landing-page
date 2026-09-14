# Red Bull Landing Page — Flask + Python

An unofficial, fan-made Red Bull landing page built as a university
web-development assignment. **Not affiliated with or endorsed by Red Bull
GmbH.**

The site is served by a small Python (Flask) web server. The interactive
effects in the browser (spotlight, parallax, countdown, etc.) are already
written for you in `static/js/script.js` — you don't need to touch them.
Everything you'll actively run and edit is Python.

---

# PART 0 — Install what you need (one time only)

You need three things on your computer. Skip any you already have.

### 1. Python
Check if you have it:
```bash
python3 --version
```
If that errors, download from [python.org/downloads](https://www.python.org/downloads/)
and install it (Windows: tick "Add Python to PATH" during install).

### 2. Git
Check if you have it:
```bash
git --version
```
If that errors, download from [git-scm.com/downloads](https://git-scm.com/downloads)
and install with the default options.

### 3. A GitHub account
Sign up free at [github.com/join](https://github.com/join) if you don't
already have one.

That's it — no code editor is required, but VS Code
([code.visualstudio.com](https://code.visualstudio.com/)) is a good free
one if you want to open/edit files.

---

# PART 1 — Run the site on your own computer

1. Unzip this project somewhere, e.g. your Desktop.
2. Open a terminal (Mac: **Terminal** app. Windows: **Command Prompt** or
   **PowerShell**) and navigate into the folder:
   ```bash
   cd Desktop/redbull-flask
   ```
3. (Recommended) create a virtual environment, so this project's Python
   packages stay separate from everything else on your machine:
   ```bash
   python3 -m venv venv
   ```
   Activate it:
   ```bash
   # Mac / Linux
   source venv/bin/activate

   # Windows (PowerShell)
   venv\Scripts\activate
   ```
   You'll see `(venv)` appear at the start of your terminal line — that
   means it worked.
4. Install the two Python packages this project needs:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the app:
   ```bash
   python3 app.py
   ```
6. Open your browser to **http://127.0.0.1:5000** — you should see the
   live site. Move your mouse over the hero, scroll down, toggle
   dark/light mode, watch the countdown.
7. To stop the server, go back to the terminal and press `Ctrl+C`.

If port 5000 is already used by something else on your Mac (AirPlay
sometimes grabs it), edit the last line of `app.py` to
`app.run(debug=True, port=5001)` and use that port instead.

---

# PART 2 — Put it on GitHub (beginner walkthrough)

GitHub stores your code online and is what your instructor will look at.
Pick **Option A** if you want the easiest possible path with no typed
commands. Pick **Option B** if you're comfortable typing a few commands
(it's not hard, and it's the more common workflow).

## Option A — GitHub Desktop (no command line)

1. Download and install **GitHub Desktop**: [desktop.github.com](https://desktop.github.com/)
2. Open it and sign in with your GitHub account.
3. Click **File → Add local repository**, and select your `redbull-flask`
   folder.
4. It'll say "This directory does not appear to be a Git repository" —
   click **create a repository** in that same message.
5. Fill in a name (e.g. `redbull-landing-page`), leave the rest default,
   click **Create Repository**.
6. On the left you'll see a list of all your files staged for the first
   commit. Type a summary like `Initial commit` at the bottom left, and
   click **Commit to main**.
7. Click **Publish repository** at the top. Untick "Keep this code
   private" so your instructor can view it. Click **Publish**.
8. Done — your code is now on GitHub. Click **View on GitHub** to see it
   live, and copy that URL for your submission.

Whenever you change a file later: open GitHub Desktop, you'll see the
changed files listed, write a short commit summary, click **Commit to
main**, then click **Push origin** to send the update to GitHub.

## Option B — Command line

1. In your terminal, inside the `redbull-flask` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Red Bull landing page"
   git branch -M main
   ```
2. Go to [github.com/new](https://github.com/new), name the repo
   `redbull-landing-page`, leave it **Public**, don't tick any of the
   "initialize with README" options (you already have one), click
   **Create repository**.
3. GitHub will show you a page with commands — copy the ones under
   "…or push an existing repository from the command line", they'll look
   like:
   ```bash
   git remote add origin https://github.com/<your-username>/redbull-landing-page.git
   git push -u origin main
   ```
4. Run those two commands in your terminal. If it asks you to log in,
   follow the prompt (GitHub may ask you to authenticate via browser or a
   personal access token instead of a password).
5. Refresh the GitHub page — your files should now be there.

---

# PART 3 — Deploy it live (Render.com — free, Python-friendly)

GitHub Pages (the option many classmates will use) only hosts static
HTML/CSS/JS — it **can't run Python**. Since this project is a Flask app,
use **Render** instead, which runs real Python servers for free and
deploys straight from your GitHub repo.

1. Make sure Part 2 is done — your code needs to be on GitHub first.
2. Go to [render.com](https://render.com) and sign up (you can sign up
   directly with your GitHub account, which makes the next steps faster).
3. Click **New +** → **Web Service**.
4. Connect your GitHub account if prompted, then select your
   `redbull-landing-page` repository.
5. Fill in the settings:
   - **Name**: `redbull-landing-page` (or anything)
   - **Region**: closest to you
   - **Branch**: `main`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free
6. Click **Create Web Service**.
7. Render will install your dependencies and start the app — watch the
   log panel. It takes 1–3 minutes the first time.
8. Once it says "Live", your app is running at a URL like:
   `https://redbull-landing-page.onrender.com`

That's your **live website link**. Note: on Render's free tier, the app
"sleeps" after 15 minutes of no traffic and takes ~30–60 seconds to wake
up on the next visit — that's normal for a free tier, not a bug. Mention
this to your instructor if you like, or just visit the link yourself a
minute before they check it.

Any time you push new commits to GitHub (`git push`, or Publish in GitHub
Desktop), Render automatically redeploys the update within a minute or
two — you don't need to repeat these steps.

---

# PART 4 — Screenshots

Capture these with your live Render URL open in the browser, desktop
width (~1440px). A mobile-width (~390px) pass is a nice bonus but
optional:

1. Hero section on load.
2. Hero with the spotlight visible — move your mouse to the middle of the
   screen right before you screenshot.
3. Stats section (numbers mid count-up or settled).
4. Products section with a card hovered (tilt effect visible).
5. Countdown timer section.
6. Light mode turned on (click the toggle first).
7. Footer.

- Mac: `Cmd+Shift+4`, then drag to select an area.
- Windows: `Win+Shift+S` (Snipping Tool).

Save them into a `screenshots/` folder inside your project, then commit
and push that folder too (Part 2) so they're part of your submission.

---

# PART 5 — Short video (60–90 seconds)

Free screen recorders: Mac (`Cmd+Shift+5`), Windows (`Win+G` — Xbox Game
Bar), or [loom.com](https://www.loom.com) (works in any browser).

Record this sequence against your **live Render link**, narrating or
captioning each step:

1. Load the site — move the mouse in the hero to show spotlight +
   parallax.
2. Scroll through stats (let the counters animate), products (hover a
   couple of cards), and the culture marquee.
3. Toggle dark/light mode.
4. Point out the countdown timer ticking.
5. Click "Notify me" and submit the newsletter form to show they respond.
6. End on the footer with the disclaimer visible.

Upload it to YouTube (unlisted is fine), Google Drive, or wherever your
instructor accepts submissions, and grab the link.

---

# Submission checklist

- [ ] Live website link (your `onrender.com` URL)
- [ ] GitHub repository link (public)
- [ ] Screenshots (7, in `screenshots/`)
- [ ] Short video walkthrough (60–90s)

---

## Project structure

```
redbull-flask/
├── app.py                 ← Python/Flask server (edit this)
├── requirements.txt       ← Python packages needed
├── Procfile                ← tells Render how to start the app
├── .gitignore
├── templates/
│   └── index.html         ← page structure
├── static/
│   ├── css/style.css      ← styling
│   └── js/script.js       ← the 5 interactive features
└── README.md               ← this file
```

## Troubleshooting

- **`pip install` fails** — make sure your virtual environment is
  activated (you should see `(venv)` in your terminal prompt).
- **Port 5000 already in use** — see the note at the end of Part 1.
- **Render deploy fails** — check the build log on Render's dashboard for
  the actual error; almost always it's a typo in the Start Command
  (should be exactly `gunicorn app:app`).
- **Git asks for a password and rejects it** — GitHub no longer accepts
  account passwords over the command line. Use GitHub Desktop (Option A)
  to avoid this entirely, or look up "GitHub personal access token" if
  you want to stick with the command line.
