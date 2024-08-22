document.addEventListener('DOMContentLoaded', () => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // entry.target.classList.add('translate_top');
                entry.target.classList.add('visible');
                entry.target.classList.remove('invisible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('invisible');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe each window element
    document.querySelectorAll('.clickable, .modal-content').forEach(window => {
        observer.observe(window);
    });
});

// Get all elements with the class "clickable"
const clickableElements = document.querySelectorAll('.clickable');

// Add a click event listener to each clickable element
clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Get all elements with the class "close"
const closeButtons = document.querySelectorAll('.close');

// Add a click event listener to each close button
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = "none";
    });
});

// Add a click event listener to the window to close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

document.addEventListener('wheel', function(event) {
    if (event.shiftKey) {
        // Prevent the default vertical scrolling behavior
        event.preventDefault();

        // Find the scrollable container under the mouse pointer
        const container = document.querySelector('.scrollable-container');

        // Scroll the container horizontally by the delta of the mouse wheel
        container.scrollLeft += event.deltaY;
    }
});
