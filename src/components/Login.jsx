import { useState } from "react";

export default function Login() {
   const [enteredValue, setEnteredValue] = useState({
      email: "",
      password: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitted");
      console.log(enteredValue);
   };

   const handleInputChange = (type, event) => {
      setEnteredValue((prev) => ({
         ...prev,
         [type]: event,
      }));
   };

   const handleReset = () => {
      setEnteredValue({
         email: "",
         password: "",
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <h2>Login</h2>

         <div className="control-row">
            <div className="control no-margin">
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  value={enteredValue.email}
               />
            </div>

            <div className="control no-margin">
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e) =>
                     handleInputChange("password", e.target.value)
                  }
                  value={enteredValue.password}
               />
            </div>
         </div>

         <p className="form-actions">
            <button className="button button-flat" onClick={handleReset}>
               Reset
            </button>
            <button className="button">Login</button>
         </p>
      </form>
   );
}
