// Home Page JavaScript
});
    }
        });
            window.location.href = `bikes.html?${params.toString()}`;
            
            });
                ...(location && { location })
                endDate,
                startDate,
            const params = new URLSearchParams({
            // Redirect to bikes page with search parameters
            
            }
                return;
                alert('End date must be after start date');
            if (new Date(startDate) >= new Date(endDate)) {
            
            }
                return;
                alert('Please select rental dates');
            if (!startDate || !endDate) {
            
            const location = formData.get('location');
            const endDate = formData.get('end-date');
            const startDate = formData.get('start-date');
            const formData = new FormData(bookingForm);
            
            e.preventDefault();
        bookingForm.addEventListener('submit', (e) => {
    if (bookingForm) {
    // Handle form submission
    
    }
        });
            endDateInput.setAttribute('min', startDateInput.value);
        startDateInput.addEventListener('change', () => {
        // Set end date min to start date
        
        endDateInput.addEventListener('change', updateDuration);
        startDateInput.addEventListener('change', updateDuration);
    if (startDateInput && endDateInput) {
    
    };
        }
            durationValue.textContent = '0 days';
        } else {
            durationValue.textContent = `${days} day${days !== 1 ? 's' : ''}`;
            const days = VroomVroom.calculateDaysBetween(startDateInput.value, endDateInput.value);
        if (startDateInput.value && endDateInput.value) {
    const updateDuration = () => {
    // Calculate rental duration
    
    const bookingForm = document.querySelector('.booking-form');
    const durationValue = document.querySelector('.duration-value');
    const endDateInput = document.getElementById('end-date');
    const startDateInput = document.getElementById('start-date');
document.addEventListener('DOMContentLoaded', () => {


