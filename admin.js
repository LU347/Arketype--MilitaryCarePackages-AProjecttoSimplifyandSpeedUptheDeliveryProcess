// Get the requests and inventory lists
const requestsList = document.querySelector('.requests ul');
const inventoryList = document.querySelector('.inventory ul');

// Add a button to add an item to the requests list
const addRequestButton = document.createElement('button');
addRequestButton.textContent = 'Add request';
addRequestButton.addEventListener('click', () => {
  // Get the text of the new request
  const newRequest = prompt('Enter a new request:');

  // Create a new list item for the request
  const newRequestItem = document.createElement('li');
  newRequestItem.textContent = newRequest;

  // Append the new list item to the requests list
  requestsList.appendChild(newRequestItem);
});

// Add the add request button to the page
document.body.appendChild(addRequestButton);

// Add a button to remove an item from the requests list
const removeRequestButton = document.createElement('button');
removeRequestButton.textContent = 'Remove request';
removeRequestButton.addEventListener('click', () => {
  // Get the first list item in the requests list
  const firstRequestItem = requestsList.querySelector('li');

  // Remove the first list item from the requests list
  requestsList.removeChild(firstRequestItem);
});

// Add the remove request button to the page
document.body.appendChild(removeRequestButton);

// Add a button to add an item to the inventory list
const addInventoryButton = document.createElement('button');
addInventoryButton.textContent = 'Add inventory item';
addInventoryButton.addEventListener('click', () => {
  // Get the text of the new inventory item
  const newInventoryItem = prompt('Enter a new inventory item:');

  // Create a new list item for the inventory item
  const newInventoryItemItem = document.createElement('li');
  newInventoryItemItem.textContent = newInventoryItem;

  // Append the new list item to the inventory list
  inventoryList.appendChild(newInventoryItemItem);
});

// Add the add inventory item button to the page
document.body.appendChild(addInventoryButton);

// Add a button to remove an item from the inventory list
const removeInventoryButton = document.createElement('button');
removeInventoryButton.textContent = 'Remove inventory item';
removeInventoryButton.addEventListener('click', () => {
  // Get the first list item in the inventory list
  const firstInventoryItem = inventoryList.querySelector('li');

  // Remove the first list item from the inventory list
  inventoryList.removeChild(firstInventoryItem);
});

// Add the remove inventory item button to the page
document.body.appendChild(removeInventoryButton);
