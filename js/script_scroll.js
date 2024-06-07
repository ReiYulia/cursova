const scroll_main = document.querySelector('#body');
scroll_main.addEventListener("DOMContentLoaded",function(){
    window.scrollTo(0,4800);
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const anchors = document.querySelectorAll('a[href*="#"]');
    console.log("Anchors found: ", anchors.length);
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Anchor clicked: ", anchor);
            const blockId = anchor.getAttribute('href');
            const blockElement = document.querySelector(blockId);
            if (blockElement) {
                console.log("Element to scroll to: ", blockElement);
                blockElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                console.warn(`Element with id ${blockId} not found.`);
            }
        });
    });
});
