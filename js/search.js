function searchServices() {

    let searchQuery = document.getElementById('service-search').value.toLowerCase();

    let serviceCards = document.querySelectorAll('.service-card');

    
    serviceCards.forEach(function(card) {
        let title = card.querySelector('h2').textContent.toLowerCase();
        let description = card.querySelector('p').textContent.toLowerCase();

        
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
