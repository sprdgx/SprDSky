# ValidiElData - Advanced Data Validator Library

Welcome to ValidiElData, an advanced data validation library for Node.js. This library is designed to simplify and enhance data validation processes in your applications, providing robust validation capabilities with ease.
 
<div align="center">
  <img src="https://github.com/sprdgx/WebGifs/raw/main/Spuseum.gif" alt="Spuseum GIF 1" width="450px" style="display: inline-block; margin-right: 20px;" />
  <img src="https://github.com/sprdgx/WebGifs/raw/main/Spuseum2.gif" alt="Spuseum GIF 2" width="450px" style="display: inline-block;" />
</div>

## 🚀 Installation

To start using ValidiElData in your Node.js project, you can install it via npm:

## 🔧 Usage

Here's an example of how you can utilize ValidiElData to validate user data:

1. **Import ValidiElData: Import ValidiElData into your project using require:**

   ```bash
   const ValidiElData = require('validieldata');

2. **Initialize the Validator: Create an instance of the validator:**
   
   ```bash
   const validator = new ValidiElData();
   
3. **Add Custom Validation Function: You can add a custom validation function for a specific field :**

   ```bash   
    // Add custom validation function

    validator.ZidWchThab('customValidator', async (value) => {
    // Example custom validation logic
    return value === 'valid';
    });

    //  For example lets add a custom validation function for the 'age' field:

    validator.ZidWchThab('ageValidator', async (value) => {
    const minAge = 18;
    const maxAge = 100;

        if (typeof value !== 'number') {
            return false; // Age must be a number
        }

        return value >= minAge && value <= maxAge;
    });



4. **Prepare User Data and Validation Rules: Define your user data and the validation rules for each field.**

   ```bash
    const userData = {
        username: 'user123',
        password: 'seqsdqdqsdqd',
        email: 'user@example.com',
        age: 25, // Example age value
    };

    const validationRules = {
        username: { type: 'string', minLength: 4, maxLength: 20 },
        password: { type: 'string', minLength: 8 },
        email: { type: 'string', format: 'email' },
        age: { type: 'number', custom: 'ageValidator' },
    };
