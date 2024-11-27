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
           <h4>Fintech</h4>
           <h3>Work name here</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit dolorum ipsam laboriosam minima praesentium 
            eligendi magnam neque quos rerum consequatur modi.</p>
            <button className="c_button">View case study</button>
            </div>
               <div className="img1">
                <Image
                 src="/image1.png"
                 width={445}
                 height={300}
                 alt="Error!"
                 />
               </div>
         </div>

         <div className="section1">
            <div className="img2">
             <Image
             src="/image2.png"
             width={445}
             height={300}
             alt="Error!"
             />
             </div>

            <div className="s_text">
           <h4>Edtech</h4>
           <h3>Work name here</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit dolorum ipsam laboriosam minima praesentium 
            eligendi magnam neque quos rerum consequatur modi.</p>
            <button className="c_button">View case study</button>
            </div>
            
         </div>

         <div className="section1">

         <div className="s_text">
           <h4>Ecommerce</h4>
           <h3>Work name here</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit dolorum ipsam laboriosam minima praesentium 
            eligendi magnam neque quos rerum consequatur modi.</p>
            <button className="c_button">View case study</button>
            </div>
            <div className="img3">
            <Image
             src="/image3.png"
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