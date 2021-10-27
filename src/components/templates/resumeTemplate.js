import React from 'react'
import './resumeTemplate.scss'
export const ResumeTemplate = () => {
    return (
	<div class="container-fluid">
		<div class="row rb-container">
			<div class="rb-wrapper row">
				<div class="col-sm-3 col-md-3 col-lg-3 rb-bodyRight">
					<div class="sec-1">
						<img alt="Profile Picture" src="data:image/png;base64,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"/>
						<h5 class="text-center">Ashutosh Kedar</h5>
						<p class="text-center">Java And UI Developer</p>
					</div>
					<div class="divider"></div>
					<div class="sec-2">
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-location"></span></div> Subhadra Residency, Narhe, Pune.</h5>
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-ios-telephone"></span></div> (MO) +91 775 784 2051</h5>
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-ios-email"></span></div> ashutosh.kedar@infosys.com.</h5>
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-earth"></span></div> www.ashutoshdkedar.com</h5>
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-social-facebook"></span></div> www.fb.com/AshutoshDKedar</h5>
					</div>
					<div class="divider"></div>
					<div class="sec-3">
						<h5 class="text-left">Skills</h5>
						<p class="lblProfessionalSkills">Professional Skills</p>
						<p class="lblSkillName">Angular JS</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
						    	<span class="sr-only">75% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Node JS</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
						    	<span class="sr-only">75% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">HTML5</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
						    	<span class="sr-only">70% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">CSS3</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
						    	<span class="sr-only">80% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">JQuery</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
						    	<span class="sr-only">75% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Bootstrap</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
						    	<span class="sr-only">90% Complete</span>
						  	</div>
						</div>
						<p class="lblPersonalSkills">Personal Skills</p>
						<p class="lblSkillName">Communication</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
						    	<span class="sr-only">50% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Team Work</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
						    	<span class="sr-only">50% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Creativity</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
						    	<span class="sr-only">70% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Leadership</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
						    	<span class="sr-only">80% Complete</span>
						  	</div>
						</div>
						<p class="lblSkillName">Management</p>
						<div class="progress">
						    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
						    	<span class="sr-only">75% Complete</span>
						  	</div>
						</div>
					</div>
				</div>
				<div class="col-sm-8 col-md-8 col-lg-8 rb-bodyLeft">
					<div class="sec-1">
						<h5 class="text-left">Hello !</h5>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
					<div class="sec-2">
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-university"></span></div> Education</h5>
						<p class="lblDegree">
							Pune University - <span>Master Of Computer Application In 2014.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							Solapur University - <span>Bachelor Of Computer Science In 2011.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							Pune Board - <span>Higher Secondary Certificate In 2008.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							Pune Board - <span>Secondary School Certificate In 2006.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
					<div class="sec-3">
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-person"></span></div> Job Experience</h5>
						<p class="lblDegree">
							Java Developer - <span>At ePersistence India Software In Pune 2014.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							Software Developer - <span> At PureEco Tech Solution Pune In 2015.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							Technology Support Sepcialist - <span> At Infosys BPO Ltd. Pune In 2016.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
					<div class="sec-4">
						<h5 class="text-left"><div class="icon-wrapper"><span class="ion-ribbon-a"></span></div> Awards</h5>
						<p class="lblDegree">
							XXX - <span>XXX XXX XXX In Pune 2014.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<p class="lblDegree">
							XXX - <span>XXX XXX XXX In Pune 2015.</span>
						</p>
						<p class="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>
			</div>
		</div>
	</div>


    )
}

export default ResumeTemplate