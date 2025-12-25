// logoMarquee.js
// Compute translate distance and duration for marquees. Supports multiple
// `.logos-scroll` elements on the page (e.g., bylines and speaking logos).
(function () {
  function initFor(scrollEl) {
    const container = scrollEl.closest(".logos-scroll-container");
    if (!container) return;

    // Remove previously appended clones and original markers (safe reset)
    function resetClonesOuter() {
      if (!scrollEl.dataset.cloned) return;
      const nodes = Array.from(scrollEl.children);
      nodes.forEach((n) => {
        if (!n.hasAttribute("data-original")) {
          scrollEl.removeChild(n);
        }
      });
      Array.from(scrollEl.children).forEach((c) =>
        c.removeAttribute("data-original")
      );
      delete scrollEl.dataset.cloned;
    }

    function update() {
      // mark that we're programmatically updating to avoid reacting to our own mutations
      scrollEl.dataset.updating = "1";

      // Helper: mark originals and clone them once
      function ensureCloned() {
        if (scrollEl.dataset.cloned) return;
        const children = Array.from(scrollEl.children);
        // mark originals so we can remove clones later if the list changes
        children.forEach((c) => c.setAttribute("data-original", "1"));
        children.forEach((c) => {
          const clone = c.cloneNode(true);
          scrollEl.appendChild(clone);
        });
        scrollEl.dataset.cloned = "1";
      }

      ensureCloned();
      // Attach load watchers for images (so cloned images get listeners too)
      attachImageLoadWatchers();

      // Make sure images are loaded before measuring to avoid layout mismatch
      const imgs = Array.from(scrollEl.querySelectorAll("img"));
      const allLoaded = imgs.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((res) => {
          img.addEventListener("load", res, { once: true });
          img.addEventListener("error", res, { once: true });
        });
      });

      Promise.all(allLoaded).then(() => {
        // total content width (original+clone) and width of one sequence
        const totalW = scrollEl.scrollWidth;
        const oneSeqW = Math.round(totalW / 2);

        // set CSS var so keyframes translate by exact pixel width
        scrollEl.style.setProperty("--one-seq", oneSeqW + "px");
        // set explicit translate variable as a robust fallback
        scrollEl.style.setProperty("--translate", `-${oneSeqW}px`);

        // compute duration based on pixels at a fixed px/sec rate
        const speedPxPerSec = 120; // tweak this to change speed (higher=faster)
        let durationSec = Math.max(8, Math.round(oneSeqW / speedPxPerSec));
        durationSec = Math.max(8, Math.min(180, durationSec));
        scrollEl.style.setProperty("--marquee-duration", durationSec + "s");
        // finished updating
        delete scrollEl.dataset.updating;
      });
    }

    // prevent horizontal wheel scrolling while allowing vertical page scroll
    container.addEventListener(
      "wheel",
      (e) => {
        // if user is trying to scroll horizontally (deltaX) or using shift key, prevent it
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    // Debounced update helper
    function debounce(fn, wait) {
      let t;
      return function () {
        clearTimeout(t);
        t = setTimeout(fn, wait);
      };
    }

    const debouncedUpdate = debounce(update, 120);

    // Watch for DOM changes inside the logos container (items added/removed)
    const mo = new MutationObserver((mutations) => {
      if (scrollEl.dataset.updating) return; // ignore mutations caused by our own update
      let needsReset = false;
      for (const m of mutations) {
        if (m.type === "childList") {
          needsReset = true;
          break;
        }
      }
      if (needsReset) {
        // remove existing clones safely and recompute
        resetClonesOuter();
        debouncedUpdate();
      }
    });
    mo.observe(scrollEl, { childList: true, subtree: false });

    // Add image load listeners to call update when individual images finish loading
    // This handles late-loading images (e.g., lazy images) to recompute the marquee
    function attachImageLoadWatchers() {
      const imgs = Array.from(scrollEl.querySelectorAll("img"));
      imgs.forEach((img) => {
        if (img.dataset.listenAttached) return;
        img.addEventListener("load", debouncedUpdate);
        img.addEventListener("error", debouncedUpdate);
        img.dataset.listenAttached = "1";
      });
    }

    // attach watchers immediately and after update runs
    attachImageLoadWatchers();

    // recompute on load and resize (per-scroll element)
    window.addEventListener("load", update);
    window.addEventListener("resize", () => {
      // small debounce per element
      clearTimeout(scrollEl.__logoMarqueeTimer);
      scrollEl.__logoMarqueeTimer = setTimeout(update, 120);
    });

    // Run an initial measurement immediately and schedule a short retry.
    try {
      update();
    } catch (e) {
      // ignore — update will run on window load
    }
    // Retry once after 700ms in case some resources finish shortly after
    setTimeout(update, 700);

    // expose reset function for this element (used by MutationObserver handler)
    function resetClonesOuter() {
      if (!scrollEl.dataset.cloned) return;
      const nodes = Array.from(scrollEl.children);
      nodes.forEach((n) => {
        if (!n.hasAttribute("data-original")) {
          scrollEl.removeChild(n);
        }
      });
      Array.from(scrollEl.children).forEach((c) =>
        c.removeAttribute("data-original")
      );
      delete scrollEl.dataset.cloned;
    }
  }

  // initialize for all marquees on the page
  const nodes = Array.from(document.querySelectorAll(".logos-scroll"));
  nodes.forEach((n) => initFor(n));
})();
  }
  // Retry once after 700ms in case some resources finish shortly after
  setTimeout(update, 700);
})();
