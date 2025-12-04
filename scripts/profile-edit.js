// Profile Edit JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('edit-profile-form');
    const photoUpload = document.getElementById('photo-upload');

    // Handle photo upload
    if (photoUpload) {
        photoUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    // Update avatar preview
                    console.log('Photo uploaded:', file.name);
                    alert('Photo uploaded successfully!');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Handle form submission
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate form
            const requiredFields = editForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                alert('Profile updated successfully!');
                window.location.href = 'profile.html';
            } else {
                alert('Please fill in all required fields');
            }
        });
    }

    // Toggle switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', () => {
            console.log('Preference updated:', toggle.checked);
        });
    });
});

