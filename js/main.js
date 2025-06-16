// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    
    const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  } else {
    console.error('Nav toggle yoki mobile-nav elementi topilmadi!');
  }
});

// Testimonials slider
let currentTestimonialIndex = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  // Remove active class from all slides and dots
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  testimonialDots.forEach(dot => dot.classList.remove('active'));
  
  // Add active class to current slide and dot
  if (testimonialSlides[index]) {
    testimonialSlides[index].classList.add('active');
  }
  if (testimonialDots[index]) {
    testimonialDots[index].classList.add('active');
  }
}

function changeTestimonial(direction) {
  currentTestimonialIndex += direction;
  
  if (currentTestimonialIndex >= testimonialSlides.length) {
    currentTestimonialIndex = 0;
  } else if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = testimonialSlides.length - 1;
  }
  
  showTestimonial(currentTestimonialIndex);
}

function currentTestimonial(index) {
  currentTestimonialIndex = index - 1;
  showTestimonial(currentTestimonialIndex);
}

// Auto-advance testimonials
setInterval(() => {
  changeTestimonial(1);
}, 6000);

// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email || !data.service || !data.message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show success message (in a real app, you'd send this to a server)
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .stat-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});

// Portfolio item hover effects
document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const overlay = item.querySelector('.portfolio-overlay');
      if (overlay) {
        overlay.style.opacity = '1';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const overlay = item.querySelector('.portfolio-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
      }
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add loading states for buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const originalText = button.innerHTML;
      
      // Add subtle loading state for form submission
      if (button.type === 'submit') {
        button.innerHTML = 'Sending...';
        button.disabled = true;
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.disabled = false;
        }, 2000);
      }
    });
  });
});

// Parallax effect for hero shapes
document.addEventListener('DOMContentLoaded', () => {
  const heroShapes = document.querySelectorAll('.hero__shape');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    heroShapes.forEach((shape, index) => {
      const speed = 0.2 + (index * 0.1);
      shape.style.transform = `translateY(${parallax * speed}px)`;
    });
  });
});
