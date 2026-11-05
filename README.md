# Vardhaman Gat — 3D Space Portfolio

A responsive, space-themed developer portfolio built with React, Vite, Three.js, React Three Fiber, Drei and Framer Motion.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite (usually http://localhost:5173).

## Personalize before publishing

Open `src/data.js` and update:
- `email` with your real public contact email.
- `github` with your GitHub profile URL.
- `linkedin` with your LinkedIn URL.
- Project repository links when you have uploaded those projects.
- Resume link after adding your PDF to the `public` folder (for example `resume.pdf`).

The portfolio deliberately describes you as an aspiring Java Full Stack Developer and does not invent employment or internship experience. Update the education status and project descriptions if needed.

## Publish on GitHub

Create a new public repository named `vardhaman-3d-space-portfolio`.

In the project terminal:

```bash
git init
git add .
git commit -m "Build 3D space portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/vardhaman-3d-space-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, complete the browser authentication.

## Deploy publicly with Vercel

1. Go to https://vercel.com/ and sign in using GitHub.
2. Click **Add New → Project**.
3. Import `vardhaman-3d-space-portfolio`.
4. Vercel should detect Vite automatically.
5. Confirm:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.
7. Vercel will provide a public URL such as `your-project.vercel.app`. Share that URL with anyone.

Every future push to the connected GitHub `main` branch can trigger a new deployment.

## Notes

- Three-dimensional effects use WebGL. On older phones or devices without WebGL, the page still has a CSS starfield and readable content.
- A reduced-motion preference is respected for the main motion effects.
- Replace placeholder project links and contact details before sharing the site with recruiters.
