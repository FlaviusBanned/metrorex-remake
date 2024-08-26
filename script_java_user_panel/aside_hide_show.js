document.getElementById('show-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('hidden');
    document.body.classList.add('sidebar-visible');
});

document.getElementById('hide-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('hidden');
    document.body.classList.remove('sidebar-visible');
});
