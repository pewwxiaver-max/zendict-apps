const apps = [
  {
    id: "zendict-ai",
    name: "Zendict AI",
    category: "ai",
    categoryLabel: "AI",
    icon: "Z",
    version: "1.0.0",
    platform: "Windows",
    description: "Your AI assistant for school, development, ideas, and everyday work.",
    downloadUrl: "#",
    note: "Replace this link in script.js with your real .exe download or GitHub Release link."
  }
  // Add more apps here:
  // {
  //   id: "my-app",
  //   name: "My App",
  //   category: "developer",
  //   categoryLabel: "Developer",
  //   icon: "M",
  //   version: "1.0.0",
  //   platform: "Windows",
  //   description: "What your app does.",
  //   downloadUrl: "https://github.com/YOURNAME/YOURREPO/releases/latest",
  //   note: "Windows 10/11"
  // }
];

const grid = document.getElementById("appsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");
const appCount = document.getElementById("appCount");
const modal = document.getElementById("appModal");

function renderApps() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = apps.filter(app => {
    const matchesText = `${app.name} ${app.description} ${app.categoryLabel}`.toLowerCase().includes(query);
    const matchesCategory = category === "all" || app.category === category;
    return matchesText && matchesCategory;
  });

  grid.innerHTML = filtered.map(app => `
    <article class="app-card">
      <div class="app-top">
        <div class="app-icon">${escapeHtml(app.icon)}</div>
        <span class="tag">${escapeHtml(app.categoryLabel)}</span>
      </div>
      <h3>${escapeHtml(app.name)}</h3>
      <p>${escapeHtml(app.description)}</p>
      <div class="app-footer">
        <span class="version">v${escapeHtml(app.version)} · ${escapeHtml(app.platform)}</span>
        <button class="small-btn" data-app="${escapeHtml(app.id)}">View & Download</button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
  appCount.textContent = `${apps.length} ${apps.length === 1 ? "app" : "apps"} available`;
  grid.querySelectorAll("[data-app]").forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.app)));
}

function openModal(id) {
  const app = apps.find(x => x.id === id);
  if (!app) return;

  document.getElementById("modalIcon").textContent = app.icon;
  document.getElementById("modalCategory").textContent = app.categoryLabel;
  document.getElementById("modalTitle").textContent = app.name;
  document.getElementById("modalDescription").textContent = app.description;
  document.getElementById("modalVersion").textContent = `Version ${app.version}`;
  document.getElementById("modalPlatform").textContent = app.platform;
  document.getElementById("downloadButton").href = app.downloadUrl;
  document.getElementById("downloadNote").textContent = app.note || "";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

searchInput.addEventListener("input", renderApps);
categoryFilter.addEventListener("change", renderApps);
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("navLinks").classList.remove("show");
}));
document.getElementById("year").textContent = new Date().getFullYear();

renderApps();
