/* =============================================
   STAMP STORIES - Main JavaScript
   Includes: Header, Footer, Navigation, Interactions
   Updated 2026
   ============================================= */

// ============ SHARED COMPONENTS ============

const SITE_CONFIG = {
  name: 'Stamp Stories',
  tagline: 'Your Trusted Visa Partner',
  email: 'hello@stampstories.com',
  phone: '+91 98765 43210',
  address: 'Mumbai, Maharashtra, India'
};

/* Header HTML */
function getHeaderHTML(activePage = '') {
  return `
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="." class="logo">
        <div>
          <div class="logo-text">Stamp<span>Stories</span></div>
          <span class="logo-sub">Visa &amp; Travel Services</span>
        </div>
      </a>
      <nav class="main-nav" id="mainNav">
        <a href="./" class="${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="./about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
        <a href="./guide.html" class="${activePage === 'guide' ? 'active' : ''}">Guide</a>
        <a href="./blog.html" class="${activePage === 'blog' ? 'active' : ''}">Blog</a>
        <a href="./contact.html" class="contact-btn-nav">Contact</a>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <div class="nav-overlay" id="navOverlay"></div>
  `;
}

/* Footer HTML */
function getFooterHTML() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-text" style="color:#fff;">Stamp<span style="color:#AAD816;">Stories</span></div>
          <span class="logo-sub" style="color:rgba(255,255,255,0.6);margin-bottom:16px;">Visa &amp; Travel Services</span>
          <p>Your trusted partner for visa services worldwide. With 4.5+ years of experience, we have successfully processed 3800+ visa applications across 150+ countries with a 99.9% success rate.</p>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./guide.html">Visa Guide</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Visa Services</h4>
          <ul>
            <li><a href="./guide.html?country=IN">India Visa</a></li>
            <li><a href="./guide.html?country=TH">Thailand Visa</a></li>
            <li><a href="./guide.html?country=US">US Visa</a></li>
            <li><a href="./guide.html?country=GB">UK Visa</a></li>
            <li><a href="./guide.html?country=SG">Singapore Visa</a></li>
            <li><a href="./guide.html?country=AU">Australia Visa</a></li>
            <li><a href="./guide.html?country=CA">Canada Visa</a></li>
            <li><a href="./guide.html?country=DE">Germany Visa</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li><a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a></li>
            <li><a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phone}</a></li>
            <li><span style="color:rgba(255,255,255,0.7);font-size:0.9rem;">${SITE_CONFIG.address}</span></li>
          </ul>
          <div style="margin-top:20px;">
            <h4 style="margin-bottom:12px;">Support</h4>
            <ul>
              <li><a href="./faq.html">FAQ</a></li>
              <li><a href="./contact.html">Get Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Stamp Stories. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="./about.html">About</a>
          <a href="./contact.html">Contact</a>
          <a href="./faq.html">FAQ</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

/* Inject shared components */
function injectSharedComponents(activePage) {
  // Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = getHeaderHTML(activePage);
  }

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }
}

/* ============ NAVIGATION ============ */
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const overlay = document.getElementById('navOverlay');

  if (!hamburger || !mainNav || !overlay) return;

  function toggleMenu() {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Header scroll effect
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
}

/* ============ COUNTER ANIMATION ============ */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.animate-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * endValue);
          target.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = endValue.toLocaleString();
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ============ FAQ ACCORDION ============ */
function initFAQAccordion() {
  document.querySelectorAll('.faq-item .faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all other items in the same container
      const container = item.closest('.country-faq-list, .faq-page-list');
      if (container) {
        container.querySelectorAll('.faq-item.active').forEach(active => {
          active.classList.remove('active');
        });
      }

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ============ GUIDE PAGE ============ */
function initGuidePage() {
  const searchInput = document.getElementById('countrySearch');
  const regionButtons = document.querySelectorAll('.region-filter button');
  const countriesGrid = document.getElementById('countriesGrid');

  if (!countriesGrid) return;

  let currentRegion = 'all';
  let currentSearch = '';

  function renderCountries() {
    const filtered = countriesList.filter(country => {
      const matchRegion = currentRegion === 'all' || country.region === currentRegion;
      const matchSearch = country.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          country.code.toLowerCase().includes(currentSearch.toLowerCase());
      return matchRegion && matchSearch;
    });

    if (filtered.length === 0) {
      countriesGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><p style="font-size:1.1rem;color:var(--text-light);">No countries found matching your criteria.</p></div>';
      return;
    }

    countriesGrid.innerHTML = filtered.map(country => `
      <a href="./country-detail.html?code=${country.code}" class="country-guide-card" style="text-decoration:none;color:inherit;">
        <div class="card-flag">${country.code}</div>
        <h3>${country.name}</h3>
        <div class="region-tag">${country.region}</div>
        <div class="visa-types-tag">View Visa Details</div>
      </a>
    `).join('');
  }

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderCountries();
    });
  }

  // Region filter
  regionButtons.forEach(button => {
    button.addEventListener('click', () => {
      regionButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      currentRegion = button.getAttribute('data-region');
      renderCountries();
    });
  });

  // Initial render
  renderCountries();
}

/* ============ COUNTRY DETAIL PAGE ============ */
function initCountryDetail() {
  const params = new URLSearchParams(window.location.search);
  const countryCode = params.get('code');

  if (!countryCode) {
    document.getElementById('countryContent').innerHTML = '<div class="container" style="text-align:center;padding:100px 20px;"><h2>Country not specified</h2><p style="margin-top:16px;">Please select a country from the <a href="./guide.html">Guide page</a>.</p></div>';
    return;
  }

  const data = getCountryData(countryCode.toUpperCase());
  if (!data) {
    document.getElementById('countryContent').innerHTML = '<div class="container" style="text-align:center;padding:100px 20px;"><h2>Country information not available</h2><p style="margin-top:16px;">We are updating our database. Please check back soon.</p></div>';
    return;
  }

  // Set page title
  document.title = `${data.name} Visa Guide 2026 - Stamp Stories`;

  // Build hero
  const heroHTML = `
    <section class="country-hero">
      <div class="container">
        <div class="country-hero-content">
          <div class="hero-flag-badge">${data.code}</div>
          <h1>${data.name} Visa Guide</h1>
          <p>${data.heroDescription}</p>
          <div class="country-quick-stats">
            <div class="country-quick-stat">
              <span class="qs-value">${data.quickStats.visaTypes}</span>
              <span class="qs-label">Visa Types</span>
            </div>
            <div class="country-quick-stat">
              <span class="qs-value">${data.quickStats.processingTime}</span>
              <span class="qs-label">Processing Time</span>
            </div>
            <div class="country-quick-stat">
              <span class="qs-value">${data.quickStats.fees}</span>
              <span class="qs-label">Starting Fee</span>
            </div>
            <div class="country-quick-stat">
              <span class="qs-value">${data.quickStats.popularity}</span>
              <span class="qs-label">Destination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Build visa types
  const visaTypesHTML = data.visaTypes.map(v => `
    <div class="visa-type-card">
      <h3>${v.name}</h3>
      <p>${v.description}</p>
      <div class="visa-meta">
        <div class="visa-meta-item">
          <strong>Fee</strong>
          <span>${v.fee}</span>
        </div>
        <div class="visa-meta-item">
          <strong>Processing</strong>
          <span>${v.processing}</span>
        </div>
        <div class="visa-meta-item">
          <strong>Validity</strong>
          <span>${v.validity}</span>
        </div>
        <div class="visa-meta-item">
          <strong>Stay Period</strong>
          <span>${v.stayPeriod}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Build requirements
  const requirementsHTML = data.requirements.map(r => `<li>${r}</li>`).join('');

  // Build process
  const processHTML = data.process.map((step, i) => `
    <div class="timeline-item">
      <div class="tl-number">${i + 1}</div>
      <div class="tl-content">
        <h4>${step.title}</h4>
        <p>${step.description}</p>
      </div>
    </div>
  `).join('');

  // Build fees table
  const feesHTML = data.fees.map(f => `
    <tr>
      <td>${f.type}</td>
      <td>${f.fee}</td>
      <td>${f.processingTime}</td>
      <td>${f.validity}</td>
    </tr>
  `).join('');

  // Build infographics
  const infographicsHTML = data.infographics.map(ig => `
    <div class="infographic-card">
      <div class="infographic-value">${ig.value}</div>
      <div class="infographic-label">${ig.label}</div>
      <div class="infographic-desc">${ig.desc}</div>
    </div>
  `).join('');

  // Build FAQs
  const faqsHTML = data.faqs.map((faq, i) => `
    <div class="faq-item">
      <button class="faq-question">
        ${faq.q}
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  const embassyURL = data.embassyLink || '#';

  // Full HTML
  const fullHTML = `
    ${heroHTML}

    <section class="country-content-section" id="visaTypes">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Visa Categories</span>
          <h2>${data.name} Visa Types</h2>
          <p>Comprehensive visa options available for travel to ${data.name}. Choose the category that matches your purpose of visit.</p>
        </div>
        <div class="visa-type-grid">
          ${visaTypesHTML}
        </div>
        <div style="text-align:center;margin-top:36px;">
          <a href="./contact.html" class="btn btn-primary">Get Expert Assistance</a>
        </div>
      </div>
    </section>

    <section class="country-content-section" id="requirements">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Requirements</span>
          <h2>Document Requirements</h2>
          <p>Ensure you have all necessary documents ready for a smooth visa application process for ${data.name}.</p>
        </div>
        <ul class="requirements-list">
          ${requirementsHTML}
        </ul>
        <div style="text-align:center;margin-top:36px;">
          <a href="./contact.html" class="btn btn-outline">Need Help with Documents?</a>
        </div>
      </div>
    </section>

    <section class="country-content-section" id="process">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Process</span>
          <h2>Visa Application Process</h2>
          <p>Follow these step-by-step instructions to successfully apply for a ${data.name} visa.</p>
        </div>
        <div class="process-timeline">
          ${processHTML}
        </div>
      </div>
    </section>

    <section class="country-content-section" id="fees">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Fees</span>
          <h2>Visa Fees &amp; Charges</h2>
          <p>All prices are listed in Indian Rupees (INR). Fees are subject to change based on embassy guidelines.</p>
        </div>
        <div class="fees-table-wrapper">
          <table class="fees-table">
            <thead>
              <tr>
                <th>Visa Type</th>
                <th>Fee (INR)</th>
                <th>Processing Time</th>
                <th>Validity</th>
              </tr>
            </thead>
            <tbody>
              ${feesHTML}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="country-content-section" id="infographics">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Insights</span>
          <h2>${data.name} at a Glance</h2>
          <p>Key information and statistics to help you understand ${data.name} better before your visit.</p>
        </div>
        <div class="infographics-grid">
          ${infographicsHTML}
        </div>
      </div>
    </section>

    <section class="country-content-section" id="embassy">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">Official</span>
          <h2>Embassy &amp; Official Resources</h2>
          <p>Access the official embassy website for the most up-to-date visa information and application portal.</p>
        </div>
        <div class="embassy-link-box">
          <h3>${data.embassyName || 'Official Embassy Website'}</h3>
          <p>Visit the official website for authoritative visa information, application forms, and latest updates for ${data.name}.</p>
          <a href="${embassyURL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Official Website</a>
        </div>
      </div>
    </section>

    <section class="country-content-section" id="faq">
      <div class="container">
        <div class="content-header">
          <span class="section-tag">FAQ</span>
          <h2>${data.name} Visa FAQ</h2>
          <p>Frequently asked questions about ${data.name} visa requirements, application process, and travel information.</p>
        </div>
        <div class="country-faq-list">
          ${faqsHTML}
        </div>
      </div>
    </section>

    <!-- Trust / Highlights -->
    <section class="country-content-section" id="trust">
      <div class="container" style="text-align:center;">
        <div class="content-header">
          <span class="section-tag">Why Trust Us</span>
          <h2>Stamp Stories by the Numbers</h2>
          <p>With 4.5+ years of experience and a 99.9% success rate, we are India's trusted visa service provider.</p>
        </div>
        <div class="business-highlights" style="max-width:800px;margin:0 auto;">
          <div class="highlight-item">
            <span class="highlight-number">4.5+</span>
            <span class="highlight-label">Years Experience</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-number">3800+</span>
            <span class="highlight-label">Visas Processed</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-number">150+</span>
            <span class="highlight-label">Countries Covered</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-number">99.9%</span>
            <span class="highlight-label">Success Rate</span>
          </div>
        </div>
      </div>
    </section>

    <section class="country-content-section" id="related">
      <div class="container" style="text-align:center;">
        <div class="content-header">
          <span class="section-tag">Explore More</span>
          <h2>Explore Other Destinations</h2>
          <p>Discover visa information for other popular destinations around the world.</p>
        </div>
        <div style="margin-top:24px;">
          <a href="./guide.html" class="btn btn-primary">Browse All Countries</a>
          <a href="./contact.html" class="btn btn-secondary" style="margin-left:12px;">Get Visa Assistance</a>
        </div>
      </div>
    </section>
  `;

  document.getElementById('countryContent').innerHTML = fullHTML;

  // Re-init FAQ accordion for country FAQs
  initFAQAccordion();
}

/* ============ CONTACT FORM ============ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:3rem;font-weight:800;color:var(--secondary);margin-bottom:16px;">Thank You</div>
          <h3 style="margin-bottom:12px;">Your message has been sent!</h3>
          <p style="color:var(--text-light);">Our team will get back to you within 24 hours. We look forward to assisting you with your visa needs.</p>
          <a href="./" class="btn btn-primary" style="margin-top:24px;">Return to Home</a>
        </div>
      `;
    }, 1500);
  });
}

/* ============ PAGE SPECIFIC INIT ============ */
function initHomePage() {
  initCounterAnimation();
}

/* ============ ON LOAD ============ */
document.addEventListener('DOMContentLoaded', () => {
  // Determine active page
  const path = window.location.pathname;
  let activePage = 'home';
  if (path.includes('about.html')) activePage = 'about';
  else if (path.includes('guide.html')) activePage = 'guide';
  else if (path.includes('country-detail.html')) activePage = 'guide';
  else if (path.includes('blog.html')) activePage = 'blog';
  else if (path.includes('contact.html')) activePage = 'contact';
  else if (path.includes('faq.html')) activePage = 'faq';

  // Inject header/footer
  injectSharedComponents(activePage);

  // Small delay for DOM to update
  setTimeout(() => {
    initNavigation();
    initFAQAccordion();

    // Page-specific init
    if (path.includes('guide.html')) {
      setTimeout(initGuidePage, 100);
    }
    if (path.includes('country-detail.html')) {
      setTimeout(initCountryDetail, 100);
    }
    const isHome = path === '/' || path.endsWith('/index.html') || path.replace(/\/+$/, '').split('/').pop() === '';
    if (isHome || (!path.includes('.html'))) {
      setTimeout(initHomePage, 100);
    }
    initContactForm();
  }, 50);
});
