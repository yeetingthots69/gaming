// Bikes Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const locationFilter = document.getElementById('location-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    // Filter and search functionality would go here
    // In a real implementation, this would filter the bike cards
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Filter bikes logic here
        });
    }
    
    // Handle filter changes
    [typeFilter, locationFilter, sortFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', () => {
                console.log('Filter changed:', filter.value);
                // Filter bikes logic here
            });
        }
    });
});

