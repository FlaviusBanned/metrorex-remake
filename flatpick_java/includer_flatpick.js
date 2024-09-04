document.addEventListener('DOMContentLoaded', function() {
    // Get the current date in YYYY-MM-DD format
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // e.g., "2024-09-03"

    // Calculate the date three years from now
    const futureDate = new Date(today);
    futureDate.setFullYear(today.getFullYear() + 3);
    const maxDate = futureDate.toISOString().split('T')[0]; // e.g., "2027-09-03"

    flatpickr('#start-date', {
        dateFormat: 'Y-m-d', // Customize date format
        minDate: currentDate, // Set minimum date to current date
        maxDate: maxDate, // Set maximum date to three years from the current year
        // Additional options can be added here
    });
});
