import React from 'react'
import './resumeTemplate.scss'
export const ResumeTemplate = (props) => {
    return (
	// <div className="container-fluid">
	// 	<div className="row rb-container">
	// 		<div className="rb-wrapper row">
	// 			<div className="col-sm-3 col-md-3 col-lg-3 rb-bodyRight">
	// 				<div className="sec-1">
	// 					<img alt="Profile " src="data:image/png;base64,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"/>
	// 					<h5 className="text-center">{props.formValues.fullName}</h5>
	// 					<p className="text-center">Java And UI Developer</p>
	// 				</div>
	// 				<div className="divider"></div>
	// 				<div className="sec-2">
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-location"></span></div> {props && props.formValues.address}</h5>
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-ios-email"></span></div> {props && props.formValues.email}</h5>
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-earth"></span></div> {props && props.formValues.websiteUrl}</h5>
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-social-facebook"></span></div> {props && props.formValues.linkedinAccount}</h5>
	// 				</div>
	// 				<div className="divider"></div>
	// 				<div className="sec-3">
	// 					<h5 className="text-left">Skills</h5>
	// 					<p className="lblProfessionalSkills">Professional Skills</p>
	// 					<p className="lblSkillName">Angular JS</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
	// 					    	<span className="sr-only">75% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Node JS</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
	// 					    	<span className="sr-only">75% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">HTML5</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
	// 					    	<span className="sr-only">70% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">CSS3</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
	// 					    	<span className="sr-only">80% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">JQuery</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
	// 					    	<span className="sr-only">75% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Bootstrap</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
	// 					    	<span className="sr-only">90% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblPersonalSkills">Personal Skills</p>
	// 					<p className="lblSkillName">Communication</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
	// 					    	<span className="sr-only">50% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Team Work</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
	// 					    	<span className="sr-only">50% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Creativity</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
	// 					    	<span className="sr-only">70% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Leadership</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
	// 					    	<span className="sr-only">80% Complete</span>
	// 					  	</div>
	// 					</div>
	// 					<p className="lblSkillName">Management</p>
	// 					<div className="progress">
	// 					    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
	// 					    	<span className="sr-only">75% Complete</span>
	// 					  	</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			<div className="col-sm-8 col-md-8 col-lg-8 rb-bodyLeft">
	// 				<div className="sec-1">
	// 					<h5 className="text-left">Hello !</h5>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 				</div>
	// 				<div className="sec-2">
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-university"></span></div> Education</h5>
	// 					<p className="lblDegree">
	// 						Pune University - <span>Master Of Computer Application In 2014.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						Solapur University - <span>Bachelor Of Computer Science In 2011.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						Pune Board - <span>Higher Secondary Certificate In 2008.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						Pune Board - <span>Secondary School Certificate In 2006.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 				</div>
	// 				<div className="sec-3">
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-person"></span></div> Job Experience</h5>
	// 					<p className="lblDegree">
	// 						Java Developer - <span>At ePersistence India Software In Pune 2014.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						Software Developer - <span> At PureEco Tech Solution Pune In 2015.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						Technology Support Sepcialist - <span> At Infosys BPO Ltd. Pune In 2016.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 				</div>
	// 				<div className="sec-4">
	// 					<h5 className="text-left"><div className="icon-wrapper"><span className="ion-ribbon-a"></span></div> Awards</h5>
	// 					<p className="lblDegree">
	// 						XXX - <span>XXX XXX XXX In Pune 2014.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 					<p className="lblDegree">
	// 						XXX - <span>XXX XXX XXX In Pune 2015.</span>
	// 					</p>
	// 					<p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>

<div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic"/>
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
           <p class="bold">Social</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fab fa-facebook-square"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Facebook</p>
               <p>Stephen@facebook</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-twitter-square"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Twitter</p>
               <p>Stephen@twitter</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-youtube"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Youtube</p>
               <p>Stephen@youtube</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-linkedin"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Linkedin</p>
               <p>{props && props.formValues.linkedinAccount}</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">About us</p>
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
                     <h3 class="semi-bold">{props && props.formValues.positionName}</h3> 
                  <p>{props && props.formValues.companyName}</p>
                </div>
            </li>
            <li>
              <div class="date">2015 - 2017</div>
              <div class="info">
                     <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div class="date">2017 - Present</div>
              <div class="info">
                     <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
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
                     <p class="semi-bold">{props && props.formValues.positionName}</p> 
                  <p>{props && props.formValues.universityName}</p>
                </div>
            </li>
            <li>
              <div class="date">2000 - 2010</div>
              <div class="info">
                     <p class="semi-bold">Texas International School</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="resume_item resume_hobby">
      <div class="title">
           <p class="bold">Hobby</p>
         </div>
       <ul>
         <li><i class="fas fa-book"></i></li>
         <li><i class="fas fa-gamepad"></i></li>
         <li><i class="fas fa-music"></i></li>
         <li><i class="fab fa-pagelines"></i></li>
      </ul>
    </div>
  </div>
</div>
    )
	
}

export default ResumeTemplate