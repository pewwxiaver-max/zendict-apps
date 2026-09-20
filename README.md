# Zendict Apps

A free, responsive app-download website built with plain HTML, CSS, and JavaScript.

## Run locally
Open `index.html` in your browser.

## Add an app
Open `script.js` and add another object inside the `apps` array.

Example:

{
  id: "my-app",
  name: "My App",
  category: "developer",
  categoryLabel: "Developer",
  icon: "M",
  version: "1.0.0",
  platform: "Windows",
  description: "What my app does.",
  downloadUrl: "https://github.com/YOURNAME/YOURREPO/releases/latest",
  note: "Windows 10/11"
}

## Publish for free with GitHub Pages
1. Create a GitHub account.
2. Create a new public repository, for example `zendict-apps`.
3. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose "Deploy from a branch".
6. Select the `main` branch and `/ (root)`, then Save.
7. GitHub will give you a free `github.io` website address.

## Important
The website starts with no apps listed. Add your own app entries in `script.js` and put your real download URL in each app's `downloadUrl` field.

For large app installers, GitHub Releases is a practical free option.
