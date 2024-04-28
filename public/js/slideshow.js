function toggleInfo() {
    const i1 = document.querySelector('.i1');
    const i2 = document.querySelector('.i2');

    // Check if display property is explicitly set to 'block' or 'none'
    let currentlyDisplayed = getComputedStyle(i1).display === 'block' ? i1 : i2;
    let nextToDisplay = currentlyDisplayed === i1 ? i2 : i1;

    currentlyDisplayed.style.display = 'none';
    nextToDisplay.style.animation = 'fadeInOut 1s ease-in-out forwards';
    nextToDisplay.style.display = 'block';
}

// Call toggleInfo every 5 seconds
setInterval(toggleInfo, 5000);


