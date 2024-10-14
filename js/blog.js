document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");

    const reviews_0 = document.getElementById("reviews-0");
    const reviews_1 = document.getElementById("reviews-1");
    const reviews_2 = document.getElementById("reviews-2"); 
    const reviews_3 = document.getElementById("reviews-3");

    const hideAllReviews = () => {
        reviews_0.style.display = "none";
        reviews_1.style.display = "none";
        reviews_2.style.display = "none"; 
        reviews_3.style.display = "none";
    };

    btn1.addEventListener("click", (event) => {
        event.preventDefault();
        hideAllReviews();
        reviews_0.style.display = "block";
    });

    btn2.addEventListener("click", (event) => {
        event.preventDefault();
        hideAllReviews();
        reviews_1.style.display = "block";
    });

    btn3.addEventListener("click", (event) => {
        event.preventDefault();
        hideAllReviews();
        reviews_2.style.display = "block";
    });

    btn4.addEventListener("click", (event) => {
        event.preventDefault();
        hideAllReviews();
        reviews_3.style.display = "block";
    });
});

const scroll_main = document.querySelector('#body');
scroll_main.addEventListener("DOMContentLoaded",function(){
    window.scrollTo(0,4800);
});