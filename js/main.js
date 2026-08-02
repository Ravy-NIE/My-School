// ==========================================
// វិទ្យាល័យ ឧដុង្គ - MAIN INTERACTIVE JAVASCRIPT
// Dynamic Rendering, Interactive Filters, Modals, Dark Mode, Admin Controls
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSchoolStats();
    initHeroSlideshow();
    renderStaff('all', 'all');
    renderActivities('all');
    renderKnowledge('all');
    renderStandards();
    setupEventListeners();
});

// ==========================================
// 1. DARK MODE HANDLER & THEME PERSISTENCE
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('oudong_theme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('oudong_theme', 'dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('oudong_theme', 'light');
        updateThemeIcons(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
}

function updateThemeIcons(isDark) {
    const btns = document.querySelectorAll('.theme-toggle-btn');
    btns.forEach(btn => {
        btn.innerHTML = isDark 
            ? `<i class="fa-solid fa-sun text-warning" title="ប្តូរទៅ Light Mode"></i>` 
            : `<i class="fa-solid fa-moon text-primary" title="ប្តូរទៅ Dark Mode"></i>`;
    });
}

// ==========================================
// 2. SCHOOL STATS COUNTER
// ==========================================
function initSchoolStats() {
    const stats = SCHOOL_DATA.info.stats;
    const studentsEl = document.getElementById('stat-students');
    const teachersEl = document.getElementById('stat-teachers');
    const classroomsEl = document.getElementById('stat-classrooms');
    const passRateEl = document.getElementById('stat-passrate');

    if (studentsEl) studentsEl.innerText = stats.students;
    if (teachersEl) teachersEl.innerText = stats.teachers;
    if (classroomsEl) classroomsEl.innerText = stats.classrooms;
    if (passRateEl) passRateEl.innerText = stats.passRate;
}

// ==========================================
// 2.1 HERO BACKGROUND SLIDESHOW ENGINE
// ==========================================
function initHeroSlideshow() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    let slides = SCHOOL_DATA.heroSlides;
    if (!slides || !Array.isArray(slides) || slides.length === 0) {
        slides = ['assets/images/banner/hero_bg.png'];
    }

    const validSlides = [];
    let processed = 0;

    slides.forEach((path) => {
        const img = new Image();
        img.onload = () => {
            validSlides.push(path);
            processed++;
            if (processed === slides.length) {
                renderHeroSlideshow(heroSection, validSlides);
            }
        };
        img.onerror = () => {
            processed++;
            if (processed === slides.length) {
                if (validSlides.length === 0) {
                    validSlides.push('assets/images/banner/hero_bg.png');
                }
                renderHeroSlideshow(heroSection, validSlides);
            }
        };
        img.src = path;
    });
}

function renderHeroSlideshow(heroSection, slides) {
    let bgContainer = heroSection.querySelector('.hero-bg-container');
    if (!bgContainer) {
        bgContainer = document.createElement('div');
        bgContainer.className = 'hero-bg-container';
        heroSection.insertBefore(bgContainer, heroSection.firstChild);
    }
    bgContainer.innerHTML = '';

    slides.forEach((src, idx) => {
        const slideEl = document.createElement('div');
        slideEl.className = `hero-bg-slide ${idx === 0 ? 'active' : ''}`;
        slideEl.style.backgroundImage = `url('${src}')`;
        bgContainer.appendChild(slideEl);
    });

    if (slides.length > 1) {
        let indicatorsWrap = heroSection.querySelector('.hero-slide-indicators');
        if (!indicatorsWrap) {
            indicatorsWrap = document.createElement('div');
            indicatorsWrap.className = 'hero-slide-indicators';
            heroSection.appendChild(indicatorsWrap);
        }
        indicatorsWrap.innerHTML = '';

        let currentIndex = 0;

        function goToSlide(idx) {
            currentIndex = idx;
            const slideEls = bgContainer.querySelectorAll('.hero-bg-slide');
            const dotEls = indicatorsWrap.querySelectorAll('.hero-indicator-dot');

            slideEls.forEach((el, i) => {
                el.classList.toggle('active', i === currentIndex);
            });
            dotEls.forEach((el, i) => {
                el.classList.toggle('active', i === currentIndex);
            });
        }

        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `hero-indicator-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                goToSlide(idx);
                resetTimer();
            });
            indicatorsWrap.appendChild(dot);
        });

        let timer = setInterval(() => {
            const nextIdx = (currentIndex + 1) % slides.length;
            goToSlide(nextIdx);
        }, 5000);

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(() => {
                const nextIdx = (currentIndex + 1) % slides.length;
                goToSlide(nextIdx);
            }, 5000);
        }
    }
}

// Subject translations mapping
const SUBJECT_LABELS = {
    'all': 'មុខវិជ្ជាទាំងអស់',
    'math': 'គណិតវិទ្យា',
    'physics': 'រូបវិទ្យា',
    'chemistry': 'គីមីវិទ្យា',
    'biology': 'ជីវវិទ្យា',
    'ict': 'ព័ត៌មានវិទ្យា (ICT)',
    'earth_science': 'ផែនដី និង បរិស្ថានវិទ្យា',
    'khmer': 'អក្សរសាស្ត្រខ្មែរ',
    'history': 'ប្រវត្តិវិទ្យា',
    'geography': 'ភូមិវិទ្យា',
    'english': 'ភាសាអង់គ្លេស',
    'foreign_lang': 'ភាសាបរទេស',
    'civics': 'សីលធម៌-ពលរដ្ឋ',
    'pe': 'អប់រំកាយ និង កីឡា',
    'economics': 'សេដ្ឋកិច្ច',
    'librarian': 'បណ្ណារក្ស',
    'management': 'គ្រប់គ្រង',
    'admin': 'រដ្ឋបាល',
    'finance': 'គណនេយ្យ និង ហិរញ្ញវត្ថុ',
    'general': 'គ្រូបង្រៀនទូទៅ'
};

// Mapping of subject to its primary category
const SUBJECT_PRIMARY_CATEGORY = {
    'math': 'stem',
    'physics': 'stem',
    'chemistry': 'stem',
    'biology': 'stem',
    'ict': 'stem',
    'earth_science': 'stem',
    'khmer': 'social',
    'history': 'social',
    'geography': 'social',
    'english': 'social',
    'foreign_lang': 'social',
    'civics': 'social',
    'pe': 'social',
    'management': 'management',
    'admin': 'admin',
    'finance': 'admin',
    'economics': 'admin',
    'librarian': 'admin'
};

// Update active Category Tab UI button
function syncCategoryTabUI(category) {
    const staffFilterBtns = document.querySelectorAll('#staff-filters .filter-btn');
    staffFilterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Dynamically filter subject select dropdown options based on selected category
function updateSubjectDropdownOptions(category) {
    const subjectSelect = document.getElementById('staff-subject-select');
    if (!subjectSelect) return;

    const options = subjectSelect.querySelectorAll('option');
    options.forEach(opt => {
        const val = opt.value;
        if (val === 'all') {
            opt.hidden = false;
            opt.disabled = false;
            opt.style.display = '';
        } else {
            const primaryCat = SUBJECT_PRIMARY_CATEGORY[val] || 'social';
            if (category === 'all' || primaryCat === category || (category === 'admin' && (primaryCat === 'admin' || primaryCat === 'management'))) {
                opt.hidden = false;
                opt.disabled = false;
                opt.style.display = '';
            } else {
                opt.hidden = true;
                opt.disabled = true;
                opt.style.display = 'none';
            }
        }
    });

    // If currently selected subject is now hidden/disabled, reset subject dropdown to 'all'
    const selectedOpt = subjectSelect.querySelector(`option[value="${subjectSelect.value}"]`);
    if (selectedOpt && (selectedOpt.hidden || selectedOpt.disabled)) {
        subjectSelect.value = 'all';
        currentStaffSubject = 'all';
    }
}

// Reset staff filters back to all
function resetStaffFilters() {
    syncCategoryTabUI('all');
    updateSubjectDropdownOptions('all');
    const subjectSelect = document.getElementById('staff-subject-select');
    if (subjectSelect) subjectSelect.value = 'all';
    renderStaff('all', 'all');
}

// ==========================================
// 3. RENDER STAFF WITH CATEGORY & SUBJECT FILTERS
// ==========================================
let currentStaffCategory = 'all';
let currentStaffSubject = 'all';

function renderStaff(filterCategory = 'all', filterSubject = 'all') {
    currentStaffCategory = filterCategory;
    currentStaffSubject = filterSubject;

    const container = document.getElementById('staff-grid');
    if (!container) return;

    container.innerHTML = '';
    
    let staffList = SCHOOL_DATA.staff;

    // Filter by Category if not 'all'
    if (filterCategory !== 'all') {
        staffList = staffList.filter(s => s.category === filterCategory);
    }

    // Filter by Subject if not 'all'
    if (filterSubject !== 'all') {
        staffList = staffList.filter(s => s.subject === filterSubject);
    }

    // Fallback: If staffList is empty because filterSubject belongs to another category, switch category dynamically
    if (staffList.length === 0 && filterSubject !== 'all') {
        const primaryCat = SUBJECT_PRIMARY_CATEGORY[filterSubject];
        if (primaryCat) {
            currentStaffCategory = primaryCat;
            syncCategoryTabUI(primaryCat);
            updateSubjectDropdownOptions(primaryCat);
            staffList = SCHOOL_DATA.staff.filter(s => s.subject === filterSubject);
        }
    }

    if (staffList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <i class="fa-solid fa-user-slash fs-1 text-warning mb-3 d-block"></i>
                <p class="mb-3">មិនមានទិន្នន័យលោកគ្រូអ្នកគ្រូ ក្នុងមុខវិជ្ជា ឬផ្នែកនេះទេ។</p>
                <button class="btn btn-sm btn-outline-success rounded-pill px-4" onclick="resetStaffFilters()">
                    <i class="fa-solid fa-rotate-left me-1"></i> បង្ហាញទាំងអស់ឡើងវិញ
                </button>
            </div>`;
        return;
    }

    staffList.forEach(member => {
        const categoryLabel = {
            'management': 'គណៈគ្រប់គ្រង',
            'stem': 'វិទ្យាសាស្ត្រពិត (STEM)',
            'social': 'វិទ្យាសាស្ត្រសង្គម',
            'admin': 'រដ្ឋបាល & បណ្ណាល័យ'
        }[member.category] || 'បុគ្គលិក';

        const subjectLabel = SUBJECT_LABELS[member.subject] || member.subject;

        const cardHtml = `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="staff-card">
                    <div class="staff-img-wrap">
                        <img src="${member.image}" alt="${member.name}" onerror="this.onerror=null; this.src='assets/images/staff/principal.png'">
                        <span class="staff-role-badge">${categoryLabel}</span>
                        ${member.subject !== 'management' ? `<span class="staff-subject-badge">${subjectLabel}</span>` : ''}
                    </div>
                    <div class="staff-body">
                        <div class="staff-name">${member.name}</div>
                        <div class="staff-position">${member.position}</div>
                        <ul class="staff-info-list">
                            <li><i class="fa-solid fa-graduation-cap text-warning"></i> ${member.degree}</li>
                            <li><i class="fa-solid fa-briefcase text-success"></i> ${member.experience}</li>
                            <li><i class="fa-solid fa-phone text-primary"></i> ${member.phone}</li>
                        </ul>
                        <button class="btn btn-sm btn-outline-success w-100 rounded-pill" onclick="openStaffModal(${member.id})">
                            <i class="fa-solid fa-circle-info me-1"></i> មើលព័ត៌មានបន្ថែម
                        </button>
                        ${isAdminMode ? `
                            <div class="admin-card-actions">
                                <button class="btn btn-sm btn-admin-edit flex-fill" onclick="editStaff(${member.id})">
                                    <i class="fa-solid fa-pen-to-square me-1"></i> កែសម្រួល
                                </button>
                                <button class="btn btn-sm btn-admin-delete flex-fill" onclick="deleteStaff(${member.id})">
                                    <i class="fa-solid fa-trash me-1"></i> លុប
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==========================================
// 4. RENDER ACTIVITIES & NEWS
// ==========================================
function renderActivities(filterCategory = 'all') {
    const container = document.getElementById('activities-grid');
    if (!container) return;

    container.innerHTML = '';
    const activitiesList = filterCategory === 'all'
        ? SCHOOL_DATA.activities
        : SCHOOL_DATA.activities.filter(a => a.category === filterCategory);

    const categoryNames = {
        'stem': 'STEM & វិទ្យាសាស្ត្រ',
        'sports': 'កីឡា',
        'community': 'យុវជន & បរិស្ថាន',
        'exam': 'ការប្រឡង',
        'news':'ព័ត៌មានផ្សេងៗ'
    };

    activitiesList.forEach(item => {
        const cardHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="news-card">
                    <div class="news-img-wrap">
                        <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='assets/images/banner/hero_bg.png'">
                        <span class="news-category-badge">${categoryNames[item.category] || 'សកម្មភាព'}</span>
                    </div>
                    <div class="news-body">
                        <div class="news-date">
                            <i class="fa-regular fa-calendar me-1 text-warning"></i> ${item.date} 
                            <span class="ms-2"><i class="fa-regular fa-user me-1 text-success"></i> ${item.author}</span>
                        </div>
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-summary">${item.summary}</p>
                        <button class="btn btn-sm btn-gold rounded-pill mt-auto" onclick="openNewsModal(${item.id})">
                            អានអត្ថបទពេញ <i class="fa-solid fa-arrow-right ms-1"></i>
                        </button>
                        ${isAdminMode ? `
                            <div class="admin-card-actions">
                                <button class="btn btn-sm btn-admin-edit flex-fill" onclick="editActivity(${item.id})">
                                    <i class="fa-solid fa-pen-to-square me-1"></i> កែសម្រួល
                                </button>
                                <button class="btn btn-sm btn-admin-delete flex-fill" onclick="deleteActivity(${item.id})">
                                    <i class="fa-solid fa-trash me-1"></i> លុប
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==========================================
// 5. RENDER KNOWLEDGE ARTICLES
// ==========================================
function renderKnowledge(filterCategory = 'all') {
    const container = document.getElementById('knowledge-grid');
    if (!container) return;

    container.innerHTML = '';
    const items = filterCategory === 'all'
        ? SCHOOL_DATA.knowledge
        : SCHOOL_DATA.knowledge.filter(k => k.category === filterCategory);

    items.forEach(article => {
        const cardHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="knowledge-card">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2">
                            <i class="fa-solid fa-book-open me-1"></i> ចំណេះដឹង
                        </span>
                        <small class="text-muted"><i class="fa-regular fa-clock me-1"></i> ${article.readTime}</small>
                    </div>
                    <h4 class="khmer-title fs-5 mb-2">${article.title}</h4>
                    <p class="text-muted small mb-3">${article.summary}</p>
                    <div class="d-flex align-items-center justify-content-between pt-3 border-top">
                        <small class="text-muted"><i class="fa-solid fa-user-pen me-1"></i> ${article.author}</small>
                        <a href="${article.downloadFile}" class="btn btn-sm btn-outline-primary rounded-pill" download>
                            <i class="fa-solid fa-download me-1"></i> ទាញយក PDF
                        </a>
                    </div>
                    ${isAdminMode ? `
                        <div class="admin-card-actions">
                            <button class="btn btn-sm btn-admin-edit flex-fill" onclick="editKnowledge(${article.id})">
                                <i class="fa-solid fa-pen-to-square me-1"></i> កែសម្រួល
                            </button>
                            <button class="btn btn-sm btn-admin-delete flex-fill" onclick="deleteKnowledge(${article.id})">
                                <i class="fa-solid fa-trash me-1"></i> លុប
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==========================================
// 6. RENDER SCHOOL STANDARDS
// ==========================================
function renderStandards() {
    const container = document.getElementById('standards-grid');
    if (!container) return;

    container.innerHTML = '';
    SCHOOL_DATA.standards.forEach(std => {
        const highlightsList = std.highlights.map(h => `<li><i class="fa-solid fa-circle-check text-success me-2"></i> ${h}</li>`).join('');
        
        const cardHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="standard-card h-100 d-flex flex-column">
                    <div class="standard-icon">
                        <i class="fa-solid ${std.icon}"></i>
                    </div>
                    <span class="badge bg-warning-subtle text-warning border border-warning-subtle rounded-pill align-self-start mb-2 px-3 py-1">
                        ${std.id}
                    </span>
                    <h3 class="khmer-title fs-5 mb-2">${std.title}</h3>
                    <p class="text-muted small mb-3">${std.description}</p>
                    
                    <ul class="list-unstyled small mb-4 flex-grow-1">
                        ${highlightsList}
                    </ul>
                    
                    <a href="${std.file}" class="doc-box text-decoration-none" download>
                        <div class="d-flex align-items-center gap-2">
                            <i class="fa-solid fa-file-pdf text-danger fs-3"></i>
                            <div>
                                <div class="fw-bold text-dark small">ឯកសារស្តង់ដាជា PDF</div>
                                <div class="text-muted opacity-75" style="font-size: 0.75rem;">ចុចដើម្បីទាញយក</div>
                            </div>
                        </div>
                        <i class="fa-solid fa-download text-primary"></i>
                    </a>
                    ${isAdminMode ? `
                        <div class="admin-card-actions mt-3">
                            <button class="btn btn-sm btn-admin-edit flex-fill" onclick="editStandard('${std.id}')">
                                <i class="fa-solid fa-pen-to-square me-1"></i> កែសម្រួល
                            </button>
                            <button class="btn btn-sm btn-admin-delete flex-fill" onclick="deleteStandard('${std.id}')">
                                <i class="fa-solid fa-trash me-1"></i> លុប
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==========================================
// 7. MODAL POPUP HANDLERS
// ==========================================
function openStaffModal(id) {
    const staff = SCHOOL_DATA.staff.find(s => s.id === id);
    if (!staff) return;

    document.getElementById('modalStaffImg').src = staff.image;
    document.getElementById('modalStaffName').innerText = staff.name;
    document.getElementById('modalStaffPosition').innerText = staff.position;
    document.getElementById('modalStaffDegree').innerText = staff.degree;
    document.getElementById('modalStaffExperience').innerText = staff.experience;
    document.getElementById('modalStaffPhone').innerText = staff.phone;
    document.getElementById('modalStaffEmail').innerText = staff.email;
    document.getElementById('modalStaffBio').innerText = staff.bio;

    const bsModal = new bootstrap.Modal(document.getElementById('staffDetailModal'));
    bsModal.show();
}

function openNewsModal(id) {
    const item = SCHOOL_DATA.activities.find(a => a.id === id);
    if (!item) return;

    document.getElementById('modalNewsImg').src = item.image;
    document.getElementById('modalNewsTitle').innerText = item.title;
    document.getElementById('modalNewsDate').innerText = item.date + ' | ដោយ៖ ' + item.author;
    document.getElementById('modalNewsContent').innerText = item.content;

    const bsModal = new bootstrap.Modal(document.getElementById('newsDetailModal'));
    bsModal.show();
}

// ==========================================
// 8. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
    // Staff Category Filter Buttons
    const staffFilterBtns = document.querySelectorAll('#staff-filters .filter-btn');
    staffFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            staffFilterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-filter');
            
            updateSubjectDropdownOptions(category);
            renderStaff(category, currentStaffSubject);
        });
    });

    // Staff Subject Select Dropdown
    const subjectSelect = document.getElementById('staff-subject-select');
    if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => {
            const selectedSubject = e.target.value;
            if (selectedSubject !== 'all') {
                const targetCat = SUBJECT_PRIMARY_CATEGORY[selectedSubject];
                if (targetCat) {
                    syncCategoryTabUI(targetCat);
                    currentStaffCategory = targetCat;
                }
            }
            renderStaff(currentStaffCategory, selectedSubject);
        });
    }

    // Activities Filter Buttons
    const activityFilterBtns = document.querySelectorAll('#activity-filters .filter-btn');
    activityFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            activityFilterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderActivities(e.target.getAttribute('data-filter'));
        });
    });

    // Dark Mode Toggle Buttons
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Smooth Scroll for Navigation Anchors & Mobile Menu Auto-close
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Auto collapse mobile navbar if expanded
                const mainNav = document.getElementById('mainNav');
                if (mainNav && mainNav.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(mainNav);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        mainNav.classList.remove('show');
                    }
                }
            }
        });
    });

    // Scroll to Top Button Handler
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll Spy for Active Navigation Highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.scrollY + 120;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Initialize Admin Controls & Form Listeners
    initAdminControls();
}

// ==========================================
// 9. ADMIN CONTROL & MODAL FORM HANDLERS
// ==========================================
let isAdminMode = false;
let editingActivityId = null;
let editingKnowledgeId = null;
let editingStandardId = null;
let editingStaffId = null;

// Helper for live image preview update
function updateImagePreview(inputId, previewImgId, value) {
    const inputEl = document.getElementById(inputId);
    const imgEl = document.getElementById(previewImgId);
    if (inputEl && value !== undefined) inputEl.value = value;
    if (imgEl && value) imgEl.src = value;
}

function showAdminToast(message, type = 'success') {
    const toastEl = document.getElementById('adminToast');
    const msgEl = document.getElementById('adminToastMsg');
    if (!toastEl || !msgEl) return;

    msgEl.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-info-circle'} fs-5 me-1"></i> ${message}`;
    toastEl.className = `toast align-items-center text-white border-0 shadow-lg ${type === 'success' ? 'bg-success' : 'bg-warning'}`;
    
    const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
    toast.show();
}

function getAdminPassword() {
    return localStorage.getItem('oudong_admin_password') || 'admin123';
}

function updateAdminUI(enabled) {
    isAdminMode = enabled;
    const adminBtn = document.getElementById('adminToggleBtn');
    if (adminBtn) {
        adminBtn.classList.toggle('admin-active', isAdminMode);
        adminBtn.innerHTML = isAdminMode 
            ? `<i class="fa-solid fa-lock-open me-1"></i> Admin (ON)` 
            : `<i class="fa-solid fa-user-shield me-1"></i> Admin`;
    }

    const dbBtn = document.getElementById('dbManagerBtn');
    if (dbBtn) dbBtn.classList.toggle('d-none', !isAdminMode);

    const adminBars = document.querySelectorAll('.admin-control-bar');
    adminBars.forEach(bar => {
        if (isAdminMode) {
            bar.classList.remove('d-none');
        } else {
            bar.classList.add('d-none');
        }
    });

    renderStaff(currentStaffCategory, currentStaffSubject);
    renderActivities(document.querySelector('#activity-filters .filter-btn.active')?.getAttribute('data-filter') || 'all');
    renderKnowledge('all');
    renderStandards();
}

function initAdminControls() {
    const adminBtn = document.getElementById('adminToggleBtn');
    if (!adminBtn) return;

    setupBrowseFilePickers();

    adminBtn.addEventListener('click', () => {
        if (isAdminMode) {
            updateAdminUI(false);
            showAdminToast('បានចេញពីគណនី Admin', 'info');
        } else {
            const passInput = document.getElementById('adminPassInput');
            const loginErr = document.getElementById('adminLoginError');
            if (passInput) passInput.value = '';
            if (loginErr) loginErr.classList.add('d-none');

            const loginModalEl = document.getElementById('adminLoginModal');
            if (loginModalEl) {
                const modal = bootstrap.Modal.getOrCreateInstance(loginModalEl);
                modal.show();
            }
        }
    });

    // Admin Login Form Submit Handler
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const enteredPass = document.getElementById('adminPassInput').value.trim();
            const loginErr = document.getElementById('adminLoginError');

            if (enteredPass === getAdminPassword()) {
                if (loginErr) loginErr.classList.add('d-none');
                const loginModalEl = document.getElementById('adminLoginModal');
                const modal = bootstrap.Modal.getInstance(loginModalEl);
                if (modal) modal.hide();

                updateAdminUI(true);
                showAdminToast('បានផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់ និងចូលគណនី Admin ដោយជោគជ័យ!', 'success');
            } else {
                if (loginErr) loginErr.classList.remove('d-none');
            }
        });
    }

    // Toggle Password Visibility Eye Button
    const togglePassBtn = document.getElementById('togglePassVisibilityBtn');
    if (togglePassBtn) {
        togglePassBtn.addEventListener('click', () => {
            const passInput = document.getElementById('adminPassInput');
            const eyeIcon = document.getElementById('passEyeIcon');
            if (passInput && eyeIcon) {
                const isPass = passInput.type === 'password';
                passInput.type = isPass ? 'text' : 'password';
                eyeIcon.className = isPass ? 'fa-solid fa-eye-slash text-warning' : 'fa-solid fa-eye text-muted';
            }
        });
    }

    // Change Password Form Submit Handler
    const changePassForm = document.getElementById('changePasswordForm');
    if (changePassForm) {
        changePassForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const oldPass = document.getElementById('oldPassInput').value.trim();
            const newPass = document.getElementById('newPassInput').value.trim();
            const confirmPass = document.getElementById('confirmNewPassInput').value.trim();
            const errEl = document.getElementById('changePassError');

            if (oldPass !== getAdminPassword()) {
                if (errEl) {
                    errEl.innerText = 'ពាក្យសម្ងាត់ចាស់មិនត្រឹមត្រូវទេ!';
                    errEl.classList.remove('d-none');
                }
                return;
            }

            if (newPass.length < 4) {
                if (errEl) {
                    errEl.innerText = 'ពាក្យសម្ងាត់ថ្មីត្រូវមានយ៉ាងតិច ៤ តួអក្សរ!';
                    errEl.classList.remove('d-none');
                }
                return;
            }

            if (newPass !== confirmPass) {
                if (errEl) {
                    errEl.innerText = 'ការបញ្ជាក់ពាក្យសម្ងាត់ថ្មីមិនត្រូវគ្នាទេ!';
                    errEl.classList.remove('d-none');
                }
                return;
            }

            if (errEl) errEl.classList.add('d-none');
            localStorage.setItem('oudong_admin_password', newPass);

            const modalEl = document.getElementById('changePasswordModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();

            changePassForm.reset();
            showAdminToast('បានផ្លាស់ប្តូរពាក្យសម្ងាត់ Admin ថ្មីដោយជោគជ័យ!', 'success');
        });
    }

    const dbModalEl = document.getElementById('dbManagerModal');
    if (dbModalEl) {
        dbModalEl.addEventListener('show.bs.modal', updateDBModalStats);
    }

    // Form 1: Activity Submit Handler (Add / Edit)
    const addActForm = document.getElementById('addActivityForm');
    if (addActForm) {
        addActForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const actData = {
                title: document.getElementById('actTitle').value.trim(),
                category: document.getElementById('actCategory').value,
                date: document.getElementById('actDate').value.trim() || new Date().toLocaleDateString('km-KH'),
                author: document.getElementById('actAuthor').value.trim(),
                image: document.getElementById('actImage').value.trim() || 'assets/images/activities/04-08-26.jpg',
                summary: document.getElementById('actSummary').value.trim(),
                content: document.getElementById('actContent').value.trim()
            };

            if (editingActivityId) {
                const idx = SCHOOL_DATA.activities.findIndex(a => a.id === editingActivityId);
                if (idx !== -1) {
                    SCHOOL_DATA.activities[idx] = { ...SCHOOL_DATA.activities[idx], ...actData };
                    showAdminToast('បានកែសម្រួលព័ត៌មាន/សកម្មភាពដោយជោគជ័យ!');
                }
                editingActivityId = null;
            } else {
                const newItem = { id: Date.now(), views: 0, featured: true, ...actData };
                SCHOOL_DATA.activities.unshift(newItem);
                showAdminToast('បានបន្ថែមព័ត៌មាន/សកម្មភាពសាលាថ្មីដោយជោគជ័យ!');
            }

            saveSchoolData('activities');
            renderActivities(document.querySelector('#activity-filters .filter-btn.active')?.getAttribute('data-filter') || 'all');

            const modalEl = document.getElementById('addActivityModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            addActForm.reset();
        });
    }

    // Form 2: Knowledge Submit Handler (Add / Edit)
    const addKnowForm = document.getElementById('addKnowledgeForm');
    if (addKnowForm) {
        addKnowForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const knowData = {
                title: document.getElementById('knowTitle').value.trim(),
                category: document.getElementById('knowCategory').value,
                date: document.getElementById('knowDate').value.trim() || new Date().toLocaleDateString('km-KH'),
                author: document.getElementById('knowAuthor').value.trim(),
                readTime: document.getElementById('knowReadTime').value.trim() || '៥ នាទី',
                image: document.getElementById('knowImage').value.trim() || 'assets/images/knowledge/digital_learning.png',
                downloadFile: document.getElementById('knowFile').value.trim() || 'assets/docs/digital_learning_guide.pdf',
                summary: document.getElementById('knowSummary').value.trim(),
                content: document.getElementById('knowContent').value.trim()
            };

            if (editingKnowledgeId) {
                const idx = SCHOOL_DATA.knowledge.findIndex(k => k.id === editingKnowledgeId);
                if (idx !== -1) {
                    SCHOOL_DATA.knowledge[idx] = { ...SCHOOL_DATA.knowledge[idx], ...knowData };
                    showAdminToast('បានកែសម្រួលអត្ថបទចំណេះដឹងដោយជោគជ័យ!');
                }
                editingKnowledgeId = null;
            } else {
                const newItem = { id: Date.now(), ...knowData };
                SCHOOL_DATA.knowledge.unshift(newItem);
                showAdminToast('បានបន្ថែមអត្ថបទចំណេះដឹងថ្មីដោយជោគជ័យ!');
            }

            saveSchoolData('knowledge');
            renderKnowledge('all');

            const modalEl = document.getElementById('addKnowledgeModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            addKnowForm.reset();
        });
    }

    // Form 3: Standard Submit Handler (Add / Edit)
    const addStdForm = document.getElementById('addStandardForm');
    if (addStdForm) {
        addStdForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const rawHighlights = document.getElementById('stdHighlights').value.trim();
            const highlightsList = rawHighlights ? rawHighlights.split('\n').filter(h => h.trim().length > 0) : ['ស្តង់ដារគុណភាពអប់រំ'];

            const stdData = {
                id: document.getElementById('stdCode').value.trim() || `STD-0${SCHOOL_DATA.standards.length + 1}`,
                title: document.getElementById('stdTitle').value.trim(),
                category: document.getElementById('stdCategory').value,
                icon: document.getElementById('stdIcon').value,
                description: document.getElementById('stdDescription').value.trim(),
                highlights: highlightsList,
                file: document.getElementById('stdFile').value.trim() || 'assets/docs/model_school_standard.pdf'
            };

            if (editingStandardId) {
                const idx = SCHOOL_DATA.standards.findIndex(s => s.id === editingStandardId);
                if (idx !== -1) {
                    SCHOOL_DATA.standards[idx] = { ...stdData };
                    showAdminToast('បានកែសម្រួលស្តង់ដា/បទបញ្ជាដោយជោគជ័យ!');
                }
                editingStandardId = null;
            } else {
                SCHOOL_DATA.standards.unshift(stdData);
                showAdminToast('បានបន្ថែមស្តង់ដា/បទបញ្ជាថ្មីដោយជោគជ័យ!');
            }

            saveSchoolData('standards');
            renderStandards();

            const modalEl = document.getElementById('addStandardModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            addStdForm.reset();
        });
    }

    // Form 4: Staff Submit Handler (Add / Edit)
    const addStaffForm = document.getElementById('addStaffForm');
    if (addStaffForm) {
        addStaffForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const staffData = {
                name: document.getElementById('staffName').value.trim(),
                position: document.getElementById('staffPosition').value.trim(),
                category: document.getElementById('staffCategory').value,
                roleLevel: document.getElementById('staffCategory').value === 'management' ? 'principal' : 'teacher',
                subject: document.getElementById('staffSubject').value,
                degree: document.getElementById('staffDegree').value.trim(),
                experience: document.getElementById('staffExperience').value.trim(),
                phone: document.getElementById('staffPhone').value.trim(),
                email: document.getElementById('staffEmail').value.trim(),
                image: document.getElementById('staffImage').value.trim() || 'assets/images/staff/principal.png',
                bio: document.getElementById('staffBio').value.trim()
            };

            if (editingStaffId) {
                const idx = SCHOOL_DATA.staff.findIndex(s => s.id === editingStaffId);
                if (idx !== -1) {
                    SCHOOL_DATA.staff[idx] = { ...SCHOOL_DATA.staff[idx], ...staffData };
                    showAdminToast('បានកែសម្រួលព័ត៌មានបុគ្គលិកដោយជោគជ័យ!');
                }
                editingStaffId = null;
            } else {
                const newItem = { id: Date.now(), ...staffData };
                SCHOOL_DATA.staff.unshift(newItem);
                showAdminToast('បានបន្ថែមបុគ្គលិក/គ្រូបង្រៀនថ្មីដោយជោគជ័យ!');
            }

            saveSchoolData('staff');
            renderStaff(currentStaffCategory, currentStaffSubject);

            const modalEl = document.getElementById('addStaffModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            addStaffForm.reset();
        });
    }
}

function refreshActivityImageDropdown(selectedPath) {
    const selectEl = document.getElementById('actImageSelect');
    if (!selectEl) return;

    const defaultImages = [
        'assets/images/activities/04-08-26.jpg',
        'assets/images/activities/stem_fair.png',
        'assets/images/activities/sports_day.png',
        'assets/images/knowledge/digital_learning.png',
        'assets/images/banner/hero_bg.png'
    ];

    let customImages = [];
    try {
        const saved = localStorage.getItem('oudong_custom_activity_images');
        if (saved) customImages = JSON.parse(saved);
    } catch (e) {}

    const dataImages = (SCHOOL_DATA.activities || []).map(a => a.image).filter(Boolean);

    const allImages = Array.from(new Set([...defaultImages, ...dataImages, ...customImages]));
    if (selectedPath && !allImages.includes(selectedPath)) {
        allImages.push(selectedPath);
    }

    selectEl.innerHTML = '';
    allImages.forEach(path => {
        const opt = document.createElement('option');
        opt.value = path;
        opt.textContent = path;
        if (path === selectedPath) opt.selected = true;
        selectEl.appendChild(opt);
    });
}

function addCustomImageToDropdown(selectId, imagePath) {
    let customImages = [];
    try {
        const saved = localStorage.getItem('oudong_custom_activity_images');
        if (saved) customImages = JSON.parse(saved);
    } catch (e) {}

    if (!customImages.includes(imagePath)) {
        customImages.push(imagePath);
        localStorage.setItem('oudong_custom_activity_images', JSON.stringify(customImages));
    }

    refreshActivityImageDropdown(imagePath);
}

// Helper functions for Edit & Delete Modal Actions
function prepareAddActivityModal() {
    editingActivityId = null;
    const form = document.getElementById('addActivityForm');
    if (form) form.reset();
    const defaultPath = 'assets/images/activities/04-08-26.jpg';
    updateImagePreview('actImage', 'actPreview', defaultPath);
    refreshActivityImageDropdown(defaultPath);
}

function editActivity(id) {
    const item = SCHOOL_DATA.activities.find(a => a.id === id);
    if (!item) return;
    editingActivityId = id;
    document.getElementById('actTitle').value = item.title;
    document.getElementById('actCategory').value = item.category;
    document.getElementById('actDate').value = item.date;
    document.getElementById('actAuthor').value = item.author;
    document.getElementById('actImage').value = item.image;
    document.getElementById('actSummary').value = item.summary;
    document.getElementById('actContent').value = item.content;
    updateImagePreview('actImage', 'actPreview', item.image);
    refreshActivityImageDropdown(item.image);

    const modalEl = document.getElementById('addActivityModal');
    if (modalEl) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    }
}

function deleteActivity(id) {
    const item = SCHOOL_DATA.activities.find(a => a.id === id);
    if (!item) return;
    if (confirm(`តើអ្នកប្រាកដជាចង់លុបព័ត៌មាន "${item.title}" នេះមែនទេ?`)) {
        SCHOOL_DATA.activities = SCHOOL_DATA.activities.filter(a => a.id !== id);
        saveSchoolData('activities');
        renderActivities(document.querySelector('#activity-filters .filter-btn.active')?.getAttribute('data-filter') || 'all');
        showAdminToast('បានលុបព័ត៌មាន/សកម្មភាពដោយជោគជ័យ!', 'warning');
    }
}

function prepareAddKnowledgeModal() {
    editingKnowledgeId = null;
    const form = document.getElementById('addKnowledgeForm');
    if (form) form.reset();
    updateImagePreview('knowImage', 'knowPreview', 'assets/images/knowledge/digital_learning.png');
}

function editKnowledge(id) {
    const item = SCHOOL_DATA.knowledge.find(k => k.id === id);
    if (!item) return;
    editingKnowledgeId = id;
    document.getElementById('knowTitle').value = item.title;
    document.getElementById('knowCategory').value = item.category;
    document.getElementById('knowDate').value = item.date;
    document.getElementById('knowAuthor').value = item.author;
    document.getElementById('knowReadTime').value = item.readTime;
    document.getElementById('knowImage').value = item.image;
    document.getElementById('knowFile').value = item.downloadFile;
    document.getElementById('knowSummary').value = item.summary;
    document.getElementById('knowContent').value = item.content;
    updateImagePreview('knowImage', 'knowPreview', item.image);

    const modalEl = document.getElementById('addKnowledgeModal');
    if (modalEl) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    }
}

function deleteKnowledge(id) {
    const item = SCHOOL_DATA.knowledge.find(k => k.id === id);
    if (!item) return;
    if (confirm(`តើអ្នកប្រាកដជាចង់លុបអត្ថបទ "${item.title}" នេះមែនទេ?`)) {
        SCHOOL_DATA.knowledge = SCHOOL_DATA.knowledge.filter(k => k.id !== id);
        saveSchoolData('knowledge');
        renderKnowledge('all');
        showAdminToast('បានលុបអត្ថបទចំណេះដឹងដោយជោគជ័យ!', 'warning');
    }
}

function prepareAddStandardModal() {
    editingStandardId = null;
    const form = document.getElementById('addStandardForm');
    if (form) form.reset();
}

function editStandard(id) {
    const item = SCHOOL_DATA.standards.find(s => s.id === id);
    if (!item) return;
    editingStandardId = id;
    document.getElementById('stdCode').value = item.id;
    document.getElementById('stdTitle').value = item.title;
    document.getElementById('stdCategory').value = item.category;
    document.getElementById('stdIcon').value = item.icon;
    document.getElementById('stdFile').value = item.file;
    document.getElementById('stdDescription').value = item.description;
    document.getElementById('stdHighlights').value = item.highlights ? item.highlights.join('\n') : '';

    const modalEl = document.getElementById('addStandardModal');
    if (modalEl) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    }
}

function deleteStandard(id) {
    const item = SCHOOL_DATA.standards.find(s => s.id === id);
    if (!item) return;
    if (confirm(`តើអ្នកប្រាកដជាចង់លុបស្តង់ដា "${item.title}" នេះមែនទេ?`)) {
        SCHOOL_DATA.standards = SCHOOL_DATA.standards.filter(s => s.id !== id);
        saveSchoolData('standards');
        renderStandards();
        showAdminToast('បានលុបស្តង់ដាដោយជោគជ័យ!', 'warning');
    }
}

function prepareAddStaffModal() {
    editingStaffId = null;
    const form = document.getElementById('addStaffForm');
    if (form) form.reset();
    updateImagePreview('staffImage', 'staffPreview', 'assets/images/staff/principal.png');
}

function editStaff(id) {
    const item = SCHOOL_DATA.staff.find(s => s.id === id);
    if (!item) return;
    editingStaffId = id;
    document.getElementById('staffName').value = item.name;
    document.getElementById('staffPosition').value = item.position;
    document.getElementById('staffCategory').value = item.category;
    document.getElementById('staffSubject').value = item.subject;
    document.getElementById('staffDegree').value = item.degree;
    document.getElementById('staffExperience').value = item.experience;
    document.getElementById('staffPhone').value = item.phone;
    document.getElementById('staffEmail').value = item.email;
    document.getElementById('staffImage').value = item.image;
    document.getElementById('staffBio').value = item.bio;
    updateImagePreview('staffImage', 'staffPreview', item.image);

    const modalEl = document.getElementById('addStaffModal');
    if (modalEl) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
    }
}

function deleteStaff(id) {
    const item = SCHOOL_DATA.staff.find(s => s.id === id);
    if (!item) return;
    if (confirm(`តើអ្នកប្រាកដជាចង់លុបព័ត៌មានបុគ្គលិក "${item.name}" នេះមែនទេ?`)) {
        SCHOOL_DATA.staff = SCHOOL_DATA.staff.filter(s => s.id !== id);
        saveSchoolData('staff');
        renderStaff(currentStaffCategory, currentStaffSubject);
        showAdminToast('បានលុបព័ត៌មានបុគ្គលិកដោយជោគជ័យ!', 'warning');
    }
}

// Function to handle local Browse file picking for images and PDFs
function setupBrowseFilePickers() {
    const actFilePicker = document.getElementById('actFilePicker');
    if (actFilePicker) {
        actFilePicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const imagePath = `assets/images/activities/${file.name}`;
                const actImageInput = document.getElementById('actImage');
                if (actImageInput) actImageInput.value = imagePath;

                const reader = new FileReader();
                reader.onload = function (evt) {
                    const actPreview = document.getElementById('actPreview');
                    if (actPreview) actPreview.src = evt.target.result;
                    addCustomImageToDropdown('actImageSelect', imagePath);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const knowFilePicker = document.getElementById('knowFilePicker');
    if (knowFilePicker) {
        knowFilePicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const imagePath = `assets/images/knowledge/${file.name}`;
                const knowImageInput = document.getElementById('knowImage');
                if (knowImageInput) knowImageInput.value = imagePath;

                const reader = new FileReader();
                reader.onload = function (evt) {
                    const knowPreview = document.getElementById('knowPreview');
                    if (knowPreview) knowPreview.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const knowPdfPicker = document.getElementById('knowPdfPicker');
    if (knowPdfPicker) {
        knowPdfPicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const knowFile = document.getElementById('knowFile');
                if (knowFile) knowFile.value = `assets/docs/${file.name}`;
            }
        });
    }

    const stdPdfPicker = document.getElementById('stdPdfPicker');
    if (stdPdfPicker) {
        stdPdfPicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const stdFile = document.getElementById('stdFile');
                if (stdFile) stdFile.value = `assets/docs/${file.name}`;
            }
        });
    }

    const staffFilePicker = document.getElementById('staffFilePicker');
    if (staffFilePicker) {
        staffFilePicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const imagePath = `assets/images/staff/${file.name}`;
                const staffImageInput = document.getElementById('staffImage');
                if (staffImageInput) staffImageInput.value = imagePath;

                const reader = new FileReader();
                reader.onload = function (evt) {
                    const staffPreview = document.getElementById('staffPreview');
                    if (staffPreview) staffPreview.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const dbImportFilePicker = document.getElementById('dbImportFilePicker');
    if (dbImportFilePicker) {
        dbImportFilePicker.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                importDatabaseBackup(file, (success, msg) => {
                    if (success) {
                        renderStaff(currentStaffCategory, currentStaffSubject);
                        renderActivities('all');
                        renderKnowledge('all');
                        renderStandards();
                        updateDBModalStats();
                        showAdminToast(msg, 'success');
                    } else {
                        showAdminToast(msg, 'warning');
                    }
                });
            }
        });
    }
}

// Function to update stats counter inside Database Manager Modal
function updateDBModalStats() {
    const sStaff = document.getElementById('dbStatStaff');
    const sAct = document.getElementById('dbStatActivities');
    const sKnow = document.getElementById('dbStatKnowledge');
    const sStd = document.getElementById('dbStatStandards');

    if (sStaff) sStaff.innerText = (SCHOOL_DATA.staff || []).length;
    if (sAct) sAct.innerText = (SCHOOL_DATA.activities || []).length;
    if (sKnow) sKnow.innerText = (SCHOOL_DATA.knowledge || []).length;
    if (sStd) sStd.innerText = (SCHOOL_DATA.standards || []).length;
}
