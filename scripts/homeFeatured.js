// Clone the two most-recent .bento-card elements from #articleList into #homeFeaturedList
// Runs on DOMContentLoaded. Keeps markup single-source (no duplicated content maintenance).
(function () {
  function populateHomeFeatured() {
    try {
      // Prefer consolidated data if available; fall back to DOM cloning
      var homeContainer = document.getElementById("homeFeaturedList");
      if (!homeContainer) return;

      // Clear any existing children
      homeContainer.innerHTML = "";

      // If consolidated data is present, use it and render the top 2 by date
      var source = window.ALL_ARTICLES;
      if (
        Array.isArray(source) &&
        source.length > 0 &&
        typeof window.renderArticlesBento === "function"
      ) {
        var top = source.slice(0, 2);
        // renderArticlesBento expects a container id; create a temporary container
        // inside `homeFeaturedList` so the renderer can append the grid.
        var wrapper = document.createElement("div");
        wrapper.id = "homeFeaturedList";
        // Ensure we call renderer with containerId matching the container we want
        // But to avoid id collisions, directly call renderer with the existing id.
        // Put a placeholder element with id 'homeFeaturedList' for the renderer.
        var placeholder = document.createElement("div");
        placeholder.id = "homeFeaturedList-inner";
        homeContainer.appendChild(placeholder);

        // Use renderArticlesBento to render into the placeholder
        window.renderArticlesBento(top, "homeFeaturedList-inner");

        // Add featured-two class to the grid for consistent styling
        var grid = homeContainer.querySelector(
          "#homeFeaturedList-inner .bento-grid"
        );
        if (grid) grid.classList.add("featured-two");

        return;
      }

      // Fallback: clone existing articleList DOM (older behaviour)
      var articleList = document.querySelector("#articleList .bento-grid");
      var homeGrid = document.querySelector("#homeFeaturedList .bento-grid");
      if (!articleList || !homeGrid) return;

      var cards = Array.from(articleList.querySelectorAll(".bento-card"));
      if (cards.length === 0) return;
      var take = cards.slice(0, 2);
      take.forEach(function (card) {
        var clone = card.cloneNode(true);
        homeGrid.appendChild(clone);
      });
    } catch (err) {
      console.error("homeFeatured: failed to populate", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", populateHomeFeatured);
  } else {
    populateHomeFeatured();
  }
})();
