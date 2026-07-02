// Countdown Timer
function updateCountdown() {
    // Set the target date - Update this to your reunion date
    const targetDate = new Date('July 9, 2026 15:00:00').getTime();
    
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        
        // Stop countdown if date has passed
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            
            const countdownSection = document.querySelector('.countdown-section h2');
            if (countdownSection) {
                countdownSection.innerText = 'The Reunion is Here!';
            }
        }
    }, 1000);
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Form Submission Handler
function setupFormHandlers() {
    // RSVP Form
    const rsvpForm = document.querySelector('#rsvp-form .form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit('RSVP', {
                name: document.getElementById('rsvp-name').value,
                email: document.getElementById('rsvp-email').value,
                guests: document.getElementById('rsvp-count').value,
                dietary: document.getElementById('rsvp-dietary').value,
                message: document.getElementById('rsvp-message').value
            });
            rsvpForm.reset();
            closeModal('rsvp-form');
        });
    }

    // Potluck Form
    const potluckForm = document.querySelector('#potluck-form .form');
    if (potluckForm) {
        potluckForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit('Potluck Sign-Up', {
                name: document.getElementById('potluck-name').value,
                dish: document.getElementById('potluck-dish').value,
                servings: document.getElementById('potluck-servings').value,
                notes: document.getElementById('potluck-notes').value
            });
            potluckForm.reset();
            closeModal('potluck-form');
        });
    }

    // Activities Form
    const activitiesForm = document.querySelector('#activities-form .form');
    if (activitiesForm) {
        activitiesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit('Activities Sign-Up', {
                name: document.getElementById('activities-name').value,
                activityType: document.getElementById('activities-type').value,
                notes: document.getElementById('activities-notes').value
            });
            activitiesForm.reset();
            closeModal('activities-form');
        });
    }

    // Photo Upload Form
    const photoForm = document.getElementById('photo-upload-form');
    if (photoForm) {
        photoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const files = document.getElementById('photo-files').files;
            const fileList = Array.from(files).map(f => f.name).join(', ');
            
            handleFormSubmit('Photo Upload', {
                name: document.getElementById('photo-name').value,
                email: document.getElementById('photo-email').value,
                photos: fileList || 'No files selected',
                caption: document.getElementById('photo-caption').value
            });
            photoForm.reset();
            closeModal('photo-form');
        });
    }
}

// Generic form submission handler
function handleFormSubmit(formType, data) {
    // Display success message
    showNotification(`${formType} received! Thank you for submitting.`);
    
    // Log the data (in a real application, you would send this to a server)
    console.log(`${formType} Form Submission:`, data);
    
    // Here you would typically send the data to your backend
    // Example: fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(data) })
    
    // Store in localStorage for demonstration
    const submissions = JSON.parse(localStorage.getItem('reunionSubmissions') || '{}');
    if (!submissions[formType]) {
        submissions[formType] = [];
    }
    submissions[formType].push({
        ...data,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('reunionSubmissions', JSON.stringify(submissions));
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6B8E23 0%, #9ACD32 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInNotification 0.3s ease;
        font-weight: bold;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInNotification {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutNotification {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add smooth scroll behavior for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                if (targetId.includes('-form')) {
                    openModal(targetId);
                } else {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Photo upload preview
function setupPhotoPreview() {
    const photoInput = document.getElementById('photo-files');
    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const files = e.target.files;
            const fileCount = files.length;
            
            if (fileCount > 0) {
                let totalSize = 0;
                for (let file of files) {
                    totalSize += file.size;
                }
                
                const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
                
                // Show file info
                let fileInfo = `Selected ${fileCount} file(s) (${sizeMB} MB total)`;
                const existingInfo = photoInput.parentElement.querySelector('.file-info');
                
                if (existingInfo) {
                    existingInfo.remove();
                }
                
                const info = document.createElement('p');
                info.className = 'file-info';
                info.textContent = fileInfo;
                info.style.cssText = `
                    color: #6B8E23;
                    font-size: 0.9rem;
                    margin-top: 8px;
                    font-weight: bold;
                `;
                photoInput.parentElement.appendChild(info);
            }
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setupFormHandlers();
    setupSmoothScroll();
    setupPhotoPreview();
    addNotificationStyles();
    
    console.log('Smith Family Reunion Website Ready!');
});

// Export functions for external use
window.openModal = openModal;
window.closeModal = closeModal;
