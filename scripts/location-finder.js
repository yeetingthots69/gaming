// Location Finder JavaScript
});
    });
        });
            });
                }
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                if (region === 'all' || cardRegion === region) {
                
                const cardRegion = card.getAttribute('data-region');
            locationCards.forEach(card => {
            // Filter cards
            
            btn.classList.add('active');
            filterBtns.forEach(b => b.classList.remove('active'));
            // Update active button
            
            const region = btn.getAttribute('data-region');
        btn.addEventListener('click', () => {
    filterBtns.forEach(btn => {
    // Filter by region
    
    }
        });
            });
                }
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                if (locationName.includes(searchTerm) || locationAddress.includes(searchTerm)) {
                
                const locationAddress = card.querySelector('.location-address').textContent.toLowerCase();
                const locationName = card.querySelector('.location-name').textContent.toLowerCase();
            locationCards.forEach(card => {
            
            const searchTerm = searchInput.value.toLowerCase();
        searchInput.addEventListener('input', () => {
    if (searchInput) {
    // Search functionality
    
    const locationCards = document.querySelectorAll('.location-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('location-search');
document.addEventListener('DOMContentLoaded', () => {


