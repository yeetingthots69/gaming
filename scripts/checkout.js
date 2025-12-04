// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.option-checkbox');
    const peripheralsTotal = document.getElementById('peripherals-total');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    const checkoutForm = document.getElementById('checkout-form');
    
    const basePrice = 1000000;
    const insurance = 100000;
    const serviceFee = 50000;
    const taxRate = 0.1;
    
    // Calculate total price
    const updateTotals = () => {
        let peripheralsPrice = 0;
        const days = 5; // Should be calculated from dates
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                peripheralsPrice += parseInt(checkbox.value) * days;
            }
        });
        
        if (peripheralsTotal) {
            peripheralsTotal.querySelector('span:last-child').textContent = 
                VroomVroom.formatCurrency(peripheralsPrice);
        }
        
        const subtotalAmount = basePrice + peripheralsPrice + insurance + serviceFee;
        const taxAmount = subtotalAmount * taxRate;
        const totalAmount = subtotalAmount + taxAmount;
        
        if (subtotal) subtotal.textContent = VroomVroom.formatCurrency(subtotalAmount);
        if (tax) tax.textContent = VroomVroom.formatCurrency(taxAmount);
        if (total) total.textContent = VroomVroom.formatCurrency(totalAmount);
    };
    
    // Listen to checkbox changes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotals);
    });
    
    // Handle form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const termsCheckbox = document.getElementById('terms');
            if (!termsCheckbox.checked) {
                alert('Please agree to the terms and conditions');
                return;
            }
            
            // Redirect to confirmation page
            window.location.href = 'booking-confirmation.html';
        });
    }
    
    // Initialize totals
    updateTotals();
});

