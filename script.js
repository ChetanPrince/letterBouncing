const keywordElement = document.querySelector(".container h1");
const keyword = keywordElement.textContent;

// Wrap each letter in a span
keywordElement.innerHTML = keyword.split("").map(letter => `<span>${letter}</span>`).join("");

// Select all the span elements
const letterSpans = keywordElement.querySelectorAll("span");

// Add event listeners to each span
letterSpans.forEach((span) => {
    span.addEventListener("mouseover", () => {
        span.classList.add("change");
    });
});
