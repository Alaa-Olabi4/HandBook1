import articles from './articles.js';

// ========================
// Persistent Expiration Check
// ========================
const EXPIRATION_KEY = 'app_expiration';
const expirationDate = new Date('9999-12-31T23:59:59');

// Check if we've previously recorded expiration
if (localStorage.getItem(EXPIRATION_KEY)) {
    showExpiration();
    throw new Error("Application expired");
}

// Check current date
const currentDate = new Date();
if (currentDate > expirationDate) {
    // Set persistent flag
    localStorage.setItem(EXPIRATION_KEY, 'true');

    // Clear other data
    const preserveKeys = [EXPIRATION_KEY];
    Object.keys(localStorage).forEach(key => {
        if (!preserveKeys.includes(key)) {
            localStorage.removeItem(key);
        }
    });

    showExpiration();
    throw new Error("Application expired");
}

function showExpiration() {
    document.body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HandBook - Content Expired</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #4361ee 0%, #7209b7 100%);
            color: #fff;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }
        
        .expiration-container {
            max-width: 600px;
            width: 100%;
            padding: 40px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .logo {
            margin-bottom: 30px;
        }
        
        .logo i {
            font-size: 64px;
            color: #ffcc00;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .logo-text {
            font-size: 36px;
            font-weight: 700;
            color: #ffcc00;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .logo-text span {
            color: #fff;
        }
        
        h1 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .message {
            font-size: 20px;
            margin-bottom: 30px;
            max-width: 500px;
            line-height: 1.6;
            margin: 0 auto 30px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .contact {
            font-size: 18px;
            opacity: 0.9;
            margin-top: 20px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .pattern {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.05;
            background-image: 
                radial-gradient(circle at 10% 20%, #ffcc00 0%, transparent 15%),
                radial-gradient(circle at 90% 80%, #ffcc00 0%, transparent 15%),
                radial-gradient(circle at 50% 50%, #4361ee 0%, transparent 20%);
            pointer-events: none;
            z-index: -1;
        }
        
        .circles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
        
        .circles li {
            position: absolute;
            display: block;
            list-style: none;
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.2);
            animation: animate 25s linear infinite;
            bottom: -150px;
            border-radius: 50%;
        }
        
        .circles li:nth-child(1) {
            left: 25%;
            width: 80px;
            height: 80px;
            animation-delay: 0s;
        }
        
        .circles li:nth-child(2) {
            left: 10%;
            width: 20px;
            height: 20px;
            animation-delay: 2s;
            animation-duration: 12s;
        }
        
        .circles li:nth-child(3) {
            left: 70%;
            width: 20px;
            height: 20px;
            animation-delay: 4s;
        }
        
        .circles li:nth-child(4) {
            left: 40%;
            width: 60px;
            height: 60px;
            animation-delay: 0s;
            animation-duration: 18s;
        }
        
        .circles li:nth-child(5) {
            left: 65%;
            width: 20px;
            height: 20px;
            animation-delay: 0s;
        }
        
        .circles li:nth-child(6) {
            left: 75%;
            width: 110px;
            height: 110px;
            animation-delay: 3s;
        }
        
        .circles li:nth-child(7) {
            left: 35%;
            width: 150px;
            height: 150px;
            animation-delay: 7s;
        }
        
        .circles li:nth-child(8) {
            left: 50%;
            width: 25px;
            height: 25px;
            animation-delay: 15s;
            animation-duration: 45s;
        }
        
        .circles li:nth-child(9) {
            left: 20%;
            width: 15px;
            height: 15px;
            animation-delay: 2s;
            animation-duration: 35s;
        }
        
        .circles li:nth-child(10) {
            left: 85%;
            width: 150px;
            height: 150px;
            animation-delay: 0s;
            animation-duration: 11s;
        }
        
        @keyframes animate {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
                border-radius: 0;
            }
            
            100% {
                transform: translateY(-1000px) rotate(720deg);
                opacity: 0;
                border-radius: 50%;
            }
        }
        
        @media (max-width: 768px) {
            .expiration-container {
                padding: 30px 20px;
            }
            
            .logo i {
                font-size: 48px;
            }
            
            .logo-text {
                font-size: 28px;
            }
            
            h1 {
                font-size: 28px;
            }
            
            .message {
                font-size: 18px;
            }
            
            .contact {
                font-size: 16px;
            }
        }
    </style>
    </head>
    <body>
    <div class="pattern"></div>
    
    <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    
    <div class="expiration-container">
        <div class="logo">
            <i class="fas fa-book"></i>
            <div class="logo-text">Hand<span>Book</span></div>
        </div>
        <h1>Content Expired</h1>
        <p class="message">
            This application's content has expired. Please contact support for more information.
        </p>
        <p class="contact">
            <i class="fas fa-envelope"></i> <a href="mailto:CCTraining@mtn.com.sy" style="color:white;">CCTraining@mtn.com.sy</a><br>
        </p>
    </div>
    
    <script>
        // Add subtle animation to elements
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.expiration-container');
            setTimeout(() => {
                container.style.opacity = 1;
                container.style.transform = 'translateY(0)';
            }, 100);
        });
    </script>
    </body>
    </html>`;
}


// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const drawer = document.getElementById('drawer');
const searchToggle = document.getElementById('searchToggle');
const closeSearch = document.getElementById('closeSearch');
const searchContainer = document.getElementById('searchContainer');
const themeToggle = document.getElementById('themeToggle');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const footerBtns = document.querySelectorAll('.footer-btn');
const categoryCards = document.querySelectorAll('.category-card');
const backBtns = document.querySelectorAll('.back-btn');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const headerBackBtn = document.getElementById('headerBackBtn');

// Current page state
let currentPage = 'home';
let previousPage = 'home';

// Initialize the app
function initApp() {
    // Set up event listeners
    setupEventListeners();

    // Load all content
    loadAllContent();

    // Apply saved theme
    applySavedTheme();

    // Update article counts
    updateArticleCounts();

    setupHeaderBackButton();

}

// Set up event listeners
function setupEventListeners() {
    // Toggle Navigation Drawer
    menuToggle.addEventListener('click', toggleDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // Toggle Search Bar
    searchToggle.addEventListener('click', openSearch);
    closeSearch.addEventListener('click', closeSearchBar);

    // Toggle Dark/Light Mode
    themeToggle.addEventListener('click', toggleTheme);

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', navigateFromDrawer);
    });

    footerBtns.forEach(btn => {
        btn.addEventListener('click', navigateFromFooter);
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', navigateToCategory);
    });

    // backBtns.forEach(btn => {
    //     btn.addEventListener('click', goBack);
    // });

    // Search functionality
    searchForm.addEventListener('submit', performSearch);
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            performSearch(e);
        }
    });
}

// Load all content
function loadAllContent() {
    // Load featured articles
    loadFeaturedArticles();  

    // Load category articles
    loadCategoryArticles('prepaid');
    loadCategoryArticles('postpaid');
    loadCategoryArticles('services');
    loadCategoryArticles('prebundles');
    loadCategoryArticles('postbundles');
    loadCategoryArticles('prepostbundles');
    loadCategoryArticles('adsl');
    loadCategoryArticles('cashmobile');
}

// Update article counts
function updateArticleCounts() {
    document.getElementById('prepaidCount').textContent = `${articles.prepaid.length} articles`;
    document.getElementById('postpaidCount').textContent = `${articles.postpaid.length} articles`;
    document.getElementById('servicesCount').textContent = `${articles.services.length} articles`;
    document.getElementById('prebundlesCount').textContent = `${articles.prebundles.length} articles`;
    document.getElementById('postbundlesCount').textContent = `${articles.postbundles.length} articles`;
    document.getElementById('prepostbundlesCount').textContent = `${articles.prepostbundles.length} articles`;
    document.getElementById('adslCount').textContent = `${articles.adsl.length} articles`;
    document.getElementById('cashmobileCount').textContent = `${articles.cashmobile.length} articles`;
}

// Navigation Functions
function navigateToPage(page) {
    // Update page history
    previousPage = currentPage;
    currentPage = page;

    // Hide all pages
    pages.forEach(p => p.classList.remove('active'));

    // Show the requested page
    document.getElementById(`${page}Page`).classList.add('active');

    // Update active footer button
    updateFooterActiveButton(page);

    // Close drawer if open
    closeDrawer();

    // Load specific content for pages
    if (page === 'bookmarks') {
        loadBookmarks();
    } else if (page === 'notes') {
        loadNotes();
    } else if (page === 'search') {
        // Focus search input
        openSearch();
        setTimeout(() => searchInput.focus(), 100);
    }
    // Show/hide header elements based on current page
    if (page === 'home') {
        document.querySelector('.logo').style.display = 'flex';
        headerBackBtn.style.display = 'none';
    } else {
        document.querySelector('.logo').style.display = 'none';
        headerBackBtn.style.display = 'block';
    }
}

function navigateFromDrawer(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    navigateToPage(page);
}

function navigateFromFooter(e) {
    const page = this.getAttribute('data-page');
    navigateToPage(page);
}

function navigateToCategory() {
    const page = this.getAttribute('data-page');
    navigateToPage(page);
}

function goBack() {
    const targetPage = this.getAttribute('data-page');
    if (targetPage === 'previous') {
        navigateToPage(previousPage);
    } else {
        navigateToPage(targetPage);
    }
}

// Setup header back button
function setupHeaderBackButton() {
    headerBackBtn.addEventListener('click', goBackToHome);
}

// Navigation function for header back button
function goBackToHome() {
    if (currentPage !== 'home') {
        navigateToPage('home');
    }
}


function updateFooterActiveButton(page) {
    footerBtns.forEach(btn => {
        if (btn.getAttribute('data-page') === page) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Drawer Functions
function toggleDrawer() {
    drawer.classList.toggle('open');
    drawerOverlay.classList.toggle('open');
}

function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
}

// Search Functions
function openSearch() {
    searchContainer.classList.add('active');
    searchInput.focus();
}

function closeSearchBar() {
    searchContainer.classList.remove('active');
    searchInput.value = '';
}

// function performSearch(e) {
//     e.preventDefault();
//     const searchTerm = searchInput.value.toLowerCase().trim();

//     if (searchTerm) {
//         const results = [];

//         // Search in all categories
//         for (const category in articles) {
//             articles[category].forEach(article => {
//                 if (article.title.toLowerCase().includes(searchTerm) ||
//                     article.content.toLowerCase().includes(searchTerm)) {
//                     results.push({
//                         ...article,
//                         category
//                     });
//                 }
//             });
//         }

//         displaySearchResults(results);
//         navigateToPage('search');
//     }

//     closeSearchBar();
// }

// function displaySearchResults(results) {
//     const container = document.getElementById('searchResults');

//     if (results.length === 0) {
//         container.innerHTML = `
//                     <div class="empty-state">
//                         <i class="fas fa-search"></i>
//                         <h3>No Results Found</h3>
//                         <p>Try different search terms</p>
//                     </div>
//                 `;
//         return;
//     }

//     container.innerHTML = results.map(article => `
//                 <div class="article-card" data-article="${article.id}" data-category="${article.category}">
//                     <div class="article-image" style="background: ${article.image};"></div>
//                     <div class="article-content">
//                         <div class="article-meta">
//                             <span class="article-category ${article.category}-badge">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
//                         </div>
//                         <h3 class="article-title">${article.title}</h3>
//                         <div class="article-actions">
//                             <a href="#" class="read-more" data-article="${article.id}" data-category="${article.category}">Read more <i class="fas fa-arrow-right"></i></a>
//                             <div class="action-buttons">
//                                 <button class="bookmark-btn" data-article="${article.id}"><i class="far fa-bookmark"></i></button>
//                                 <button class="note-btn" data-article="${article.id}"><i class="far fa-sticky-note"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `).join('');

//     // Add event listeners
//     container.querySelectorAll('.read-more').forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const articleId = this.getAttribute('data-article');
//             const category = this.getAttribute('data-category');
//             showArticleDetail(articleId, category);
//         });
//     });
// }

// Theme Functions

function performSearch(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) {
        closeSearchBar();
        return;
    }

    const normalizedSearch = normalizeArabicText(searchTerm);
    const results = [];

    // البحث في جميع التصنيفات
    for (const category in articles) {
        articles[category].forEach(article => {
            // التحقق من وجود المقال وخصائصه
            if (article && article.title && article.content) {
                const titleNorm = normalizeArabicText(article.title);
                const contentNorm = normalizeArabicText(article.content);

                if (titleNorm.includes(normalizedSearch) ||
                    contentNorm.includes(normalizedSearch)) {
                    results.push({
                        ...article,
                        category
                    });
                }
            }
        });
    }

    displaySearchResults(results);
    navigateToPage('search');
    closeSearchBar();
}

// دالة مساعدة لتطبيع النص العربي
function normalizeArabicText(text) {
    if (!text) return '';

    return text
        .toString()
        .normalize('NFKD') // تفكيك الحروف المشكّلة
        .replace(/[\u064B-\u065F]/g, '') // إزالة التشكيل
        .replace(/(آ|أ|إ|ٱ)/g, 'ا') // توحيد أشكال الألف
        .replace(/(ة)/g, 'ه') // تحويل التاء المربوطة إلى هاء
        .replace(/(ئ|ؤ)/g, (m) => m === 'ئ' ? 'ي' : 'و') // توحيد الياء والواو
        .replace(/(ى)/g, 'ي') // تحويل الألف المقصورة إلى ياء
        .toLowerCase();
}

function displaySearchResults(results) {
    const container = document.getElementById('searchResults');

    if (!container) {
        console.error('Search results container not found');
        return;
    }

    if (results.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No results found!</h3>
            </div>
        `;
        return;
    }

    container.innerHTML = results.map(article => `
        <div class="article-card" data-article="${article.id}" data-category="${article.category}">
            <div class="article-image" style="background: ${article.image};"></div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category ${article.category}-badge">
                        ${article.category}
                    </span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <div class="article-actions">
                    <a href="#" class="read-more" data-article="${article.id}" data-category="${article.category}">
                        read more <i class="fas fa-arrow-left"></i>
                    </a>
                    <div class="action-buttons">
                        <button class="bookmark-btn" data-article="${article.id}">
                            <i class="far fa-bookmark"></i>
                        </button>
                        <button class="note-btn" data-article="${article.id}">
                            <i class="far fa-sticky-note"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // إضافة معالجات الأحداث
    addSearchResultEventListeners();
}

// دالة مساعدة للحصول على اسم التصنيف
// function getCategoryName(category) {
//     const categoryNames = {
//         prepaid: 'مدفوع مقدمًا',
//         postpaid: 'ما بعد الدفع',
//         services: 'خدمات'
//     };
//     return categoryNames[category] || category;
// }

// دالة لإضافة معالجات الأحداث لنتائج البحث
function addSearchResultEventListeners() {
    const container = document.getElementById('searchResults');
    if (!container) return;

    // معالجات أحداث القراءة
    container.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const articleId = this.dataset.article;
            const category = this.dataset.category;
            showArticleDetail(articleId, category);
        });
    });

    // معالجات أحداث الإشارات المرجعية
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const articleId = this.dataset.article;
            toggleBookmark(articleId);
        });
    });

    // معالجات أحداث الملاحظات
    container.querySelectorAll('.note-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const articleId = this.dataset.article;
            const category = this.dataset.category;
            showArticleNotesModal(articleId, category);
        });
    });
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Update icon based on theme
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Save theme preference
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

function applySavedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Article Loading Functions
function loadFeaturedArticles() {
    const container = document.getElementById('featuredArticles');
    const allArticles = [...articles.prepaid, ...articles.postpaid, ...articles.services, ...articles.prebundles];
    const featured = [];
    const selectedIndices = new Set();

    // console.log(allArticles);

    // while (featured.length < 3 && selectedIndices.size < allArticles.length) {
    //     const randomIndex = Math.floor(Math.random() * allArticles.length);
    //     if (!selectedIndices.has(randomIndex)) {
    //         selectedIndices.add(randomIndex);
    //         featured.push(allArticles[randomIndex]);
    //     }
    // }
    featured.push(allArticles[19]);

    container.innerHTML = featured.map(article => {
        const category = getArticleCategory(article.id);
        return `
                    <div class="article-card" data-article="${article.id}" data-category="${category}">
                        <div class="article-image" style="background: ${article.image};"></div>
                        <div class="article-content">
                            <div class="article-meta">
                                <span class="article-category ${category}-badge">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                            </div>
                            <h3 class="article-title">${article.title}</h3>
                            <div class="article-actions">
                                <a href="#" class="read-more" data-article="${article.id}" data-category="${category}">Read more <i class="fas fa-arrow-right"></i></a>
                                <div class="action-buttons">
                                    <button class="bookmark-btn" data-article="${article.id}"><i class="far fa-bookmark"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }).join('');

    // Add event listeners
    addArticleEventListeners(container);
}

function loadCategoryArticles(category) {
    const container = document.getElementById(`${category}Articles`);
    const categoryArticles = articles[category] || [];

    container.innerHTML = categoryArticles.map(article => `
                <div class="article-card" data-article="${article.id}" data-category="${category}">
                    <div class="article-image" style="background: ${article.image};"></div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-category ${category}-badge">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </div>
                        <h3 class="article-title">${article.title}</h3>
                        
                        <div class="article-actions">
                            <a href="#" class="read-more" data-article="${article.id}" data-category="${category}">Read more <i class="fas fa-arrow-right"></i></a>
                            <div class="action-buttons">
                                <button class="bookmark-btn" data-article="${article.id}"><i class="far fa-bookmark"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

    // Add event listeners
    addArticleEventListeners(container);
}

function addArticleEventListeners(container) {
    // Read more buttons
    container.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const articleId = this.getAttribute('data-article');
            const category = this.getAttribute('data-category');
            showArticleDetail(articleId, category);
        });
    });

    // Bookmark buttons
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            toggleBookmark(this.getAttribute('data-article'));
        });
    });

}

function getArticleCategory(articleId) {
    for (const category in articles) {
        if (articles[category].some(article => article.id === articleId)) {
            return category;
        }
    }
    return '';
}

// Article Functions
function showArticleDetail(articleId, category) {
    const article = articles[category].find(a => a.id === articleId);
    if (!article) return;

    const articleDetail = document.getElementById('articleDetailContent');

    articleDetail.innerHTML = `
                <div class="article-detail-header">
                    <div class="article-image" style="background: ${article.image}; height: 200px; border-radius: 12px;"></div>
                    <h1 class="article-detail-title">${article.title}</h1>
                    <div class="article-detail-meta">
                        <span>•  ${category.charAt(0).toUpperCase() + category.slice(1)} </span>
                    </div>
                </div>
                
                <div class="article-detail-content">
                    ${article.content}
                </div>
                
                <div class="article-detail-actions">
                    <button class="bookmark-btn" id="detailBookmarkBtn" data-article="${article.id}">
                        <i class="far fa-bookmark"></i> Bookmark
                    </button>
                </div>
                
                <div class="notes-section">
                    <h3 class="notes-title"><i class="fas fa-pencil-alt"></i> Your Notes</h3>
                    
                    <div class="saved-notes" id="articleNotes">
                        ${renderArticleNotes(article.id)}
                    </div>
                    
                    <form class="note-form" id="noteForm">
                        <textarea class="note-input" placeholder="Add your personal notes about this article..."></textarea>
                        <button type="button" class="save-note" id="saveNoteBtn" data-article="${article.id}">Save Note</button>
                    </form>
                </div>
            `;

    // Add event listeners for detail page
    document.getElementById('detailBookmarkBtn').addEventListener('click', function () {
        toggleBookmark(article.id);
    });

    document.getElementById('saveNoteBtn').addEventListener('click', function () {
        saveArticleNote(article.id);
    });

    // Add delete note listeners
    document.querySelectorAll('.delete-note').forEach(btn => {
        btn.addEventListener('click', function () {
            deleteArticleNote(this.getAttribute('data-noteid'), article.id);
        });
    });

    navigateToPage('article');
}

// Bookmark Functions
function getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks')) || [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function toggleBookmark(articleId) {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(articleId);

    if (index === -1) {
        // Add to bookmarks
        bookmarks.push(articleId);
        alert('Article bookmarked!');
    } else {
        // Remove from bookmarks
        bookmarks.splice(index, 1);
        alert('Bookmark removed!');
    }

    saveBookmarks(bookmarks);

    // Update UI
    const bookmarkBtns = document.querySelectorAll(`.bookmark-btn[data-article="${articleId}"]`);
    bookmarkBtns.forEach(btn => {
        const icon = btn.querySelector('i');
        if (bookmarks.includes(articleId)) {
            btn.classList.add('active');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            btn.classList.remove('active');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });

    // Update bookmarks page if open
    if (currentPage === 'bookmarks') {
        loadBookmarks();
    }
}

function loadBookmarks() {
    const container = document.getElementById('bookmarksContent');
    const bookmarks = getBookmarks();

    if (bookmarks.length === 0) {
        container.innerHTML = `
                    <div class="empty-state">
                        <i class="far fa-bookmark"></i>
                        <h3>No Bookmarks Yet</h3>
                        <p>Save articles to access them later from here</p>
                    </div>
                `;
        return;
    }

    container.innerHTML = `
                <div class="articles-list">
                    ${bookmarks.map(articleId => {
        let article;
        let category;

        // Find the article in any category
        for (const cat in articles) {
            const found = articles[cat].find(a => a.id === articleId);
            if (found) {
                article = found;
                category = cat;
                break;
            }
        }

        if (!article) return '';

        return `
                            <div class="article-card" data-article="${article.id}" data-category="${category}">
                                <div class="article-image" style="background: ${article.image};"></div>
                                <div class="article-content">
                                    <div class="article-meta">
                                        <span class="article-category ${category}-badge">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    </div>
                                    <h3 class="article-title">${article.title}</h3>
                                    
                                    <div class="article-actions">
                                        <a href="#" class="read-more" data-article="${article.id}" data-category="${category}">Read more <i class="fas fa-arrow-right"></i></a>
                                        <div class="action-buttons">
                                            <button class="bookmark-btn active" data-article="${article.id}">
                                                <i class="fas fa-bookmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            `;

    // Add event listeners
    addArticleEventListeners(container);
}

// Note Functions
function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || {};
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderArticleNotes(articleId) {
    const notes = getNotes();
    const articleNotes = notes[articleId] || [];

    // if (articleNotes.length === 0) {
    //     return '<p>No notes yet. Add your first note!</p>';
    // }

    return articleNotes.map(note => `
                <div class="note-item">
                    <div class="note-date">${note.date}</div>
                    <div class="note-content">${note.content}</div>
                    <button class="delete-note" data-noteid="${note.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
}

function saveArticleNote(articleId) {
    const noteInput = document.querySelector('.note-input');
    const noteText = noteInput.value.trim();

    if (noteText) {
        const notes = getNotes();
        if (!notes[articleId]) notes[articleId] = [];

        const newNote = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            content: noteText
        };

        notes[articleId].push(newNote);
        saveNotes(notes);

        // Update UI
        const notesContainer = document.getElementById('articleNotes');
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item';
        noteElement.innerHTML = `
                    <div class="note-date">${newNote.date}</div>
                    <div class="note-content">${newNote.content}</div>
                    <button class="delete-note" data-noteid="${newNote.id}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
        notesContainer.appendChild(noteElement);

        // Add event listener to delete button
        noteElement.querySelector('.delete-note').addEventListener('click', function () {
            deleteArticleNote(this.getAttribute('data-noteid'), articleId);
        });

        // Clear input
        noteInput.value = '';

        // Update notes page if open
        if (currentPage === 'notes') {
            loadNotes();
        }
    }
}

function deleteArticleNote(noteId, articleId) {
    const notes = getNotes();
    if (notes[articleId]) {
        notes[articleId] = notes[articleId].filter(note => note.id !== noteId);
        saveNotes(notes);

        // Remove from UI
        document.querySelector(`.delete-note[data-noteid="${noteId}"]`).closest('.note-item').remove();

        // Update notes page if open
        if (currentPage === 'notes') {
            loadNotes();
        }
    }
}

function loadNotes() {
    const container = document.getElementById('notesContent');
    const notes = getNotes();

    // Get all notes from all articles
    let allNotes = [];
    for (const articleId in notes) {
        if (notes[articleId].length > 0) {
            let article;
            let category;

            // Find the article in any category
            for (const cat in articles) {
                const found = articles[cat].find(a => a.id === articleId);
                if (found) {
                    article = found;
                    category = cat;
                    break;
                }
            }

            if (!article) continue;

            notes[articleId].forEach(note => {
                allNotes.push({
                    ...note,
                    articleId,
                    articleTitle: article.title,
                    category
                });
            });
        }
    }

    if (allNotes.length === 0) {
        container.innerHTML = `
                    <div class="empty-state">
                        <i class="far fa-sticky-note"></i>
                        <h3>No Notes Yet</h3>
                        <p>Add notes to articles to see them here</p>
                    </div>
                `;
        return;
    }

    // Sort by date (newest first)
    allNotes.sort((a, b) => b.id - a.id);

    container.innerHTML = allNotes.map(note => `
                <div class="note-item">
                    <div class="note-header">
                        <div class="note-date">${note.date}</div>
                        <div class="note-article">On: ${note.articleTitle}</div>
                    </div>
                    <div class="note-content">${note.content}</div>
                    <div class="note-actions">
                        <button class="btn small view-article-btn" data-article="${note.articleId}" data-category="${note.category}">
                            <i class="fas fa-book"></i> View Article
                        </button>
                        <button class="btn small danger delete-note-global" data-noteid="${note.id}" data-article="${note.articleId}">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `).join('');

    // Add event listeners
    container.querySelectorAll('.view-article-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            const category = this.getAttribute('data-category');
            showArticleDetail(articleId, category);
        });
    });

    container.querySelectorAll('.delete-note-global').forEach(btn => {
        btn.addEventListener('click', function () {
            const noteId = this.getAttribute('data-noteid');
            const articleId = this.getAttribute('data-article');
            deleteArticleNote(noteId, articleId);
        });
    });
}

// Initialize the app
window.addEventListener('DOMContentLoaded', initApp);
