document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const arrow = document.getElementById('toggle-arrow');
    const mainContent = document.getElementById('main-content'); // Select main-content by id

    function toggleSidebar() {
        const isHidden = sidebar.classList.contains('hidden');
        console.log('Sidebar is hidden:', isHidden); // Debugging line

        if (isHidden) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('sidebar-visible');
            mainContent.classList.add('shifted'); // Shift content right
        } else {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('sidebar-visible');
            mainContent.classList.remove('shifted'); // Shift content back to original position
        }

        arrow.style.left = isHidden ? '250px' : '10px';
        arrow.style.transform = isHidden ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)';
    }

    arrow.addEventListener('click', toggleSidebar);

    // Initial setup to ensure correct arrow position and rotation
    const isSidebarHidden = sidebar.classList.contains('hidden');
    arrow.style.left = isSidebarHidden ? '10px' : '250px';
    arrow.style.transform = isSidebarHidden ? 'translateY(-50%) rotate(0deg)' : 'translateY(-50%) rotate(180deg)';
});
