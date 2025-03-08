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

   return (
      <form>
         <h2>Welcome on board!</h2>
         <p>We just need a little bit of data from you to get you started 🚀</p>

         <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
         </div>

         <div className="control-row">
            <div className="control">
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  minLength={6}
               />
            </div>

            <div className="control">
               <label htmlFor="confirm-password">Confirm Password</label>
               <input
                  id="confirm-password"
                  type="password"
                  name="confirm-password"
                  required
                  minLength={6}
               />
               <div className="control-error">
                  {<p>Password should match</p>}
               </div>
            </div>
         </div>

         <hr />

         <div className="control-row">
            <div className="control">
               <label htmlFor="first-name">First Name</label>
               <input type="text" id="first-name" name="first-name" required />
            </div>

            <div className="control">
               <label htmlFor="last-name">Last Name</label>
               <input type="text" id="last-name" name="last-name" required />
            </div>
         </div>

         <div className="control">
            <label htmlFor="role">What best describes your role?</label>
            <select id="role" name="role" required>
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
               <input
                  type="checkbox"
                  id="terms-and-conditions"
                  name="terms"
                  required
               />
               I agree to the terms and conditions
            </label>
         </div>

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
