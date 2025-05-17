function validateClientForm() {
    let firstName = document.forms["clientForm"]["firstName"].value.trim();
    let lastName = document.forms["clientForm"]["lastName"].value.trim();
    let phone = document.forms["clientForm"]["Phone"].value.trim();

    if (!firstName || !lastName || !phone) {
        alert("All fields must be filled out for Client.");
        return false;
    }
    return true;
}

function validateSkillForm() {
    let skill = document.forms["skillForm"]["SkillName"].value.trim();
    if (!skill) {
        alert("Skill name is required.");
        return false;
    }
    return true;
}

function validateTechnicianForm() {
    let form = document.forms["technicianForm"];
    if (!form["firstName"].value.trim() ||
        !form["lastName"].value.trim() ||
        !form["Phone"].value.trim() ||
        !form["City"].value.trim()) {
        alert("Please fill in all required technician fields.");
        return false;
    }
    return true;
}

function validateAppointmentForm() {
    let form = document.forms["appointmentForm"];
    if (!form["ClientID"].value || !form["TechID"].value || !form["Date"].value) {
        alert("Please complete all fields to book an appointment.");
        return false;
    }
    return true;
}
function validateClientForm() {
    let firstName = document.forms["clientForm"]["firstName"].value.trim();
    let lastName = document.forms["clientForm"]["lastName"].value.trim();
    let phone = document.forms["clientForm"]["Phone"].value.trim();

    if (!firstName || !lastName || !phone) {
        alert("All fields must be filled out for Client.");
        return false;
    }
    return true;
}

function validateSkillForm() {
    let skill = document.forms["skillForm"]["SkillName"].value.trim();
    if (!skill) {
        alert("Skill name is required.");
        return false;
    }
    return true;
}

function validateTechnicianForm() {
    let form = document.forms["technicianForm"];
    if (!form["firstName"].value.trim() ||
        !form["lastName"].value.trim() ||
        !form["Phone"].value.trim() ||
        !form["City"].value.trim()) {
        alert("Please fill in all required technician fields.");
        return false;
    }
    return true;
}

function validateAppointmentForm() {
    let form = document.forms["appointmentForm"];
    if (!form["ClientID"].value || !form["TechID"].value || !form["Date"].value) {
        alert("Please complete all fields to book an appointment.");
        return false;
    }
    return true;
}

// --- New code for search functionality (paste this section) ---
document.addEventListener('DOMContentLoaded', () => {
    const mainSearchInput = document.getElementById('mainSearchInput');
    const mainSearchButton = document.getElementById('mainSearchButton');

    if (mainSearchButton) {
        mainSearchButton.addEventListener('click', () => {
            const searchTerm = mainSearchInput.value.trim();
            if (searchTerm) {
                // Option A: Redirect to a search results page (e.g., technicians_list.php)
                // You would need to create a technicians_list.php that handles the search term
                window.location.href = `technician.php?search=${encodeURIComponent(searchTerm)}`;
                // Or if you have a dedicated search results page:
                // window.location.href = `search_results.php?query=${encodeURIComponent(searchTerm)}`;

                // Option B: Perform AJAX search (requires a backend API endpoint)
                /*
                fetch(`/api/search_technicians.php?query=${encodeURIComponent(searchTerm)}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log("Search results:", data);
                        // Here you would dynamically display the results on the current page
                        // For example, in a div below the search bar
                    })
                    .catch(error => console.error('Error fetching search results:', error));
                */
            } else {
                alert('Please enter a skill or technician name to search.');
            }
        });
    }

    // You can also add an event listener for 'Enter' key press on the search input
    if (mainSearchInput) {
        mainSearchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                mainSearchButton.click(); // Trigger the button click
            }
        });
    }
});
// --- End of new code ---
