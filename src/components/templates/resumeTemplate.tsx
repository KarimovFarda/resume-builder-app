import React,{useState,useEffect} from 'react'
import './resumeTemplate.scss'
import axios from 'axios';
export const ResumeTemplate = (props:any) => {
  const [resumeData,setResumeData] = useState<any>("")
  useEffect(() => {
    axios.get("http://localhost:8800/resume").then(
  response => {
    setResumeData(response.data[0])
  }
)
  },[])

  return (
<div className="resume">
   <div className="resume_left">
     <div className="resume_profile">
       <img src={props.formValues.image} alt="profile_pic"/>
     </div>
     <div className="resume_content">
       <div className="resume_item resume_info">
         <div className="title">
           <p className="bold">{resumeData && resumeData.fullName}</p>
           <p className="regular">{resumeData && resumeData.title}</p>
         </div>
         <ul>
           <li>
             <div className="icon">
               <i className="fas fa-map-signs"></i>
             </div>
             <div className="data">
			 {resumeData && resumeData.address}
             </div>
           </li>
           <li>
             <div className="icon">
               <i className="fas fa-mobile-alt"></i>
             </div>
             <div className="data">
			 {resumeData && resumeData.phone}             </div>
           </li>
           <li>
             <div className="icon">
               <i className="fas fa-envelope"></i>
             </div>
             <div className="data">
			 {resumeData && resumeData.email}
             </div>
           </li>
           <li>
             <div className="icon">
               <i className="fab fa-weebly"></i>
             </div>
             <div className="data">
			 {resumeData && resumeData.websiteUrl}
             </div>
           </li>
		   <li>
             <div className="icon">
			 <i className="fab fa-linkedin"></i>
             </div>
             <div className="data">
			 {resumeData && resumeData.linkedin}
             </div>
           </li>

         </ul>
       </div>
       <div className="resume_item resume_skills">
         <div className="title">
           <p className="bold">skills</p>
         </div>
         <ul>
           {props.formValues.skills && props.formValues.skills.map((item:any) => {
             return (
              <li className="skill_name">
              <div className="icon-interest">
                </div>
                  {item}
              </li>
             )
           })}
         
        
         </ul>
       </div>
       <div className="resume_item resume_social">
         <div className="title">
           <p className="bold">Hobbies</p>
         </div>
         <ul>

         {props.formValues.hobbies && props.formValues.hobbies.map((item:any) => {
             return (
              <li>
              <div className="icon-interest">
              </div>
              <div className="data">
                <p className="semi-bold">{item}</p>
              </div>
            </li>
             )
           })}
          
          
         </ul>
       </div>
     </div>
  </div>
  <div className="resume_right">
    <div className="resume_item resume_about">
        <div className="title">
           <p className="bold">About me</p>
         </div>
        <p>{props && props.formValues.about}</p>
    </div>
    <div className="resume_item resume_work">
        <div className="title">
           <p className="bold">Work Experience</p>
         </div>
        <ul>
            <li>
                <div className="info">
                     <h6>{resumeData && resumeData.positionName}</h6> 
                  <h6>{resumeData && resumeData.companyName}</h6>
                </div>
                <div className="date">{resumeData && resumeData.jobStartDate} - {resumeData && resumeData.jobEndDate}</div> 

            </li>
           
        </ul>
    </div>
    <div className="resume_item resume_education">
      <div className="title">
           <p className="bold">Education</p>
         </div>
      <ul>
            <li>
                <div className="info">
                     <h6>{resumeData && resumeData.professionName}</h6> 
                  <h6>{resumeData && resumeData.universityName}</h6>
                </div>
                <div className="date">{resumeData && resumeData.universityStartDate} - {resumeData && resumeData.universityEndDate}</div> 

            </li>
         
        </ul>
    </div>
	<div className="resume_item resume_certificate">
      <div className="title">
           <p className="bold">Certificates</p>
         </div>
      <ul>
            <li>

                <div className="info">
                     <h6>{resumeData && resumeData.certificateName}</h6> 
                  <h6>{resumeData && resumeData.institutionName}</h6>
                </div>
                <div className="date">{resumeData && resumeData.certificateStartDate} - {resumeData && resumeData.certificateExpirationDate}</div> 

            </li>
         
        </ul>
    </div>
    {/* <div className="resume_item resume_hobby">
      <div className="title">
           <p className="bold">Hobby</p>
         </div>
       <ul>
         <li><i className="fas fa-book"></i></li>
         <li><i className="fas fa-gamepad"></i></li>
         <li><i className="fas fa-music"></i></li>
         <li><i className="fab fa-pagelines"></i></li>
      </ul>
    </div> */}
  </div>
</div>
    )
	
}

export default ResumeTemplate