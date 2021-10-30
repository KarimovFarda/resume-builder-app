import React from 'react'
import './resumeTemplate.scss'
export const ResumeTemplate = (props) => {
  return (
<div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src={props.formValues.image} alt="profile_pic"/>
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">{props && props.formValues.fullName}</p>
           <p class="regular">{props && props.formValues.title}</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fas fa-map-signs"></i>
             </div>
             <div class="data">
			 {props && props.formValues.address}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
			 {props && props.formValues.phoneNumber}             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
			 {props && props.formValues.email}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-weebly"></i>
             </div>
             <div class="data">
			 {props && props.formValues.websiteUrl}
             </div>
           </li>
		   <li>
             <div class="icon">
			 <i class="fab fa-linkedin"></i>
             </div>
             <div class="data">
			 {props && props.formValues.linkedinAccount}
             </div>
           </li>

         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skill's</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               HTML
             </div>
             <div class="skill_progress">
               <span style={{width: "80%"}}></span>
             </div>
             <div class="skill_per">80%</div>
           </li>
           <li>
             <div class="skill_name">
               CSS
             </div>
             <div class="skill_progress">
               <span style={{width: "70%"}}></span>
             </div>
             <div class="skill_per">70%</div>
           </li>
           <li>
             <div class="skill_name">
               SASS
             </div>
             <div class="skill_progress">
               <span style={{width: "90%"}}></span>
             </div>
             <div class="skill_per">90%</div>
           </li>
           <li>
             <div class="skill_name">
               JS
             </div>
             <div class="skill_progress">
               <span style={{width: "60%"}}></span>
             </div>
             <div class="skill_per">60%</div>
           </li>
           <li>
             <div class="skill_name">
               JQUERY
             </div>
             <div class="skill_progress">
               <span style={{width: '88%'}}></span>
             </div>
             <div class="skill_per">88%</div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_social">
         <div class="title">
           <p class="bold">Interest</p>
         </div>
         <ul>
           <li>
             <div class="icon-interest">
             </div>
             <div class="data">
               <p class="semi-bold">Facebook</p>
             </div>
           </li>
           <li>
             <div class="icon-interest">
             </div>
             <div class="data">
               <p class="semi-bold">Twitter</p>
             </div>
           </li>
           <li>
             <div class="icon-interest">
             </div>
             <div class="data">
               <p class="semi-bold">Youtube</p>
             </div>
           </li>
           <li>
             <div class="icon-interest">
             </div>
             <div class="data">
               <p class="semi-bold">Linkedin</p>
             </div>
           </li>
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
                <div class="date">{props && props.formValues.jobStartDate} - {props && props.formValues.jobEndDate}</div> 
                <div class="info">
                     <h5>{props && props.formValues.positionName}</h5> 
                  <h6>{props && props.formValues.companyName}</h6>
                </div>
            </li>
           
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
            <li>
                <div class="date">{props && props.formValues.educationStartDate} - {props && props.formValues.educationEndDate}</div> 
                <div class="info">
                     <h5>{props && props.formValues.positionName}</h5> 
                  <h6>{props && props.formValues.universityName}</h6>
                </div>
            </li>
         
        </ul>
    </div>
	<div class="resume_item resume_certificate">
      <div class="title">
           <p class="bold">Certificates</p>
         </div>
      <ul>
            <li>
                <div class="date">{props && props.formValues.educationStartDate} - {props && props.formValues.educationEndDate}</div> 
                <div class="info">
                     <h5>{props && props.formValues.positionName}</h5> 
                  <h6>{props && props.formValues.universityName}</h6>
                </div>
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