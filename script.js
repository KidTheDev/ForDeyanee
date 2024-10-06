window.onload = function() {
    // The secret code
    const secretCode = "11pooks";
    
    // Ask the user to input the code
    let userCode = prompt("Please enter the code to access the site:");
    
    // Check if the entered code matches the secret code
    if (userCode === secretCode) {
        // If the code matches, show the content
        document.getElementById("main-content").style.display = "block";
        startSlideshow();
        startCountdown();
    } else {
        // If the code is wrong, alert the user and keep the content hidden
        alert("Incorrect code. Please try again.");
        document.body.innerHTML = ""; // Hide the entire body content if code is incorrect
    }
};

// Infinite text and counter functionality
let lineCount = 0;

function addLines() {
    const repeatedText = document.getElementById("repeated-text");
    for (let i = 0; i < 10; i++) {  // Adds 10 lines at a time for performance
        let newLine = document.createElement("p");
        newLine.innerHTML = "I 💗 Deyanee";
        repeatedText.appendChild(newLine);
        lineCount++;
    }
    document.getElementById("counter").innerHTML = `I love you ${lineCount} times`;
}

setInterval(addLines, 100);

// Slideshow functionality
let slideIndex = 0;
function startSlideshow() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(startSlideshow, 5000); // Change image every 5 seconds
}

// Countdown timer
function startCountdown() {
    const targetDate = new Date("October 12, 2024 19:00:00 CST").getTime();
    const countdownElement = document.getElementById("countdown-timer");
    
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "It's time! 💖";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until October 12th!`;
        }
    }, 1000);
}
