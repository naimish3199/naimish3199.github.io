// document.addEventListener('DOMContentLoaded', function() {
//         const tabs = document.querySelectorAll('.tab');
//         const sections = document.querySelectorAll('section');

//         tabs.forEach(tab => {
//             tab.addEventListener('click', function(e) {
//                 e.preventDefault(); // Prevent the default anchor behavior

//                 // Remove 'active' class from all tabs
//                 tabs.forEach(t => t.classList.remove('active'));
//                 // Hide all sections
//                 sections.forEach(section => section.style.display = 'none');

//                 // Add 'active' class to the clicked tab
//                 tab.classList.add('active');

//                 // Show the corresponding section
//                 const targetSection = tab.getAttribute('data-target');
//                 document.querySelector('.' + targetSection).style.display = 'block';
//             });
//         });
//     });
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('section');
    const hamburger = document.getElementById('hamburger');
    const tabsMenu = document.getElementById('tabs');

    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding section
            const targetSection = tab.getAttribute('data-target');
            document.querySelector('.' + targetSection).style.display = 'block';

            // Close the menu on smaller screens
            if (window.innerWidth <= 762) {
                tabsMenu.classList.remove('active');
            }
        });
    });

    // Hamburger toggle functionality
    hamburger.addEventListener('click', function() {
        tabsMenu.classList.toggle('active');
    });
});


