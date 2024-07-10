const usernamesAndPasswords = [
    { username: "aurelie_znaty", password: "my_love" },
    { username: "aharon_beer", password: "sweetheart" }
];

const languages = [
    "I Love You", "Je t'aime", "Te quiero", "Ich liebe dich", "Ti amo", "Eu te amo", 
    "愛してる", "사랑해", "Я тебя люблю", "Ik hou van jou", "Te iubesc", "Jag älskar dig", 
    "Seni seviyorum", "Jeg elsker deg", "Jeg elsker deg", "Aloha wau ia 'oe", 
    "Saya cinta padamu", "ฉันรักคุณ", "Saya sayang awak", "Ek het jou lief", 
    "Kuv hlub koj", "Ngiyakuthanda", "Mahal kita", "Salanghae", "Ndimakukonda", 
    "Volim te", "Mwen renmen ou", "Ik zie je graag", "Ti voglio bene", 
    "J'aime vous", "Ich mag dich", "Minä rakastan sinua", "Jag tycker om dig", 
    "Eu gosto de você", "Kocham cię", "Volim te", "Jeg er glad i deg", 
    "Ich hab' dich lieb", "Jeg elsker dig", "Jeg elsker deg", "Eg elskar deg", 
    "Eg elskar deg", "Jeg elsker dig", "Jeg elsker deg", "Jeg elsker deg", 
    "Jeg elsker deg", "Jeg elsker deg", "Jeg elsker deg", "Jeg elsker deg"
];
const colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
let currentLanguageIndex = 0;

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const validUser = usernamesAndPasswords.some(user => 
        user.username === enteredUsername && user.password === enteredPassword
    );
    if (validUser) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        startSequence();
    } else {
        alert('Incorrect username or password!');
    }
});

document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

function startSequence() {
    document.getElementById('background-music').play();
    setTimeout(() => {
        setInterval(displayNextLanguage, 900);
    }, 3000);  // Initial delay
    generateFireworks();
    generateHearts();
}

function displayNextLanguage() {
    const messageElement = document.getElementById('i-love-you-message');
    messageElement.textContent = languages[currentLanguageIndex];
    messageElement.style.color = colors[Math.floor(Math.random() * colors.length)];
    messageElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    messageElement.style.display = 'block';
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    if (currentLanguageIndex === 0) {
        setTimeout(displayFinalMessage, 900);
    }
}

function displayFinalMessage() {
    document.getElementById('i-love-you-message').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}

function generateFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworksContainer.appendChild(firework);
        setTimeout(() => {
            fireworksContainer.removeChild(firework);
        }, 1000);
    }, 500);
}

function generateHearts() {
    const heartsContainer = document.querySelector('.hearts');
    setInterval(() => {
        for (let i = 0; i < 5; i++) { // Add more hearts
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 90}%`; // Spread hearts more evenly
            heart.style.top = `${Math.random() * 90}%`;  // Spread hearts more evenly
            heartsContainer.appendChild(heart);
            setTimeout(() => {
                heartsContainer.removeChild(heart);
            }, 1000);
        }
    }, 500);
}