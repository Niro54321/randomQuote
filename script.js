const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. – Steve Jobs",
    "Have the courage to follow your heart and intuition. They somehow know what you truly want to become. – Steve Jobs",
    "Quality is more important than quantity. One home run is much better than two doubles. – Steve Jobs"
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});
