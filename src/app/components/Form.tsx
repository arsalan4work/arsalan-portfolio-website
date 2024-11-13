
const Form = () => {
   return (
     <div className="form">
       <div className="f_info">
          <h1>Get In Touch</h1>
          <p>We are available here 365 days 24/7</p>
       </div>
             <div className="main_form">
             <form action="/send-data-here" method="post">
             <label htmlFor="first">First name:</label>
             <input type="text" id="first" name="first" />
             <label htmlFor="last">Last name:</label>
             <input type="text" id="last" name="last" />
             <textarea name="textarea" id="textarea">
             <input type="text" />
             </textarea>
             <button type="submit">Submit</button>
             </form>
             </div>
     </div>
 
   )
 }
 
 export default Form