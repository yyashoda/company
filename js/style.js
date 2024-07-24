document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExample');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
});

// -----------------index--recent news 
document.addEventListener('DOMContentLoaded', function() {
    const newsData = [
        {
            title: "Mohan Bhagwat’s remarks......",
            image: "imgs/Mohan-Bhagwat.avif",
            description: "Mohan Bhagwat’s remarks on table as BJP works on rejig, review, and choosing next president",
            link: "https://indianexpress.com/article/political-pulse/mohan-bhagwats-remarks-on-table-as-bjp-works-on-rejig-review-and-choosing-next-president-9386659/"
        },
        {
            title: "Apple top brass on AI",
            image: "imgs/Apple-Top-BRass.webp",
            description: "Apple top brass on AI: ‘Integrated into the experience, intuitive, informed by your personal context’",
            link: "https://indianexpress.com/article/technology/artificial-intelligence/apple-ai-wwdc2024-user-experience-apple-intelligence-9386246/"
        },
        {
            title: "Nifty hits all-time high...",
            image: "imgs/Untitled-design-2024-06-12T102325.622.avif",
            description: "Nifty hits all-time high after reclaiming 22,400 levels, Sensex nears 77,000 mark",
            link: "https://indianexpress.com/article/business/market/nse-nifty-50-hits-all-time-high-sensex-9387149/"
        }
    ];

    const newsGallery = document.getElementById('recentNews');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'col-md-6 col-lg-4';
        newsItem.innerHTML = `
            <div class="card">
                <img src="${news.image}" class="card-img-top" alt="${news.title}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                    <a href="${news.link}" class="btn btn-primary">Read more</a>
                </div>
            </div>
        `;
        newsGallery.appendChild(newsItem);
    });
});
// --------------------------about---------------------------//

document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var dynamicContentSection = document.querySelector('.dynamic-content-section');
    dynamicContentSection.classList.toggle('d-none');
    if (!dynamicContentSection.classList.contains('d-none')) {
        this.textContent = 'Show Less';
    } else {
        this.textContent = 'Learn More';
    }
});



// -------------------gallary---------------------//
document.addEventListener('DOMContentLoaded', function() {
    const newsData = [
        {
            title: "Mohan Bhagwat’s remarks......",
            image: "imgs/Mohan-Bhagwat.avif",
            description: "Mohan Bhagwat’s remarks on table as BJP works on rejig, review, and choosing next president",
            link: "https://indianexpress.com/article/political-pulse/mohan-bhagwats-remarks-on-table-as-bjp-works-on-rejig-review-and-choosing-next-president-9386659/"
        },
        {
            title: "Apple top brass on AI",
            image: "imgs/Apple-Top-BRass.webp",
            description: "Apple top brass on AI: ‘Integrated into the experience, intuitive, informed by your personal context’",
            link: "https://indianexpress.com/article/technology/artificial-intelligence/apple-ai-wwdc2024-user-experience-apple-intelligence-9386246/"
        },
        {
            title: "Nifty hits all-time high...",
            image: "imgs/Untitled-design-2024-06-12T102325.622.avif",
            description: "Nifty hits all-time high after reclaiming 22,400 levels, Sensex nears 77,000 mark",
            link: "https://indianexpress.com/article/business/market/nse-nifty-50-hits-all-time-high-sensex-9387149/"
        },
        {
            title: "NEET UG Results Row 2024 Live Updates...",
            image: "imgs/neet-ug-2024-live-updates-1.webp",
            description: "NEET UG Results Row 2024 Live Updates: NTA four-member committee verdict likely today",
            link: "https://indianexpress.com/article/education/neet-ug-results-row-2024-live-updates-ntas-four-member-committee-verdict-likely-today-exam-cancel-retest-demand-nta-govt-supreme-court-9387162/"
            
        },
        {
            title: "Sri Lanka vs Nepal...",
            image: "imgs/SL-vs-NEP.webp",
            description: "Sri Lanka vs Nepal, T20 World Cup 2024 Highlights: Match called off due to inclement weather in Florida",
            link:"https://indianexpress.com/article/sports/cricket/sri-lanka-vs-nepal-live-score-t20-world-cup-2024-match-23-today-sl-vs-nep-latest-scorecard-updates-9386492/"            
        },
        {
            title: "Militants attack Army...",
            image: "imgs/cover_93d1f7.webp",
            description: "Militants attack Army outpost in J-K’s Doda, third terror strike in 3 days",
            link: "https://indianexpress.com/article/india/encounter-breaks-out-in-jammu-and-kashmirs-doda-between-terrorists-security-forces-9386935/"
            
        }
    ];

    const newsGallery = document.getElementById('newsGallery');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'col-md-6 col-lg-4';
        newsItem.innerHTML = `
            <div class="card">
                <img src="${news.image}" class="card-img-top" alt="${news.title}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                    <a href="${news.link}" class="btn btn-primary">Read more</a>
                </div>
            </div>
        `;
        newsGallery.appendChild(newsItem);
    });
});



// ----------------------------contact--------------------------//

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // First name validation
    if (firstName === "") {
        isValid = false;
        document.getElementById('firstName').classList.add('is-invalid');
    } else {
        document.getElementById('firstName').classList.remove('is-invalid');
    }

    // Last name validation
    if (lastName === "") {
        isValid = false;
        document.getElementById('lastName').classList.add('is-invalid');
    } else {
        document.getElementById('lastName').classList.remove('is-invalid');
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/; // Simple pattern for 10-digit phone number
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phone').classList.add('is-invalid');
    } else {
        document.getElementById('phone').classList.remove('is-invalid');
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('email').classList.add('is-invalid');
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    // Message validation
    if (message === "") {
        isValid = false;
        document.getElementById('message').classList.add('is-invalid');
    } else {
        document.getElementById('message').classList.remove('is-invalid');
    }

    // If valid, submit the form (here we just show the success message)
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('contactForm').reset();
        }, 3000);
    }
});

document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
    document.querySelectorAll('.is-invalid').forEach(element => element.classList.remove('is-invalid'));
    document.getElementById('successMessage').style.display = 'none';
});
