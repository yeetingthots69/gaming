// Rental Details JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Quick action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnText = btn.textContent.trim();
            
            if (btnText.includes('Contact Support')) {
                alert('Opening support chat...');
            } else if (btnText.includes('Get Directions')) {
                alert('Opening maps...');
            } else if (btnText.includes('Report Issue')) {
                alert('Opening issue report form...');
            } else if (btnText.includes('Cancel Rental')) {
                if (confirm('Are you sure you want to cancel this rental? This action cannot be undone.')) {
                    alert('Rental cancelled successfully');
                }
            }
        });
    });
});

