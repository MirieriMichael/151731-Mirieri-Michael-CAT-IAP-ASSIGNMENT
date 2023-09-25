document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add_shopping_list");
    const inputField = document.getElementById("add_list");
    const shoppingList = document.querySelector("ul");

    addButton.addEventListener("click", function() {
        const newItemText = inputField.value.trim();

        if (newItemText !== "") {
            const newItem = document.createElement("li");
            newItem.textContent = newItemText;
            shoppingList.insertBefore(newItem, shoppingList.firstChild);
            inputField.value = ""; 
        }
    });
});
