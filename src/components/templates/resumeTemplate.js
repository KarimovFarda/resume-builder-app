import React,{useState,useEffect} from 'react'
import './resumeTemplate.scss'
import axios from 'axios';
export const ResumeTemplate = (props) => {
  const [resumeData,setResumeData] = useState("")
  useEffect(() => {
    axios.get("http://localhost:8800/resume").then(
  response => {
    setResumeData(response.data[0])
  }
)
  },[])


  console.log(resumeData)
  return (
<div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src={props.formValues.image} alt="profile_pic"/>
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">{resumeData && resumeData.fullName}</p>
           <p class="regular">{resumeData && resumeData.title}</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fas fa-map-signs"></i>
             </div>
             <div class="data">
			 {resumeData && resumeData.address}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
			 {resumeData && resumeData.phone}             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
			 {resumeData && resumeData.email}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-weebly"></i>
             </div>
             <div class="data">
			 {resumeData && resumeData.websiteUrl}
             </div>
           </li>
		   <li>
             <div class="icon">
			 <i class="fab fa-linkedin"></i>
             </div>
             <div class="data">
			 {resumeData && resumeData.linkedin}
             </div>
           </li>

         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skills</p>
         </div>
         <ul>
           {props.formValues.skills && props.formValues.skills.map((item) => {
             return (
              <li class="skill_name">
              <div class="icon-interest">
                </div>
                  {item}
              </li>
             )
           })}
         
        
         </ul>
       </div>
       <div class="resume_item resume_social">
         <div class="title">
           <p class="bold">Hobbies</p>
         </div>
         <ul>

         {props.formValues.hobbies && props.formValues.hobbies.map((item) => {
             return (
              <li>
              <div class="icon-interest">
              </div>
              <div class="data">
                <p class="semi-bold">{item}</p>
              </div>
            </li>
             )
           })}
          
          
         </ul>
       </div>
     </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">About me</p>
         </div>
        <p>{props && props.formValues.about}</p>
    </div>
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Work Experience</p>
         </div>
        <ul>
            <li>
                <div class="info">
                     <h6>{resumeData && resumeData.positionName}</h6> 
                  <h6>{resumeData && resumeData.companyName}</h6>
                </div>
                <div class="date">{resumeData && resumeData.jobStartDate} - {resumeData && resumeData.jobEndDate}</div> 

            </li>
           
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
            <li>
                <div class="info">
                     <h6>{resumeData && resumeData.professionName}</h6> 
                  <h6>{resumeData && resumeData.universityName}</h6>
                </div>
                <div class="date">{resumeData && resumeData.universityStartDate} - {resumeData && resumeData.universityEndDate}</div> 

            </li>
         
        </ul>
    </div>
	<div class="resume_item resume_certificate">
      <div class="title">
           <p class="bold">Certificates</p>
         </div>
      <ul>
            <li>

                <div class="info">
                     <h6>{resumeData && resumeData.certificateName}</h6> 
                  <h6>{resumeData && resumeData.institutionName}</h6>
                </div>
                <div class="date">{resumeData && resumeData.certificateStartDate} - {resumeData && resumeData.certificateExpirationDate}</div> 

            </li>
         
        </ul>
    </div>
    {/* <div class="resume_item resume_hobby">
      <div class="title">
           <p class="bold">Hobby</p>
         </div>
       <ul>
         <li><i class="fas fa-book"></i></li>
         <li><i class="fas fa-gamepad"></i></li>
         <li><i class="fas fa-music"></i></li>
         <li><i class="fab fa-pagelines"></i></li>
      </ul>
    </div> */}
  </div>
</div>
    )
	
}

export default ResumeTemplate