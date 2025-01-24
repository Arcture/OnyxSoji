// GIF URLs
const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3c4bnY2aW1mODczYmdoNXNsdGFodTNlNmZpMHo4dTMxajhhZ3M4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jt5GkWXoLswrgP2Aws/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG00MmM5aXJmYTJxcmwxaXdnbzRyajY2Z2RocnQwM29ybWpqZ2hqbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKfpB6WZeKC1DiGrj8/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3c2MXRyNzI2bzJjbzBrdW10bmVhb2IybjU4OHVta3d5M2E5OHc3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"
];

const gifElement = document.getElementById("gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

// Change GIF every 2 seconds
let currentGifIndex = 0;
setInterval(() => {
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    gifElement.src = gifs[currentGifIndex];
}, 2000);

// Make "No" button move faster when hovered
noButton.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.transition = "transform 0.1s ease-in-out";
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});


// Redirect to another page when "Yes" button is clicked
yesButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Replace with your desired URL
});

