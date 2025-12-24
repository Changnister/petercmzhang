// scripts/renderArticles.js
// Shared bento renderer (future centralization). Pages currently have
// per-page renderArticles implementations; this file provides a
// reusable renderer if you later want to call it from pages.

(function (global) {
  function renderArticles(articles, containerId = "articleList") {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "bento-grid";

    articles.forEach((a) => {
      const card = document.createElement("article");
      card.className = "bento-card";

      // Make whole card clickable: anchor wraps image + body
      const link = document.createElement("a");
      link.className = "card-link";
      link.href = a.url || "#";
      link.target = a.target || "_blank";
      link.rel = a.target === "_blank" ? "noopener" : "";

      const img = document.createElement("img");
      img.className = "card-media";
      img.alt = a.title || "";
      img.loading = "lazy";
      img.src = a.image || "Images/Linkpopup.png";

      const body = document.createElement("div");
      body.className = "card-body";

      // group the main content to keep read-more at the bottom via flex spacing
      const content = document.createElement("div");
      content.className = "card-content";

      const title = document.createElement("h3");
      title.className = "card-title";
      title.textContent = a.title || "";
      content.appendChild(title);

      // Emphasize journal/platform separately
      if (a.journal) {
        const journal = document.createElement("div");
        journal.className = "card-journal";
        journal.textContent = a.journal;
        content.appendChild(journal);
      }

      // We'll place date and authors into a meta block so they sit
      // visually toward the bottom of the card (better fill)
      const metaBlock = document.createElement("div");
      metaBlock.className = "card-meta-block";

      if (a.date) {
        const dateEl = document.createElement("div");
        dateEl.className = "card-date";
        dateEl.textContent = a.date;
        metaBlock.appendChild(dateEl);
      }

      if (a.authors) {
        const authorsEl = document.createElement("div");
        authorsEl.className = "card-authors";
        authorsEl.textContent = a.authors;
        metaBlock.appendChild(authorsEl);
      }

      // assemble (no explicit "Read more" element; the whole card is clickable)
      body.appendChild(content);
      body.appendChild(metaBlock);

      // no CTA element: whole-card linking is primary affordance
      link.appendChild(img);
      link.appendChild(body);
      card.appendChild(link);
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  global.renderArticlesBento = renderArticles;
  global.filterAndSortArticlesBento = function (
    source = window.articlesData || [],
    containerId = "articleList"
  ) {
    const search = (document.getElementById("searchInput") || {}).value || "";
    const tagFilter =
      (document.getElementById("tagFilter") || {}).value || "all";
    const sortOrder =
      (document.getElementById("sortOrder") || {}).value || "newest";

    let filtered = source.filter((a) => {
      const inTag = tagFilter === "all" || (a.tag || []).includes(tagFilter);
      const q = search.trim().toLowerCase();
      const inText =
        q === "" ||
        (a.title + " " + (a.journal || "") + " " + (a.authors || ""))
          .toLowerCase()
          .includes(q);
      return inTag && inText;
    });

    filtered.sort((x, y) => {
      const dx = new Date(x.date || 0).getTime() || 0;
      const dy = new Date(y.date || 0).getTime() || 0;
      return sortOrder === "newest" ? dy - dx : dx - dy;
    });

    renderArticles(filtered, containerId);
  };
})(window);
