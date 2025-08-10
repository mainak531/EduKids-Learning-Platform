// ===== CORE DATA MANAGEMENT MODULE =====
const DataManager = {
    courseData: {
        new: [
            {
                id: 1,
                title: "Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing",
                description: "Build circuits & smart projects like alarms, weather stations, etc",
                image: "../assets/images/img_young_scientist.png",
                rating: "4.9",
                learners: "200+",
                tags: ["English", "Intermediate", "4 classes"],
                author: "Daniel James",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "7-10 yrs",
                duration: "45",
                price: "299",
                badge: "Selling fast",
                category: "coding",
                timeSlot: "morning"
            },
            {
                id: 2,
                title: "Creative Writing Masterclass for Young Writers",
                description: "Develop storytelling skills and unleash your creativity through guided writing exercises",
                image: "../assets/images/img_young_scientist_198x252.png",
                rating: "4.8",
                learners: "150+",
                tags: ["English", "Beginner", "6 classes"],
                author: "Sarah Johnson",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "8-12 yrs",
                duration: "30",
                price: "199",
                category: "english",
                timeSlot: "afternoon"
            },
            {
                id: 3,
                title: "Chess Strategy for Beginners: Learn Like a Grandmaster",
                description: "Master the fundamentals of chess with proven strategies and tactics",
                image: "../assets/images/img_young_scientist_1.png",
                rating: "4.9",
                learners: "300+",
                tags: ["Strategy", "Beginner", "8 classes"],
                author: "Master Chen",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "6-14 yrs",
                duration: "60",
                price: "249",
                category: "chess",
                timeSlot: "evening"
            }
        ],
        featured: [
            {
                id: 4,
                title: "Public Speaking Confidence Builder",
                description: "Overcome stage fright and build confidence in public speaking",
                image: "../assets/images/img_young_scientist_3.png",
                rating: "4.9",
                learners: "400+",
                tags: ["Communication", "Intermediate", "5 classes"],
                author: "Alex Rivera",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "10-16 yrs",
                duration: "40",
                price: "349",
                badge: "Most Popular",
                category: "public-speaking",
                timeSlot: "morning"
            },
            {
                id: 5,
                title: "App Building for Kids: Create Your First Mobile App",
                description: "Learn to build simple mobile apps using kid-friendly programming tools",
                image: "../assets/images/img_young_scientist_4.png",
                rating: "4.7",
                learners: "250+",
                tags: ["Programming", "Advanced", "10 classes"],
                author: "Tech Guru Mike",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "12-18 yrs",
                duration: "90",
                price: "499",
                category: "app-building",
                timeSlot: "afternoon"
            },
            {
                id: 6,
                title: "Mathematics Made Fun: Problem Solving Adventures",
                description: "Make math exciting with interactive problem-solving techniques",
                image: "../assets/images/img_young_scientist_5.png",
                rating: "4.8",
                learners: "320+",
                tags: ["Mathematics", "Intermediate", "7 classes"],
                author: "Prof. Lisa Wong",
                authorAvatar: "../assets/images/img_rectangle.png",
                age: "8-14 yrs",
                duration: "50",
                price: "279",
                category: "mathematics",
                timeSlot: "evening"
            }
        ]
    },

    teacherData: [
        {
            name: "Andy Brew",
            credentials: "M.Sc, B.Ed | 15+ Years",
            students: "1000+ Students",
            subject: "Computer science",
            avatar: "../assets/images/img_mask_group.png"
        },
        {
            name: "Sarah Mitchell",
            credentials: "PhD, MA | 12+ Years",
            students: "800+ Students",
            subject: "English",
            avatar: "../assets/images/img_mask_group.png"
        },
        {
            name: "Maria Rodriguez",
            credentials: "M.Ed, B.A | 10+ Years",
            students: "600+ Students",
            subject: "Early educator",
            avatar: "../assets/images/img_mask_group.png"
        },
        {
            name: "David Kim",
            credentials: "MS, B.Tech | 8+ Years",
            students: "900+ Students",
            subject: "Coding",
            avatar: "../assets/images/img_mask_group.png"
        }
    ],

    categoryData: [
        {
            title: "Coding",
            icon: "../assets/images/img_group_58303.svg",
            type: "coding"
        },
        {
            title: "Public\nspeaking",
            icon: "../assets/images/img_objects.svg",
            type: "other"
        },
        {
            title: "Chess",
            icon: "../assets/images/img_horse_figure.svg",
            type: "other"
        },
        {
            title: "Home\nwork help",
            icon: "../assets/images/img_group.png",
            type: "other"
        },
        {
            title: "App building",
            icon: "../assets/images/img_group_blue_gray_800_01.svg",
            type: "other"
        }
    ],

    timeOptions: [
        {
            title: "Morning classes",
            time: "8am - 12pm",
            icon: "../assets/images/img_sun.png",
            slot: "morning"
        },
        {
            title: "Afternoon classes",
            time: "12pm - 4pm",
            icon: "../assets/images/img_group_58306.png",
            slot: "afternoon"
        },
        {
            title: "Evening classes",
            time: "4pm - 8pm",
            icon: "../assets/images/img_vector.png",
            slot: "evening"
        },
        {
            title: "Late evening classes",
            time: "8pm - 11pm",
            icon: "../assets/images/img_layer_1.png",
            slot: "late-evening"
        }
    ],

    getAllCourses() {
        return [...this.courseData.new, ...this.courseData.featured];
    },

    getCourseById(id) {
        return this.getAllCourses().find(course => course.id == id);
    },

    filterCourses(filters) {
        let courses = this.getAllCourses();
        
        if (filters.search) {
            courses = courses.filter(course => 
                course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                course.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                course.category.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.category && filters.category !== 'all') {
            courses = courses.filter(course => course.category === filters.category);
        }

        if (filters.level && filters.level !== 'all') {
            courses = courses.filter(course => 
                course.tags.some(tag => tag.toLowerCase() === filters.level.toLowerCase())
            );
        }

        if (filters.price && filters.price !== 'all') {
            courses = courses.filter(course => this.matchesPriceRange(course.price, filters.price));
        }

        if (filters.timeSlot && filters.timeSlot !== 'all') {
            courses = courses.filter(course => course.timeSlot === filters.timeSlot);
        }

        return courses;
    },

    matchesPriceRange(price, range) {
        const priceNum = parseInt(price);
        switch (range) {
            case '0-100':
                return priceNum >= 0 && priceNum <= 100;
            case '100-300':
                return priceNum > 100 && priceNum <= 300;
            case '300-500':
                return priceNum > 300 && priceNum <= 500;
            case '500+':
                return priceNum > 500;
            default:
                return true;
        }
    }
};

// ===== SEARCH COMPONENT =====
const SearchComponent = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');

        searchBtn?.addEventListener('click', () => this.handleSearch());
        searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });

        // Real-time search with debounce
        searchInput?.addEventListener('input', this.debounce(() => {
            this.handleSearch();
        }, 300));
    },

    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput?.value.trim() || '';
        
        const filters = {
            search: searchTerm,
            category: FilterComponent.getActiveFilter('category'),
            level: FilterComponent.getActiveFilter('level'),
            price: FilterComponent.getActiveFilter('price')
        };

        const filteredCourses = DataManager.filterCourses(filters);
        CourseRenderer.updateAllGrids(filteredCourses);
        NotificationSystem.show(`Found ${filteredCourses.length} courses${searchTerm ? ` for "${searchTerm}"` : ''}`);
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ===== FILTER COMPONENT =====
const FilterComponent = {
    activeFilters: {
        age: 'all',
        category: 'all',
        level: 'all',
        price: 'all',
        timeSlot: 'all'
    },

    init() {
        this.bindEvents();
    },

    bindEvents() {
        const filterElements = ['ageFilter', 'categoryFilter', 'levelFilter', 'priceFilter'];
        
        filterElements.forEach(filterId => {
            const element = document.getElementById(filterId);
            element?.addEventListener('change', () => this.handleFilterChange(filterId));
        });
    },

    handleFilterChange(filterId) {
        const element = document.getElementById(filterId);
        const filterType = filterId.replace('Filter', '');
        const filterValue = element?.value || 'all';
        
        this.activeFilters[filterType] = filterValue;
        this.applyFilters();
    },

    applyFilters() {
        const searchTerm = document.getElementById('searchInput')?.value.trim() || '';
        
        const filters = {
            search: searchTerm,
            ...this.activeFilters
        };

        const filteredCourses = DataManager.filterCourses(filters);
        CourseRenderer.updateAllGrids(filteredCourses);
        
        const activeFilterCount = Object.values(this.activeFilters).filter(f => f !== 'all').length;
        NotificationSystem.show(`Showing ${filteredCourses.length} courses${activeFilterCount ? ' (filtered)' : ''}`);
    },

    getActiveFilter(type) {
        return this.activeFilters[type] || 'all';
    },

    resetFilters() {
        Object.keys(this.activeFilters).forEach(key => {
            this.activeFilters[key] = 'all';
        });
        
        // Reset DOM elements
        ['ageFilter', 'categoryFilter', 'levelFilter', 'priceFilter'].forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) element.value = '';
        });

        this.applyFilters();
    }
};

// ===== COURSE RENDERER COMPONENT =====
const CourseRenderer = {
    init() {
        this.renderAllSections();
    },

    renderAllSections() {
        this.renderAgeGrid();
        this.renderCourseGrids();
        this.renderTeachers();
        this.renderCategories();
        this.renderTimeOptions();
    },

    renderAgeGrid() {
        const ageGrid = document.getElementById('ageGrid');
        if (!ageGrid) return;

        const ageRanges = [
            ['1-2', 'Years'], ['2-3', 'Years'], ['3-4', 'Years'], ['4-5', 'Years'],
            ['5-6', 'Years'], ['6-7', 'Years'], ['7-8', 'Years'], ['8-9', 'Years'],
            ['9-10', 'Years'], ['10-11', 'Years'], ['11-12', 'Years'], ['12-13', 'Years'],
            ['13-14', 'Years'], ['14-15', 'Years'], ['15-16', 'Years'], ['16-17', 'Years'],
            ['17-18', 'Years'], ['18-19', 'Years']
        ];

        ageGrid.innerHTML = ageRanges.map(([range, label]) => `
            <div class="age-card" data-age="${range}" tabindex="0" role="button" aria-label="Select age range ${range}">
                <div class="age-range">${range}</div>
                <div class="age-label">${label}</div>
            </div>
        `).join('');
    },

    renderCourseGrids() {
        this.populateCourseGrid('newCoursesGrid', DataManager.courseData.new);
        this.populateCourseGrid('featuredCoursesGrid', DataManager.courseData.featured);
        this.populateCourseGrid('teacherCoursesGrid', DataManager.courseData.featured.slice(0, 3));
        this.populateCourseGrid('categoryCoursesGrid', DataManager.courseData.new.slice(0, 3));
        this.populateCourseGrid('webinarCoursesGrid', DataManager.courseData.featured.slice(0, 3));
    },

    populateCourseGrid(gridId, courses) {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        grid.innerHTML = courses.map(course => this.createCourseCard(course)).join('');
    },

    updateAllGrids(filteredCourses) {
        const grids = ['newCoursesGrid', 'featuredCoursesGrid', 'teacherCoursesGrid', 'categoryCoursesGrid', 'webinarCoursesGrid'];
        
        grids.forEach(gridId => {
            const grid = document.getElementById(gridId);
            if (grid) {
                grid.innerHTML = filteredCourses.map(course => this.createCourseCard(course)).join('');
            }
        });

        // Update horizontal courses
        const horizontalCourses = document.getElementById('timeFilteredCourses');
        if (horizontalCourses) {
            horizontalCourses.innerHTML = filteredCourses.slice(0, 3).map(course => this.createHorizontalCourseCard(course)).join('');
        }
    },

    createCourseCard(course) {
        const badgeHtml = course.badge ? `<div class="selling-badge">${course.badge}</div>` : '';
        const authorHtml = course.author ? `
            <div class="course-author">
                <img src="${course.authorAvatar}" alt="${course.author}" class="author-avatar" loading="lazy" />
                <span class="author-name">By: ${course.author}</span>
            </div>
        ` : '';

        return `
            <div class="course-card loading" data-category="${course.category}" data-price="${course.price}" data-level="${course.tags[1]?.toLowerCase()}" data-course-id="${course.id}" tabindex="0" role="button">
                ${badgeHtml}
                <div class="course-rating">⭐ ${course.rating} | ${course.learners} learners</div>
                <img src="${course.image}" alt="${course.title}" class="course-image" loading="lazy" />
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="course-tag tag-${tag.toLowerCase().replace(' ', '-')}">${tag}</span>`).join('')}
                </div>
                <h3 class="course-title">${course.title}</h3>
                ${course.description ? `<p class="course-description">${course.description}</p>` : ''}
                ${authorHtml}
                <div class="course-footer">
                    <div class="course-info">
                        <div class="info-item">
                            <img src="../assets/images/img_person.svg" alt="Age" width="14" height="14" />
                            <span>${course.age}</span>
                        </div>
                        <div class="info-divider"></div>
                        <div class="info-item">
                            <img src="../assets/images/img_clock.svg" alt="Duration" width="14" height="14" />
                            <span>${course.duration}</span>
                        </div>
                        <div class="info-divider"></div>
                        <div class="info-item">
                            <img src="../assets/images/img_rupee.svg" alt="Price" width="14" height="14" />
                            <span>${course.price}</span>
                        </div>
                    </div>
                    <button class="cart-btn" data-course-id="${course.id}" aria-label="Add course to cart">
                        <img src="../assets/images/img_shopping_cart.svg" alt="Add to cart" width="16" height="16" />
                    </button>
                </div>
            </div>
        `;
    },

    createHorizontalCourseCard(course) {
        const badgeHtml = course.badge ? `<div class="selling-badge">${course.badge}</div>` : '';
        
        return `
            <div class="course-card-horizontal loading" data-course-id="${course.id}">
                ${badgeHtml}
                <img src="${course.image}" alt="${course.title}" class="course-image-horizontal" loading="lazy" />
                <div class="course-content-horizontal">
                    <div class="course-tags-horizontal">
                        ${course.tags.map(tag => `<span class="course-tag tag-${tag.toLowerCase().replace(' ', '-')}">${tag}</span>`).join('')}
                        <span class="course-tag tag-time">${course.timeSlot} class</span>
                    </div>
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-meta">
                        <div class="course-author">
                            <img src="${course.authorAvatar}" alt="${course.author}" class="author-avatar" loading="lazy" />
                            <span class="author-name">By: ${course.author}</span>
                        </div>
                        <div class="course-rating">⭐ ${course.rating} | ${course.learners} learners</div>
                    </div>
                    <div class="course-actions">
                        <div class="course-info">
                            <button class="info-btn" type="button">
                                <img src="../assets/images/img_person.svg" alt="Age" width="14" height="14" />
                                <span>${course.age}</span>
                            </button>
                            <button class="info-btn" type="button">
                                <img src="../assets/images/img_clock.svg" alt="Duration" width="14" height="14" />
                                <span>${course.duration}</span>
                            </button>
                            <button class="info-btn" type="button">
                                <img src="../assets/images/img_rupee.svg" alt="Price" width="14" height="14" />
                                <span>${course.price}</span>
                            </button>
                        </div>
                        <button class="cart-btn" data-course-id="${course.id}" aria-label="Add course to cart">
                            <img src="../assets/images/img_shopping_cart.svg" alt="Add to cart" width="16" height="16" />
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderTeachers() {
        const teachersGrid = document.getElementById('teachersGrid');
        if (!teachersGrid) return;

        teachersGrid.innerHTML = DataManager.teacherData.map(teacher => `
            <div class="teacher-card loading" tabindex="0" role="button" aria-label="View ${teacher.name}'s profile">
                <img src="${teacher.avatar}" alt="${teacher.name}" class="teacher-avatar" loading="lazy" />
                <h3 class="teacher-name">${teacher.name}</h3>
                <div class="teacher-credentials">${teacher.credentials}</div>
                <div class="teacher-credentials">${teacher.students}</div>
                <span class="teacher-subject">${teacher.subject}</span>
            </div>
        `).join('');
    },

    renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        if (!categoriesGrid) return;

        categoriesGrid.innerHTML = DataManager.categoryData.map(category => `
            <div class="category-card category-${category.type} loading" data-category="${category.title.toLowerCase().replace(/\s/g, '-')}" tabindex="0" role="button" aria-label="Browse ${category.title} courses">
                <img src="${category.icon}" alt="${category.title}" class="category-icon" loading="lazy" />
                <h3 class="category-title ${category.type === 'other' ? 'category-title-dark' : ''}">${category.title}</h3>
            </div>
        `).join('');
    },

    renderTimeOptions() {
        const timeOptionsGrid = document.getElementById('timeOptions');
        if (!timeOptionsGrid) return;

        timeOptionsGrid.innerHTML = DataManager.timeOptions.map((option, index) => `
            <div class="time-option loading" data-time="${option.slot}" style="animation-delay: ${index * 0.1}s" tabindex="0" role="button" aria-label="Filter by ${option.title}">
                <div class="time-info">
                    <h3>${option.title}</h3>
                    <p>${option.time}</p>
                </div>
                <img src="${option.icon}" alt="${option.title}" class="time-icon" loading="lazy" />
            </div>
        `).join('');

        // Initialize horizontal courses
        const horizontalCourses = document.getElementById('timeFilteredCourses');
        if (horizontalCourses) {
            horizontalCourses.innerHTML = DataManager.courseData.new.slice(0, 2).map(course => this.createHorizontalCourseCard(course)).join('');
        }
    }
};

// ===== INTERACTION HANDLER =====
const InteractionHandler = {
    cart: new Set(),

    init() {
        this.bindEvents();
    },

    bindEvents() {
        // Age selection
        document.addEventListener('click', (e) => {
            const ageCard = e.target.closest('.age-card');
            if (ageCard) {
                this.handleAgeSelection(ageCard);
            }
        });

        // Category selection
        document.addEventListener('click', (e) => {
            const categoryCard = e.target.closest('.category-card');
            if (categoryCard) {
                this.handleCategorySelection(categoryCard);
            }
        });

        // Time selection
        document.addEventListener('click', (e) => {
            const timeOption = e.target.closest('.time-option');
            if (timeOption) {
                this.handleTimeSelection(timeOption);
            }
        });

        // Cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cart-btn')) {
                e.stopPropagation();
                const btn = e.target.closest('.cart-btn');
                const courseId = btn.dataset.courseId;
                this.handleAddToCart(courseId, btn);
            }
        });

        // Course card clicks
        document.addEventListener('click', (e) => {
            const courseCard = e.target.closest('.course-card, .course-card-horizontal');
            if (courseCard && !e.target.closest('.cart-btn')) {
                this.handleCourseClick(courseCard);
            }
        });

        // Keyboard accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const focusedElement = document.activeElement;
                if (focusedElement.classList.contains('age-card') || 
                    focusedElement.classList.contains('category-card') || 
                    focusedElement.classList.contains('time-option') ||
                    focusedElement.classList.contains('course-card')) {
                    e.preventDefault();
                    focusedElement.click();
                }
            }
        });
    },

    handleAgeSelection(ageCard) {
        document.querySelectorAll('.age-card').forEach(card => card.classList.remove('active'));
        ageCard.classList.add('active');
        
        const age = ageCard.dataset.age;
        NotificationSystem.show(`Selected age range: ${age} years`);
        
        // Filter courses by age (could expand this logic)
        const filteredCourses = DataManager.getAllCourses().filter(course => {
            const courseAgeRange = course.age.match(/\d+/g);
            const selectedAgeRange = age.split('-').map(num => parseInt(num));
            return courseAgeRange && selectedAgeRange.some(selectedAge => 
                selectedAge >= parseInt(courseAgeRange[0]) && selectedAge <= parseInt(courseAgeRange[1] || courseAgeRange[0])
            );
        });
        
        CourseRenderer.updateAllGrids(filteredCourses);
    },

    handleCategorySelection(categoryCard) {
        document.querySelectorAll('.category-card').forEach(card => card.classList.remove('selected'));
        categoryCard.classList.add('selected');
        
        const category = categoryCard.dataset.category;
        const categoryName = categoryCard.querySelector('.category-title').textContent;
        NotificationSystem.show(`Browsing ${categoryName} courses`);
        
        // Filter courses by category
        const filteredCourses = DataManager.getAllCourses().filter(course => 
            course.category.toLowerCase().replace(/[^a-z]/g, '') === category.replace(/[^a-z]/g, '')
        );
        
        CourseRenderer.updateAllGrids(filteredCourses);
    },

    handleTimeSelection(timeOption) {
        document.querySelectorAll('.time-option').forEach(option => option.classList.remove('selected'));
        timeOption.classList.add('selected');
        
        const timeSlot = timeOption.dataset.time;
        const timeTitle = timeOption.querySelector('h3').textContent;
        NotificationSystem.show(`Showing ${timeTitle.toLowerCase()}`);
        
        // Filter courses by time slot
        const filteredCourses = DataManager.getAllCourses().filter(course => 
            course.timeSlot === timeSlot
        );
        
        CourseRenderer.updateAllGrids(filteredCourses);
    },

    handleAddToCart(courseId, button) {
        const course = DataManager.getCourseById(courseId);
        if (!course) return;

        if (this.cart.has(courseId)) {
            NotificationSystem.show('Course already in cart!', 'warning');
            return;
        }

        this.cart.add(courseId);
        
        // Visual feedback
        button.style.transform = 'scale(0.9)';
        button.style.background = 'linear-gradient(141deg, #56029c 0%, #f600ab 100%)';
        
        setTimeout(() => {
            button.style.transform = '';
            button.style.background = '';
        }, 200);

        NotificationSystem.show(`${course.title} added to cart!`, 'success');
        this.updateCartCount();
    },

    handleCourseClick(courseCard) {
        const courseId = courseCard.dataset.courseId;
        const course = DataManager.getCourseById(courseId);
        
        if (course) {
            NotificationSystem.show(`Viewing course: ${course.title}`, 'info');
            // Could implement modal or navigation to course detail page
            this.animateCourseCardClick(courseCard);
        }
    },

    animateCourseCardClick(card) {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    },

    updateCartCount() {
        const cartCount = this.cart.size;
        // Update cart badge in header if exists
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cartCount;
        }
        
        // Store in localStorage
        localStorage.setItem('cartCount', cartCount);
        localStorage.setItem('cartItems', JSON.stringify([...this.cart]));
    },

    getCartItems() {
        return [...this.cart].map(id => DataManager.getCourseById(id)).filter(Boolean);
    }
};

// ===== VIEW CONTROLLER =====
const ViewController = {
    currentView: 'grid',

    init() {
        this.bindEvents();
    },

    bindEvents() {
        // View toggle buttons
        document.getElementById('gridViewBtn')?.addEventListener('click', () => this.setView('grid'));
        document.getElementById('listViewBtn')?.addEventListener('click', () => this.setView('list'));

        // Mobile menu
        document.getElementById('mobileMenuBtn')?.addEventListener('click', this.toggleMobileMenu);

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll);
        });
    },

    setView(view) {
        const gridViewBtn = document.getElementById('gridViewBtn');
        const listViewBtn = document.getElementById('listViewBtn');
        const courseGrids = document.querySelectorAll('.course-grid');

        if (view === 'grid') {
            gridViewBtn?.classList.add('active');
            listViewBtn?.classList.remove('active');
            courseGrids.forEach(grid => grid.classList.remove('list-view'));
            this.currentView = 'grid';
        } else {
            listViewBtn?.classList.add('active');
            gridViewBtn?.classList.remove('active');
            courseGrids.forEach(grid => grid.classList.add('list-view'));
            this.currentView = 'list';
        }

        NotificationSystem.show(`Switched to ${view} view`);
    },

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu?.classList.toggle('active');
        
        // Update hamburger icon
        const hamburger = document.querySelector('.hamburger');
        hamburger?.classList.toggle('active');
    },

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};

// ===== SCROLL EFFECTS MANAGER =====
const ScrollEffectsManager = {
    init() {
        this.bindScrollEvents();
        this.initializeIntersectionObserver();
    },

    bindScrollEvents() {
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', this.throttle(() => {
            const currentScrollY = window.scrollY;
            
            // Header background change
            if (currentScrollY > 100) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }

            // Parallax effect for hero images
            const heroImages = document.querySelectorAll('.hero-images img');
            heroImages.forEach(img => {
                const speed = 0.3;
                img.style.transform = `translateY(${currentScrollY * speed}px)`;
            });

            lastScrollY = currentScrollY;
        }, 16)); // 60fps
    },

    initializeIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Add staggered animation delay
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.loading').forEach(el => {
            observer.observe(el);
        });
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ===== NOTIFICATION SYSTEM =====
const NotificationSystem = {
    show(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${this.getBackgroundColor(type)};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            font-size: 14px;
            font-weight: 500;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });

        // Auto dismiss
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);

        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        });
    },

    getBackgroundColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
            warning: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
            error: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)',
            info: 'linear-gradient(135deg, #6f10cc 0%, #f600ab 100%)'
        };
        return colors[type] || colors.info;
    }
};

// ===== APPLICATION INITIALIZER =====
const EduKidsApp = {
    init() {
        // Initialize all components when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeComponents();
            this.loadSavedState();
            this.registerServiceWorker();
        });
    },

    initializeComponents() {
        try {
            CourseRenderer.init();
            SearchComponent.init();
            FilterComponent.init();
            InteractionHandler.init();
            ViewController.init();
            ScrollEffectsManager.init();
            
            NotificationSystem.show('EduKids Learning Platform ready!', 'success');
        } catch (error) {
            console.error('Failed to initialize components:', error);
            NotificationSystem.show('Some features may not work properly', 'error');
        }
    },

    loadSavedState() {
        // Restore cart from localStorage
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            try {
                const cartItems = JSON.parse(savedCartItems);
                cartItems.forEach(id => InteractionHandler.cart.add(id));
                InteractionHandler.updateCartCount();
            } catch (error) {
                console.error('Failed to restore cart:', error);
            }
        }
    },

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }
};

// ===== START APPLICATION =====
EduKidsApp.init();