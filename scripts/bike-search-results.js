document.addEventListener('DOMContentLoaded', () => {
    // Remove filter tags
    const removeFilterBtns = document.querySelectorAll('.remove-filter');
    removeFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        });
    });
    
    // Clear all filters
    const clearAllBtn = document.querySelector('.active-filters .btn-ghost');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-tag').forEach(tag => tag.remove());
        });
    }
});

