document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const arrow = document.getElementById('toggle-arrow');
    const mainContent = document.querySelector('.main-content, .content'); // Updated to select either class

    function toggleSidebar() {
        const isHidden = sidebar.classList.contains('hidden');

        if (isHidden) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('sidebar-visible');
            mainContent.style.marginLeft = '250px';
        } else {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('sidebar-visible');
            mainContent.style.marginLeft = '0';
        }

        arrow.style.left = isHidden ? '250px' : '10px';
        arrow.style.transform = isHidden ? 'translateY(-50%) rotate(0deg)' : 'translateY(-50%) rotate(360deg)';
    }

    arrow.addEventListener('click', toggleSidebar);

    // Initial setup to ensure correct arrow position and rotation
    const isSidebarHidden = sidebar.classList.contains('hidden');
    arrow.style.left = isSidebarHidden ? '10px' : '250px';
    arrow.style.transform = isSidebarHidden ? 'translateY(-50%) rotate(360deg)' : 'translateY(-50%) rotate(0deg)';
});
