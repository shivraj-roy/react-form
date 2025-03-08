import { useActionState } from "react";
import {
   isEmail,
   isEqualsToOtherValue,
   isNotEmpty,
   hasMinLength,
} from "../util/validation";

export default function SignUp() {
   // ? This approach can be done if you've react v18 or lower version...
   /* const [confirmPass, setConfirmPass] = useState(false);
   const handleSubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const acquisition = fd.getAll("acquisition");
      fd.set("acquisition", acquisition.join(", "));
      const data = Object.fromEntries(fd.entries()); //* The Object.fromEntries() method takes an iterable (such as the iterator returned by fd.entries()) and converts it into a plain JavaScript object.
      if (data.password !== data["confirm-password"]) {
         setConfirmPass(true);
         return;
      }
      setConfirmPass(false);
      console.log(data);
   }; */

   // ? This approach can be done if you've react v19 or higher version...
   const signUpAction = (prev, formData) => {
      const acquisition = formData.getAll("acquisition");
      const email = formData.get("email");
      const password = formData.get("password");
      const role = formData.get("role");
      const terms = formData.get("terms");
      const confirmPassword = formData.get("confirm-password");
      const firstName = formData.get("first-name");
      const lastName = formData.get("last-name");

      let errors = [];
      if (!isEmail(email)) {
         errors.push("Invalid email");
      }
      if (!isNotEmpty(password)) {
         errors.push("Password is required");
      }
      if (!hasMinLength(password, 6)) {
         errors.push("Password should be at least 6 characters long");
      }
      if (!isNotEmpty(confirmPassword)) {
         errors.push("Confirm password is required");
      }
      if (!isEqualsToOtherValue(password, confirmPassword)) {
         errors.push("Password should match");
      }
      if (!isNotEmpty(firstName)) {
         errors.push("First name is required");
      }
      if (!isNotEmpty(lastName)) {
         errors.push("Last name is required");
      }
      if (!isNotEmpty(role)) {
         errors.push("Role is required");
      }
      if (!terms) {
         errors.push("You must agree to the terms and conditions");
      }
      if (acquisition.length === 0) {
         errors.push("You must select at least one acquisition");
      }

      if (errors.length > 0) {
         return { errors };
      }

      return { errors: null };
   };

   const [formState, formAction] = useActionState(signUpAction, {
      errors: null,
   });

   return (
      <form action={formAction}>
         <h2>Welcome on board!</h2>
         <p>We just need a little bit of data from you to get you started 🚀</p>

         <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
         </div>

         <div className="control-row">
            <div className="control">
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  minLength={6}
               />
            </div>

            <div className="control">
               <label htmlFor="confirm-password">Confirm Password</label>
               <input
                  id="confirm-password"
                  type="password"
                  name="confirm-password"
                  minLength={6}
               />
               <div className="control-error"></div>
            </div>
         </div>

         <hr />

         <div className="control-row">
            <div className="control">
               <label htmlFor="first-name">First Name</label>
               <input type="text" id="first-name" name="first-name" />
            </div>

            <div className="control">
               <label htmlFor="last-name">Last Name</label>
               <input type="text" id="last-name" name="last-name" />
            </div>
         </div>

         <div className="control">
            <label htmlFor="role">What best describes your role?</label>
            <select id="role" name="role">
               <option value="">Select your role</option>
               <option value="student">Student</option>
               <option value="teacher">Teacher</option>
               <option value="employee">Employee</option>
               <option value="founder">Founder</option>
               <option value="other">Other</option>
            </select>
         </div>

         <fieldset>
            <legend>How did you find us?</legend>
            <div className="control">
               <input
                  type="checkbox"
                  id="google"
                  name="acquisition"
                  value="google"
               />
               <label htmlFor="google">Google</label>
            </div>

            <div className="control">
               <input
                  type="checkbox"
                  id="friend"
                  name="acquisition"
                  value="friend"
               />
               <label htmlFor="friend">Referred by friend</label>
            </div>

            <div className="control">
               <input
                  type="checkbox"
                  id="other"
                  name="acquisition"
                  value="other"
               />
               <label htmlFor="other">Other</label>
            </div>
         </fieldset>

         <div className="control">
            <label htmlFor="terms-and-conditions">
               <input type="checkbox" id="terms-and-conditions" name="terms" />I
               agree to the terms and conditions
            </label>
         </div>

         {formState.errors && (
            <ul className="control-error">
               {formState.errors.map((error, index) => (
                  <li key={index}>{error}</li>
               ))}
            </ul>
         )}

         <p className="form-actions">
            <button type="reset" className="button button-flat">
               Reset
            </button>
            <button type="submit" className="button">
               Sign up
            </button>
         </p>
      </form>
   );
}
