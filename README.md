# React Form Handling

This project demonstrates a simple React form handling user inputs.

## Description

This React application includes a form that captures user inputs and handles form submission. It showcases basic form handling techniques in React, including state management and event handling.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/shivraj-roy/react-form.git
cd react-form
npm install
```

## Usage

To run the application, use the following command:

```bash
npm run dev
```

This will start the development server and open the application in your default web browser.

## Form Components

The form consists of the following components:

-  **Input Fields**: Capture user inputs.
-  **Submit Button**: Handles form submission.

## Example Code

Here is an example of how the form is implemented:

```jsx
import React, { useState } from "react";

const SimpleForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data:", formData);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Name:</label>
            <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
            />
         </div>
         <div>
            <label>Email:</label>
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
};

export default SimpleForm;
```

## License

This project is licensed under the MIT License.
