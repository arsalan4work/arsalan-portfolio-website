
const Form = () => {
   return (
     <div className="form">
      <div className="form_color">
       <div className="f_info">
          <h1>Get In Touch</h1>
          <p>We are available here 365 days 24/7.</p>
       </div>

             
             <form className="main_form" action="/send-data-here" method="post">
             <label htmlFor="first">First name:</label>
             <input type="text" id="first" name="first" />
             <label htmlFor="last">Last name:</label>
             <input type="text" id="last" name="last" />
             <label htmlFor="message">Message:</label>
             <textarea name="textarea" id="textarea">
             <input type="text" />
             </textarea>
             <button type="submit"> Submit <i className="bi bi-arrow-right-short"></i> </button>
             </form>
            
          </div>
     </div>
 
   )
 }
 
 export default Form