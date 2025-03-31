// Write your solution in this file!

// Step 1: Declare a global variable using var
var customerName = 'bob';

// Step 2: Function to uppercase the global variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Step 3: Function to declare a global variable inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global
}

// Step 4: Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Step 5: Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Step 6: Function to try changing the constant (this will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new person'; // This will throw an error
}

// Export functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};

