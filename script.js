

const countdown = () => {
    const saleDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = saleDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (diff < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").textContent = "Sale Ended!";
    }
};

const timer = setInterval(countdown, 1000);
// script.js

// Placeholder: Add JavaScript for dynamic features if needed in the future.
// For example, fetching testimonials from a server or adding animations.
console.log("Testimonials section loaded.");
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('email').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});
// Example JavaScript if you want to implement dynamic behaviors
// Here it's just to simulate a button click, which redirects to Instagram

document.querySelector('.cta-button').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com';  // Redirects to Instagram
});
// JavaScript for the Newsletter Subscription Form
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('newsletter-email').value;
    
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('newsletter-email').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});
