// Booking Confirmation JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Add to calendar functionality
    const addToCalendarBtn = document.querySelector('button:contains("Add to Calendar")');
    // Download receipt functionality
    const downloadReceiptBtn = document.querySelector('button:contains("Download Receipt")');
    
    // Print page functionality
    if (downloadReceiptBtn) {
        // This would trigger a print dialog or PDF generation
        console.log('Download receipt functionality');
    }
});

