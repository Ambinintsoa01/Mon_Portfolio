/**
 * Portfolio JavaScript - Ambinintsoa RAKOTOARISEDY
 * Interactive features, theme toggle (dark/light), filtering, modal system, animations
 */

// Project dataset with deep architectural insights from GitHub repositories
const projectsData = {
  "perso-stock": {
    title: "Application de Gestion Commerciale, Achats & Stocks",
    category: "Flutter / Dart / PLpgSQL",
    badge: "Cross-Platform ERP",
    image: "assets/images/project-stock.svg",
    githubUrl: "https://github.com/Ambinintsoa01/Perso_achat_vente_stock-standard-",
    shortDesc: "Solution complète de gestion commerciale multiplateforme (Desktop & Mobile) pour le suivi des stocks, des commandes d'achats, de la facturation et des marges en temps réel.",
    fullDesc: "Conçue pour répondre aux contraintes opérationnelles des PME et des commerces de détail, cette solution assure une traçabilité intégrale des mouvements d'articles, de la commande fournisseur jusqu'à la vente client finale. L'application s'appuie sur une base de données relationnelle haute performance et implémente des règles de gestion financière strictes.",
    highlights: [
      "Architecture Clean & réactive développée en Dart/Flutter pour un déploiement unifié Desktop et Mobile.",
      "Moteur de calcul automatisé des marges brutes, valorisation des stocks (PMP / FIFO) et alertes de réapprovisionnement.",
      "Schéma relationnel optimisé avec procédures stockées en PL/pgSQL assurant l'intégrité transactionnelle (ACID).",
      "Édition et génération automatisée de factures, bordereaux de livraison et rapports comptables exportables.",
      "Mode offline-ready avec synchronisation bidirectionnelle lors de la reconnexion réseau."
    ],
    techs: ["Flutter", "Dart", "PLpgSQL", "PostgreSQL", "C++", "CMake", "Cross-Platform"]
  },
  "finance-mgmt": {
    title: "Système de Pilotage Financier & Budgétisation",
    category: "Flutter / Dart / Finance",
    badge: "FinTech & Analytics",
    image: "assets/images/project-finance.svg",
    githubUrl: "https://github.com/Ambinintsoa01/Finance_managment",
    shortDesc: "Plateforme moderne d'analyse financière et de contrôle de gestion avec tableaux de bord analytiques interactifs, ventilation des flux et prévisions budgétaires.",
    fullDesc: "Une application avancée de gestion de patrimoine et de trésorerie d'entreprise. Elle permet une catégorisation fine des dépenses, l'établissement de budgets prévisionnels avec alertes de dépassement, et une visualisation claire des métriques de rentabilité.",
    highlights: [
      "Tableaux de bord graphiques dynamiques avec courbes de flux de trésorerie et graphiques de répartition en temps réel.",
      "Gestion multi-comptes, devises internationales et calcul automatisé des soldes prévisionnels.",
      "Stockage sécurisé des données financières sensibles avec chiffrement local et audit trails.",
      "Rapprochement bancaire simplifié avec historisation des écritures et détection d'anomalies.",
      "Codebase optimisé pour un framerate constant de 60 FPS sur iOS, Android et ordinateurs de bureau."
    ],
    techs: ["Dart", "Flutter", "PostgreSQL", "PLpgSQL", "DataViz", "FinTech"]
  },
  "projet-cloud": {
    title: "Plateforme Cloud Distribuée & Microservices",
    category: "Vue.js / Java / Docker",
    badge: "Cloud Architecture",
    image: "assets/images/project-cloud.svg",
    githubUrl: "https://github.com/Ambinintsoa01/Projet_cloud",
    shortDesc: "Application cloud-native associant une Single Page Application réactive en Vue.js, un backend robuste en Java, et une orchestration conteneurisée via Docker.",
    fullDesc: "Projet centré sur la scalabilité horizontale et la séparation des responsabilités. Le backend Java expose une API RESTful normalisée, tandis que l'interface Vue.js offre une expérience utilisateur ultra-fluide avec gestion centralisée de l'état.",
    highlights: [
      "Déploiement automatisé multi-conteneurs via Docker et Docker Compose.",
      "API RESTful découplée conçue en Java avec authentification par jetons et gestion fine des privilèges.",
      "Interface utilisateur monopage (SPA) avec Vue.js, Vue Router et gestion d'état réactive.",
      "Architecture orientée microservices facilitant l'extension horizontale et la résilience.",
      "Pipeline d'intégration et respect des bonnes pratiques de sécurité réseau."
    ],
    techs: ["Vue.js", "Java", "Docker", "REST API", "Microservices", "JavaScript", "Cloud"]
  },
  "smmec-ticketing": {
    title: "Guichet & Système de Billetterie Intelligent SMMEC",
    category: "Full-Stack / Python / Flutter",
    badge: "Enterprise Booking",
    image: "assets/images/project-ticket.svg",
    githubUrl: "https://github.com/Ambinintsoa01/SMMEC_billeterie",
    shortDesc: "Système intégré d'émission, de réservation et de contrôle de tickets avec validation instantanée par QR code et synchronisation multi-terminaux.",
    fullDesc: "Développé pour fluidifier la billetterie et la gestion des flux de participants pour des événements et guichets institutionnels. Le projet combine un back-end en Python/PHP pour la logique métier et une application cliente réactive.",
    highlights: [
      "Génération sécurisée de billets numériques uniques dotés de QR codes cryptographiques.",
      "Module de scannage et de contrôle d'accès en temps réel pour éviter la fraude et les doublons.",
      "Gestion dynamique des zones, plans de salle et tarifications différenciées (VIP, Grand Public).",
      "Tableau de bord statistique affichant les taux de remplissage et les encaissements instantanés.",
      "Architecture tolérante aux pannes avec mode secours pour le guichet en cas d'interruption réseau."
    ],
    techs: ["Python", "Dart", "PHP", "JavaScript", "QR Engine", "Ticketing"]
  },
  "wav-project": {
    title: "Analyseur & Moteur Audio Binaire WAV",
    category: "Python / Traitement Binaire",
    badge: "Audio Engineering",
    image: "assets/images/project-wav.svg",
    githubUrl: "https://github.com/Ambinintsoa01/WAV_project",
    shortDesc: "Projet d'ingénierie logicielle bas niveau dédié au décodage binaire des en-têtes RIFF, à la manipulation des échantillons PCM et à la synthèse acoustique en Python pur.",
    fullDesc: "Une exploration approfondie de la manipulation binaire bit-à-bit et des formats multimédias audio non compressés. Le programme lit, analyse, valide la structure des en-têtes RIFF/WAV, et applique des traitements numériques du signal directement sur le flux binaire brut.",
    highlights: [
      "Parsing direct des en-têtes de paquets RIFF (ChunkID, Format, Subchunk1, Subchunk2) via la manipulation de flux d'octets bruts.",
      "Extraction et modification des paramètres audio critiques : fréquence d'échantillonnage, quantification (16/24-bit), canaux mono/stéréo.",
      "Implémentation d'algorithmes de filtrage fréquentiel, normalisation d'amplitude et rééchantillonnage sonore.",
      "Génération et réencodage de fichiers audio valides respectant à l'octet près la spécification RIFF WAV.",
      "Démonstration d'une compréhension approfondie de l'architecture binaire et de l'optimisation mémoire bas niveau."
    ],
    techs: ["Python", "Binary Parsing", "PCM Audio", "Signal Processing", "RIFF Spec"]
  },
  "bibliotheque": {
    title: "Système de Gestion de Bibliothèque Numérique",
    category: "TypeScript / Java / Spring",
    badge: "Library Management",
    image: "assets/images/project-library.svg",
    githubUrl: "https://github.com/Ambinintsoa01/Bibliotheque",
    shortDesc: "Plateforme de gestion de fonds documentaire et d'emprunts d'ouvrages avec typage strict TypeScript et architecture backend Java modulée.",
    fullDesc: "Une solution conçue pour les médiathèques et institutions d'enseignement. Elle assure le catalogage structuré des ouvrages (ISBN, auteurs, catégories), la gestion des comptes usagers, le suivi des prêts et les pénalités de retard automatisées.",
    highlights: [
      "Typage statique rigoureux avec TypeScript garantissant une robustesse accrue et l'absence de bugs à l'exécution.",
      "Backend Java implémentant les design patterns MVC et DAO pour une maintenabilité optimale.",
      "Moteur de recherche instantanée multi-critères avec autocomplétion et filtrage par disponibilité.",
      "Système de notification et de rappels automatisés par email pour les retours d'emprunts.",
      "Tableau de bord administrateur avec indicateurs de rotation des collections et statistiques de fréquentation."
    ],
    techs: ["TypeScript", "Java", "JavaScript", "HTML/CSS", "Clean Code"]
  },
  "spotify-music": {
    title: "Moteur de Streaming & Lecteur Audio MP3",
    category: "JavaScript / Java / Audio",
    badge: "Multimedia Streaming",
    image: "assets/images/project-spotify.svg",
    githubUrl: "https://github.com/Ambinintsoa01/My_Spotify_S6",
    shortDesc: "Application de chargement, streaming continu et lecture de fichiers audio MP3 avec traitement de métadonnées ID3 et playlists dynamiques.",
    fullDesc: "Inspiré des plateformes de streaming modernes, ce projet implémente un pipeline de lecture audio en streaming via requêtes HTTP chunked, une indexation automatique de répertoires audio et une interface utilisateur immersive.",
    highlights: [
      "Serveur de streaming Java gérant le transfert par flux fractionnés (HTTP Byte-Ranges) pour un démarrage instantané de la lecture.",
      "Interface réactive JavaScript avec visualiseur d'onde audio et gestionnaire d'état de lecture.",
      "Extraction automatique des métadonnées ID3 (artiste, album, année, couverture d'album intégrée).",
      "Système de playlists personnalisées avec file d'attente dynamique et mode de lecture aléatoire.",
      "Optimisation du cache mémoire pour une navigation sans interruption audio."
    ],
    techs: ["JavaScript", "Java", "HTML5 Audio", "Streaming", "ID3 Engine"]
  },
  "glpi-newapp": {
    title: "ITSM & Service Desk - Gestion de Parc Informatique",
    category: "JavaScript / Java / ITU",
    badge: "Enterprise IT Support",
    image: "assets/images/project-itsm.svg",
    githubUrl: "https://github.com/Ambinintsoa01/GLPI_NewApp",
    shortDesc: "Système de helpdesk et gestion de parc informatique développé dans le cadre du cursus à l'ITU (Institut Supérieur de Technologie).",
    fullDesc: "Inspiré des standards ITIL, cette application fournit une solution complète pour la gestion des incidents informatiques, le suivi des actifs matériels et logiciels, et l'affectation intelligente des techniciens selon la sévérité des demandes.",
    highlights: [
      "Gestionnaire de cycle de vie des tickets : ouverture, priorisation, affectation, résolution et clôture avec historique d'audit.",
      "Inventaire et cartographie des équipements informatiques avec association aux collaborateurs.",
      "Tableau de bord des accords de niveau de service (SLA) avec indicateurs de temps de réponse et de résolution.",
      "Rôles et permissions granulaires : usagers, techniciens de support, administrateurs système.",
      "Validation académique ITU avec mention pour la rigueur architecturale."
    ],
    techs: ["JavaScript", "Java", "CSS", "ITSM / ITIL", "ITU 2026"]
  },
  "budget-crm": {
    title: "ERP Budgétaire & Système de Relation Client",
    category: "PHP / SQL / CRM",
    badge: "Enterprise Management",
    image: "assets/images/project-crm.svg",
    githubUrl: "https://github.com/Ambinintsoa01/SI---Budget-CRM",
    shortDesc: "Solution d'entreprise alliant la gestion des relations clients (CRM) et le suivi budgétaire analytique prévisionnel et réel.",
    fullDesc: "Permet aux organisations de piloter à la fois leur portefeuille commercial et leurs enveloppes budgétaires. Le système fait le lien direct entre les opportunités commerciales conclues et les entrées/sorties de trésorerie associées.",
    highlights: [
      "Suivi complet du tunnel de conversion client, de la prospection jusqu'au contrat final.",
      "Module de budgétisation par centre de coût avec comparaison instantanée budget prévisionnel vs réalisé.",
      "Génération automatique d'états financiers consolidés et exports PDF/Excel pour la direction.",
      "Gestion des droits d'accès multi-utilisateurs et traçabilité des opérations de validation.",
      "Backend PHP structuré avec requêtes SQL optimisées et indexation fine pour de gros volumes."
    ],
    techs: ["PHP", "SQL", "JavaScript", "CRM", "Budgeting"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStickyHeader();
  initMobileNav();
  initProjectFilters();
  initProjectModal();
  initStatsCounter();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   THEME SWITCHER (Dark & Light Mode with LocalStorage persistence)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  // Check saved preference or OS default
  const savedTheme = localStorage.getItem("portfolio_theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  let currentTheme = savedTheme || (prefersLight ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);

  const toggleTheme = () => {
    currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("portfolio_theme", currentTheme);

    // Provide friendly tactile feedback toast
    const label = currentTheme === "light" ? "Thème clair activé" : "Thème sombre activé";
    showToast(`🎨 ${label}`);
  };

  themeToggle?.addEventListener("click", toggleTheme);
  mobileThemeToggle?.addEventListener("click", toggleTheme);
}

/* Sticky Header on scroll */
function initStickyHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveNav();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* Active navigation highlight based on current scroll position */
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 140;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (link) {
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

/* Mobile navigation sidebar */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle-btn");
  const closeBtn = document.querySelector(".mobile-close-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const backdrop = document.querySelector(".mobile-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  if (!toggleBtn || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.add("open");
    backdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeNav = () => {
    mobileNav.classList.remove("open");
    backdrop?.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", openNav);
  closeBtn?.addEventListener("click", closeNav);
  backdrop?.addEventListener("click", closeNav);
  mobileLinks.forEach((link) => link.addEventListener("click", closeNav));

  // Handle swipe left to close on mobile
  let touchStartX = 0;
  mobileNav.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  mobileNav.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 60) {
      closeNav();
    }
  }, { passive: true });
}

/* Smooth anchor scrolling */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 75;
        const elemPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elemPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* Project Category Filter Tabs */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory.includes(category)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 30);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(12px) scale(0.97)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

/* Project Details Modal Popup */
function initProjectModal() {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalDialog = document.querySelector(".modal-dialog");
  const closeBtn = document.querySelector(".modal-close-btn");
  const detailButtons = document.querySelectorAll(".btn-details");

  if (!modalBackdrop) return;

  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    // Fill modal fields
    document.getElementById("modal-img").src = data.image;
    document.getElementById("modal-img").alt = data.title;
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-badge").textContent = data.badge;
    document.getElementById("modal-desc").textContent = data.fullDesc;
    
    // Fill highlights list
    const highlightsUl = document.getElementById("modal-highlights-list");
    highlightsUl.innerHTML = "";
    data.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      highlightsUl.appendChild(li);
    });

    // Fill techs
    const techsWrap = document.getElementById("modal-techs");
    techsWrap.innerHTML = "";
    data.techs.forEach((tech) => {
      const span = document.createElement("span");
      span.className = "tech-tag";
      span.textContent = tech;
      techsWrap.appendChild(span);
    });

    // Github link
    const ghBtn = document.getElementById("modal-github-link");
    ghBtn.href = data.githubUrl;

    // Open
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  };

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute("data-project");
      openModal(projectId);
    });
  });

  // Clicking a card also opens modal
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // Don't intercept direct link clicks
      const projectId = card.getAttribute("data-project-id");
      if (projectId) openModal(projectId);
    });
  });

  closeBtn?.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

/* Animated Stat Numbers Counter */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let started = false;

  const startCount = () => {
    statNumbers.forEach((elem) => {
      const target = parseInt(elem.getAttribute("data-target") || "0", 10);
      const suffix = elem.getAttribute("data-suffix") || "";
      const duration = 1600;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          elem.textContent = target + suffix;
          clearInterval(timer);
        } else {
          elem.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          startCount();
        }
      });
    },
    { threshold: 0.25 }
  );

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) observer.observe(statsSection);
}

/* Contact Form handling */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const service = document.getElementById("service")?.value || "Non spécifié";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !message) {
      showToast("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const submitBtn = form.querySelector(".form-submit-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Envoi en cours...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast("Message envoyé avec succès ! Ambinintsoa vous recontactera très rapidement.");
    }, 900);
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* Back to top button */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
