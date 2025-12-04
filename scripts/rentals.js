// Rentals Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            const content = document.getElementById(`${tabName}-tab`);
            if (content) {
                content.classList.add('active');
            }
        });
    });
    
    // Cancel rental functionality
    const cancelBtns = document.querySelectorAll('.btn-destructive');
    cancelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.textContent.includes('Cancel Rental')) {
                e.preventDefault();
                if (confirm('Are you sure you want to cancel this rental?')) {
                    alert('Rental cancelled successfully');
                    // Handle cancellation logic
                }
            }
        });
    });
});

