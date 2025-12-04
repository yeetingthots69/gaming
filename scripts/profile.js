// Profile Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const profileTabs = document.querySelectorAll('.profile-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const editPersonalBtn = document.getElementById('edit-personal-btn');
    const cancelPersonalBtn = document.getElementById('cancel-personal-btn');
    const personalInfoForm = document.getElementById('personal-info-form');
    const personalActions = document.getElementById('personal-actions');
    const formInputs = personalInfoForm?.querySelectorAll('input');

    // Tab switching
    profileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            profileTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const content = document.getElementById(`${tabName}-tab`);
            if (content) {
                content.classList.add('active');
            }
        });
    });

    // Edit personal info
    if (editPersonalBtn) {
        editPersonalBtn.addEventListener('click', () => {
            formInputs?.forEach(input => {
                if (input.id !== 'email') { // Keep email disabled
                    input.disabled = false;
                }
            });
            personalActions?.classList.remove('hidden');
            editPersonalBtn.style.display = 'none';
        });
    }

    // Cancel edit
    if (cancelPersonalBtn) {
        cancelPersonalBtn.addEventListener('click', () => {
            formInputs?.forEach(input => input.disabled = true);
            personalActions?.classList.add('hidden');
            if (editPersonalBtn) editPersonalBtn.style.display = 'flex';
        });
    }

    // Save changes
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Profile updated successfully!');
            formInputs?.forEach(input => input.disabled = true);
            personalActions?.classList.add('hidden');
            if (editPersonalBtn) editPersonalBtn.style.display = 'flex';
        });
    }

    // Change password
    const changePasswordBtn = document.getElementById('change-password-btn');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            alert('Change password functionality would open a dialog here');
        });
    }

    // Upload license
    const uploadLicenseBtn = document.getElementById('upload-license-btn');
    if (uploadLicenseBtn) {
        uploadLicenseBtn.addEventListener('click', () => {
            alert('Upload license functionality would open a dialog here');
        });
    }
});

