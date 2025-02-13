const reasons = [
    "Your pretty face.",
    "Your eyes.",
    "Your voice.",
    "Your intelligence.",
    "Your sense of humor.",
    "Your kindness.",
    "Your creativity.",
    "Your smell.",
    "The way you talk",
    "Your amazing gifts.",
    "Your smooth skin.",
    "You make me want to think about our future",
    "You make me want to be a better person.",
    "The way you make me feel calm.",
    "The way you make me have a good night sleep.",
    "The way you make me feel loved.",
    "Your patience.",
    "Your understanding.",
    "The way you are responsible.",
    "You bring me peace when I’m stressed.",
    "You make me feel at home, no matter where we are.",
    "Warm feelings when we hug.",
    "The way your hair looks, even when it’s messy.",
    "The way you get competitive in games.",
    "The fact that you know the best places to eat.",
    "The foods you cook.",
    "Your singing.",
    "Your dancing.",
    "Your honesty.",
    "Your loyalty.",
    "Your excited face.",
    "Your laugh.",
    "Your ticklishness.",
    "Muum",
    "You make me feel alive.",
    "You make me feel like I can do anything.",
    "The way we just sleep together for a whole day.",
    "You taught me a lot of things.",
    "Your scientific mindset.",
    "Your love for animals.",
    "The way you talk about our future.",
    "The way you read so fast.",
    "The way you can fall asleep so easily.",
    "The way you get annoyed by grammatical mistakes.",
    "The way you touch me.",
    "The way you are so aesthetic.",
    "The way you dress.",
    "The way you care for your family.",
    "The way you try for our relationship.",
    "Your rationality.",
    "The way you show your emotions.",
    "The trust you have in me.",
    "Your everything.",
    "YOU"
    // Add more reasons as needed
];

let currentReasonIndex = 0;

const reasonElement = document.getElementById('reason').getElementsByTagName('p')[0];
const reasonHeaderElement = document.getElementById('reason-header');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateReason() {
    reasonElement.textContent = reasons[currentReasonIndex];
    reasonHeaderElement.textContent = `Reason ${currentReasonIndex + 1}`; // Remove the colon
    updateArrows();
}

function updateArrows() {
    leftArrow.classList.toggle('disabled', currentReasonIndex === 0);
    rightArrow.classList.toggle('disabled', currentReasonIndex === reasons.length - 1);
}

// Initialize with the first reason and arrows
updateReason();

// Add swipe functionality using Hammer.js
const container = document.querySelector('.container');
const hammer = new Hammer(container);

hammer.on('swipeleft', () => {
    if (currentReasonIndex < reasons.length - 1) {
        reasonElement.style.transition = 'transform 0.5s ease';
        reasonElement.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            currentReasonIndex++;
            updateReason();
            reasonElement.style.transition = 'none';
            reasonElement.style.transform = 'translateX(100%)';
            setTimeout(() => {
                reasonElement.style.transition = 'transform 0.5s ease';
                reasonElement.style.transform = 'translateX(0)';
            }, 50);
        }, 500); // Match the transition duration
    }
});

hammer.on('swiperight', () => {
    if (currentReasonIndex > 0) {
        reasonElement.style.transition = 'transform 0.5s ease';
        reasonElement.style.transform = 'translateX(100%)';
        setTimeout(() => {
            currentReasonIndex--;
            updateReason();
            reasonElement.style.transition = 'none';
            reasonElement.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                reasonElement.style.transition = 'transform 0.5s ease';
                reasonElement.style.transform = 'translateX(0)';
            }, 50);
        }, 500); // Match the transition duration
    }
});

// Add click functionality to arrows
leftArrow.addEventListener('click', () => {
    if (currentReasonIndex > 0) {
        currentReasonIndex--;
        updateReason();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentReasonIndex < reasons.length - 1) {
        currentReasonIndex++;
        updateReason();
    }
});