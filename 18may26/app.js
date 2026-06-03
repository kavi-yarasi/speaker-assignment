function showTheModal() {
    const overlay = document.getElementById('modalOverlay');
    const panel = document.getElementById('modalPanel');

    overlay.classList.add('active');
    panel.classList.add('active');
}

function closeTheModal() {
    const overlay = document.getElementById('modalOverlay');
    const panel = document.getElementById('modalPanel');

    overlay.classList.remove('active');
    panel.classList.remove('active');
}

// Close modal when clicking the overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modalOverlay');
    overlay.addEventListener('click', closeTheModal);
});