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

document.getElementById("chatbot-button").onclick = function () {
    const window = document.getElementById("chatbot-window");
    window.style.display = window.style.display === "none" ? "block" : "none";
};

document.getElementById("chatbot-send").onclick = async function () {
    const input = document.getElementById("chatbot-input");
    const message = input.value;
    input.value = ""; // Clear input field

    if (message.trim() === "") return;

    // Add user's message to the chat window
    const messages = document.getElementById("chatbot-messages");
    messages.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

    // Send the query to the backend
    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: message }),
    });
    const data = await response.json();

    // Add response to the chat window
    messages.innerHTML += `<div><strong>Bot:</strong> ${data.responses[0]}</div>`;
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
};

