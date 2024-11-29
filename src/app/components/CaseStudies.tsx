import Image from "next/image"

const CaseStudies = () => {
  return (
    <div className="case_studies_section">
      <div className="cs_info">
         <h2> Case Studies </h2>
         <p> Solving user & business problems since last year.
            Check this some of my work projects
         </p>
      </div>


      <div className="section_main">
         <div className="section1">

          <div className="s_text">
           <h4>Ecommerce</h4>
           <h2>Amazon Clone</h2>
           <p>I have developed a personal portfolio website using the 
            latest tech stack, including Next.js, TypeScript, CSS, 
            and HTML, and deployed it on Vercel. As a junior web 
            developer, I am committed to showcasing my skills, 
            building innovative projects, and seeking opportunities 
            to collaborate and grow within the tech industry.</p>
            <button className="c_button">View case study <i className="bi bi-arrow-right-short"></i></button>
            </div>
               <div className="img1">
                <Image
                 src="/1.png"
                 width={445}
                 height={300}
                 alt="Error!"
                 />
               </div>
         </div>

         <div className="section1">
            <div className="img2">
             <Image
             src="/2.png"
             width={445}
             height={300}
             alt="Error!"
             />
             </div>

            <div className="s_text">
           <h4>Edtech</h4>
           <h2>Resume Builder</h2>
           <p>I have developed a resume builder website using the 
            latest tech stack, including Next.js, TypeScript, CSS, 
            and HTML, and deployed it on Vercel. As a junior web 
            developer, I am committed to showcasing my skills, 
            building innovative projects, and seeking opportunities 
            to collaborate and grow within the tech industry.</p>
            <button className="c_button">View case study <i className="bi bi-arrow-right-short"></i></button>
            </div>
            
         </div>

         <div className="section1">

         <div className="s_text">
           <h4>Technology</h4>
           <h2>Pixel Perfect Website</h2>
           <p>I have developed a pixel perfect website using the 
            latest tech stack, including Next.js, TypeScript, CSS, 
            and HTML, and deployed it on Vercel. As a junior web 
            developer, I am committed to showcasing my skills, 
            building innovative projects, and seeking opportunities 
            to collaborate and grow within the tech industry.</p>
            <button className="c_button">View case study <i className="bi bi-arrow-right-short"></i></button>
            </div>
            <div className="img3">
            <Image
             src="/3.png"
             width={445}
             height={300}
             alt="Error!"
             />
             </div>
         </div>
      </div>

    </div>
  )
}

export default CaseStudies