// Populate and configure the logos marquee for the BYLINES IN section
document.addEventListener("DOMContentLoaded", function () {
  const logos = [
    { src: "Images/windsorstarlogo.png", alt: "Windsor Star" },
    { src: "Images/Toronto Star Logo.png", alt: "Toronto Star" },
    { src: "Images/springernaturelogo.png", alt: "Springer Nature" },
    { src: "Images/PQ Logo.png", alt: "Poets & Quants" },
    { src: "Images/Policy Options Logo.png", alt: "Policy Options" },
    { src: "Images/Ottawa Citizen Logo.png", alt: "Ottawa Citizen" },
    { src: "Images/NEJM AI Logo.png", alt: "NEJM AI" },
    { src: "Images/MCN Logo.png", alt: "MedCity News" },
    { src: "Images/Mastercard Logo.png", alt: "Mastercard" },
    {
      src: "Images/JPPP-Photoroom.png",
      alt: "Journal of Pharmaceutical Policy and Practice",
    },
    { src: "Images/hospitalnewslogo.png", alt: "Hospital News" },
    { src: "Images/hilltimeslogo.png", alt: "The Hill Times" },
    { src: "Images/Healthy Debate Logo.webp", alt: "Healthy Debate" },
    { src: "Images/HamiltonLogo.png", alt: "Hamilton Spectator" },
    { src: "Images/GPJ Logo.png", alt: "Global Policy Journal" },
    { src: "Images/Globe & Mail Logo.png", alt: "Globe and Mail" },
    {
      src: "Images/EJHP Logo.png",
      alt: "European Journal of Hospital Pharmacy",
    },
    { src: "Images/chnlogo.png", alt: "Canadian Healthcare Network" },
    {
      src: "Images/cph-cover-social-1747378722343-Photoroom.png",
      alt: "Canadian Pharmacists Journal",
    },
    { src: "Images/bmjghlogo.png", alt: "BMJ Global Health" },
    {
      src: "Images/3dprintinglogo.png",
      alt: "Biomed Central (3D Printing in Medicine)",
    },
    { src: "Images/NEJM AI Logo.png", alt: "NEJM AI" },
    { src: "Images/Globe & Mail Logo.png", alt: "Globe and Mail" },
  ];

  const el = document.getElementById("bylinesLogos");
  if (!el) return;

  function makeFrag() {
    const frag = document.createDocumentFragment();
    logos.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || item.src.split("/").pop().replace(/[-_.]/g, " ");
      img.className = "logo-img";
      // Force eager loading for marquee images so width measurements work
      // reliably when the page is served (avoids lazy-loading race conditions).
      img.loading = "eager";
      frag.appendChild(img);
    });
    return frag;
  }

  // Insert the first sequence
  el.appendChild(makeFrag());

  // After initial images load, measure one sequence width and duplicate sequence for continuity
  function setupMarquee() {
    const imgs = Array.from(el.querySelectorAll("img"));
    if (imgs.length === 0) return;

    // Ensure at least the first sequence images have dimensions
    const firstSeq = imgs.slice(0, logos.length);
    const allLoaded = firstSeq.every((i) => i.complete || i.naturalWidth);
    if (!allLoaded) {
      // Retry shortly
      setTimeout(setupMarquee, 80);
      return;
    }

    // Compute width of one sequence including gaps
    const gap = 28; // matches CSS .logos-scroll gap
    let oneSeqWidth =
      firstSeq.reduce((sum, i) => sum + i.getBoundingClientRect().width, 0) +
      gap * (firstSeq.length - 1);

    // If images didn't report widths (e.g., still unloaded or blocked by lazy-loading),
    // fall back to using the CSS width of the first image so the marquee still moves.
    if (!oneSeqWidth || oneSeqWidth < 10) {
      const cssW =
        (firstSeq[0] && parseFloat(getComputedStyle(firstSeq[0]).width)) || 140;
      const fallback = cssW * firstSeq.length + gap * (firstSeq.length - 1);
      if (fallback > 10) {
        oneSeqWidth = fallback;
      }
    }

    // Duplicate sequence so animation can scroll smoothly
    el.appendChild(makeFrag());

    // Set CSS variables used by CSS animation
    el.style.setProperty("--one-seq", Math.round(oneSeqWidth) + "px");
    el.style.setProperty("--translate", "-" + Math.round(oneSeqWidth) + "px");

    // Duration scaled to width (longer for more logos), with sensible bounds
    const baseSec = 30;
    const duration = Math.max(
      18,
      Math.min(80, Math.round((oneSeqWidth / 1000) * baseSec))
    );
    el.style.setProperty("--marquee-duration", duration + "s");
  }

  // Kick off setup after a short delay to allow layout
  setTimeout(setupMarquee, 120);

  // Respect prefers-reduced-motion
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) {
    el.style.animation = "none";
  }
});
