// Sample inventory data
let inventory = [
//    { name: "Cement", category: "Construction", quantity: 100 },
//    { name: "Steel", category: "Construction", quantity: 200 }
];


// Function to display inventory
function displayInventory() {
    const inventoryBody = document.getElementById("inventory-body");
    inventoryBody.innerHTML = ""; // Clear previous content

    inventory.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
        `;
        inventoryBody.appendChild(row);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Add new item to inventory
    inventory.push({ name, category, quantity });

    // Display updated inventory
    displayInventory();

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("quantity").value = "";
}




// Add event listener to form submit
document.getElementById("order-form").addEventListener("submit", handleFormSubmit);

// Initial display of inventory
displayInventory();
