 
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize smooth scrolling with Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'both',
    smoothTouch: true,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Navigation scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

 // Remove or modify this GSAP animation if it's hiding the button
gsap.from('.hero .content', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.5
});

// Replace with this simpler version if needed
gsap.from('.buttons', {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 0.5,
  ease: 'power2.out'
});

  // Image track animation
  const imageTrack = document.querySelector('.image-track');
  let direction = -1; // -1 for left, 1 for right
  
  function animateImageTrack() {
    const trackWidth = imageTrack.scrollWidth;
    const containerWidth = imageTrack.parentElement.clientWidth;
    const maxScroll = trackWidth - containerWidth;
    
    let currentScroll = imageTrack.scrollLeft;
    let targetScroll = currentScroll + (direction * 1);
    
    if (targetScroll >= maxScroll) {
      direction = -1;
      targetScroll = maxScroll;
    } else if (targetScroll <= 0) {
      direction = 1;
      targetScroll = 0;
    }
    
    imageTrack.scrollLeft = targetScroll;
    requestAnimationFrame(animateImageTrack);
  }
  
  // Only animate if there's overflow
  if (imageTrack.scrollWidth > imageTrack.parentElement.clientWidth) {
    animateImageTrack();
  }

  // Card animations
  gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'back.out(1)'
    });
  });

  // Promo card animations
  gsap.utils.toArray('.promo-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power2.out'
    });
  });

  // Contact form animation
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.charge-section',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Footer animation
  gsap.from('.site-footer', {
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.card, .image-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Add parallax effect to hero video
  gsap.to('.bg-video', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    ease: 'none'
  });
});
 
 
 document.addEventListener('DOMContentLoaded', function() {
            const validateBtn = document.querySelector('.btn-primary[type="button"]');
            const resultCard = document.getElementById('resultCard');
            
            if (validateBtn && resultCard) {
                validateBtn.addEventListener('click', function() {
                    resultCard.classList.add('show');
                    resultCard.scrollIntoView({ behavior: 'smooth' });
                });
            }
            
            // Scroll to sections
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });



       
 

