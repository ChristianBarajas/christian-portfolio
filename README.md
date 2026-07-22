# Christian Barajas — Software Engineer Portfolio

A dark, responsive personal portfolio showcasing Christian's software engineering work, collaborative approach, and life beyond code.

## Featured projects

- **Brutal Rig** — Guided guitar and bass rig recommendations for metal musicians.
- **Band Practice** — Band scheduling, availability, practice planning, and goal setting.
- **Bosco Blackjack** — Professional customer-facing website and booking path for a blackjack dealer.

## Tech stack

- React
- Vite
- JavaScript
- Custom responsive CSS
- Firebase Hosting

## Open locally in VS Code

```bash
cd ~/Desktop/christian-portfolio
npm install
npm run dev
```

Vite will print a local address such as `http://localhost:5173`.

## Build the production website

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Push to GitHub

Create an empty public repository named `christian-portfolio` on GitHub. Do not add a README or `.gitignore` on GitHub because this project already includes them.

Then run:

```bash
cd ~/Desktop/christian-portfolio
git init
git add .
git commit -m "Launch personal software engineering portfolio"
git branch -M main
git remote add origin https://github.com/ChristianBarajas/christian-portfolio.git
git push -u origin main
```

## Deploy through Firebase Hosting

Install and sign in to the Firebase CLI if needed:

```bash
npm install -g firebase-tools
firebase login
```

From the project folder, connect the Firebase project you want to use:

```bash
cd ~/Desktop/christian-portfolio
firebase use --add
```

Choose an existing Firebase project or create a new one in the Firebase Console. Give the alias `default` when prompted.

Deploy:

```bash
npm run deploy
```

Firebase will print the public Hosting URL when deployment finishes.

## Updating the website later

After editing the source:

```bash
npm run build
git add .
git commit -m "Update portfolio"
git push
firebase deploy --only hosting
```

## Project structure

```text
christian-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── firebase.json
├── index.html
├── package.json
└── vite.config.js
```
