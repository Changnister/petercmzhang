// Consolidated articles data for homepage featured selection
// This file gathers articles from Publications, Scholarly, and Media
// so the homepage can show the most recent items across all sources.

(function (global) {
  // Publications (extracted from publications.html)
  const PUBLICATIONS = [
    {
      date: "November 28, 2025",
      title:
        "Pharmacists: Bridging the gap between AI and patient-centred care",
      authors: "Co-author: Mona Samani & Savana Elsays, PharmD",
      journal: "Healthy Debate",
      url: "https://healthydebate.ca/2025/11/topic/pharmacists-bridging-gap-ai-patient-centered-care/",
      image: "Images/pharmacistsareessentialtobridging.png",
      tag: ["Healthcare", "Technology", "Pharmacy"],
    },
    {
      date: "September 12, 2025",
      title: "What pharmacists can learn from Asepha's $4M seed fund raising",
      authors: "",
      journal: "Canadian Healthcare Network",
      url: "https://canadianhealthcarenetwork.ca/what-pharmacists-can-learn-asephas-4m-seed-fund-raising",
      image: "Images/venturecapital.jpg",
      tag: ["Pharmacy", "Healthcare"],
    },
    {
      date: "August 10, 2025",
      title:
        "As pharmacists, we must be empowered to act in the face of Canada’s painkiller shortage",
      authors: "Co-author: Mina Tadrous, PharmD, PhD",
      journal: "Toronto Star",
      url: "https://www.thestar.com/opinion/contributors/as-pharmacists-we-must-be-empowered-to-act-in-the-face-of-canadas-painkiller-shortage/article_8d3cf6b5-5a03-4783-b3fe-84722d9d7266.html",
      image: "Images/DrugShortages.jpg",
      tag: ["Pharmacy", "Healthcare"],
    },
    // NOTE: To keep this file small, only the most-recent publications are included here.
  ];

  // Scholarly (extracted from scholarly.html)
  const SCHOLARLY = [
    {
      date: "October 4, 2025",
      title: "Empowering pharmacists in Canada’s drug shortage response",
      authors: "Zhang, P. C., Tadrous, M.",
      journal: "Canadian Pharmacists Journal / Revue des Pharmaciens du Canada",
      volume: "0(0)",
      doi: "10.1177/17151635251365666",
      url: "https://journals.sagepub.com/doi/10.1177/17151635251365666",
      image: "https://peterczhang.com/Images/drugshortagescholar.jpg",
      tag: ["Healthcare", "Pharmacy"],
    },
    {
      date: "December 23, 2024",
      title:
        "RAG in Health Care: A Novel Framework for Improving Communication and Decision-Making by Addressing LLM Limitations",
      authors: "Ng, K. K. Y., Matsuba, I., & Zhang, P. C.",
      journal: "NEJM AI",
      volume: "2(1)",
      doi: "10.1056/AIra2400380",
      url: "https://ai.nejm.org/doi/full/10.1056/AIra2400380",
      image: "https://peterczhang.com/Images/NEJM-AI.jpg",
      tag: ["Healthcare", "Technology"],
    },
  ];

  // Media (extracted from media.html)
  const MEDIA = [
    {
      date: "December 6, 2024",
      title:
        "Collaborative Care: A Pharmacist's Insights on Research and Medicine with Peter Zhang",
      authors: "",
      journal: "Canadian Federation of Medical Students",
      url: "https://open.spotify.com/episode/7cq77TnWcSRj9okl4T9vN2?si=8a97d222243e46d3",
      image: "Images/collaborativeCFMS.png",
      tag: ["Interview"],
    },
    {
      date: "November 26, 2024",
      title: "Emerging Leader in Pharmacy Practice Award",
      authors: "",
      journal: "Leslie Dan Faculty of Pharmacy, University of Toronto",
      url: "https://www.pharmacy.utoronto.ca/news-announcements/congratulations-2024-alumni-awards-recipients",
      image: "Images/emergingleaderinpharmacy.jpg",
      tag: ["Award"],
    },
  ];

  // Expose combined & sorted list on the global object
  const ALL = PUBLICATIONS.concat(SCHOLARLY, MEDIA).map((a) => ({
    // normalize date to a parseable format for sorting
    date: a.date,
    title: a.title,
    authors: a.authors,
    journal: a.journal,
    url: a.url,
    image: a.image,
    tag: a.tag,
  }));

  ALL.sort((x, y) => new Date(y.date) - new Date(x.date));

  global.ALL_ARTICLES = ALL;
})(window);
