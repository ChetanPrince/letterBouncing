const keywordElement = document.querySelector(".container h1");
const keyword = keywordElement.textContent;

keywordElement.innerHTML = keyword.split("").map(letter => `<span>${letter}</span>`).join("");

const letterSpans = keywordElement.querySelectorAll("span");

letterSpans.forEach((span) => {
    span.addEventListener("mouseover", () => {
        span.classList.add("change");
        setTimeout(()=>{
            span.classList.remove("change");

        }, 1000)
    });
});


// alternate option of not having setTimeout() method on elements
// letterSpans.forEach((span) => {
//     span.addEventListener("mouseout", () => {
//         span.classList.remove("change");
//     });
// });
