function toggleParagraph(button) {
    const secondParagraph = button.parentElement.querySelector(".second-paragraph");
    const chevronIcon = button.querySelector("i");

    if (secondParagraph.style.display === "none") {
        secondParagraph.style.display = "block";
        chevronIcon.style.transform = "rotate(180deg)"; 
    } else {
        secondParagraph.style.display = "none";
        chevronIcon.style.transform = "rotate(0deg)"; 
    }
}
