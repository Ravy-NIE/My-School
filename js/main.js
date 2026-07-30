// ==========================================
// វិទ្យាល័យ ឧដុង្គ - MAIN INTERACTIVE JAVASCRIPT
// Dynamic Rendering, Interactive Filters, Modals, Dark Mode
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSchoolStats();
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

// Subject translations mapping
const SUBJECT_LABELS = {
    'all': 'មុខវិជ្ជាទាំងអស់',
    'math': 'គណិតវិទ្យា',
    'physics': 'រូបវិទ្យា',
    'chemistry': 'គីមីវិទ្យា',
    'biology': 'ជីវវិទ្យា',
    'ict': 'ព័ត៌មានវិទ្យា (ICT)',
    'khmer': 'អក្សរសាស្ត្រខ្មែរ',
    'history': 'ប្រវត្តិវិទ្យា',
    'geography': 'ភូមិវិទ្យា',
    'english': 'ភាសាអង់គ្លេស',
    'civics': 'សីលធម៌-ពលរដ្ឋ',
    'management': 'គ្រប់គ្រង'
};

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

    if (staffList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <i class="fa-solid fa-user-slash fs-1 text-warning mb-3 d-block"></i>
                មិនមានទិន្នន័យលោកគ្រូអ្នកគ្រូ ក្នុងមុខវិជ្ជា ឬផ្នែកនេះទេ។
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
                        <img src="${member.image}" alt="${member.name}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80'">
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
        'exam': 'ការប្រឡង'
    };

    activitiesList.forEach(item => {
        const cardHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="news-card">
                    <div class="news-img-wrap">
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80'">
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
            
            // Reset subject dropdown when changing main category if needed
            renderStaff(category, currentStaffSubject);
        });
    });

    // Staff Subject Select Dropdown
    const subjectSelect = document.getElementById('staff-subject-select');
    if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => {
            renderStaff(currentStaffCategory, e.target.value);
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

    // Smooth Scroll for Navigation Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
