import React, {useState,useEffect} from 'react'
import './resumeForm.scss'
import { useHistory } from 'react-router'
export const ResumeForm = (props) => {
    const history = useHistory()
    const [fullName,setFullName] = useState("")
    const [title,setTitle] = useState("")
    const [address,setAddress] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [linkedinAccount,setLinkedinAccount] = useState("")
    const [websiteUrl,setWebsiteUrl] = useState("")
    const [about,setAbout] = useState("")
    const [universityName,setUniversityName] = useState("")
    const [profession, setProfession] = useState("")
    const [educationStartDate, setEducationStartDate] = useState("")
    const [educationEndDate, setEducationEndDate] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [positionName, setPositionName] = useState("")
    const [jobStartDate, setJobStartDate] = useState("")
    const [jobEndDate, setJobEndDate] = useState("")
    const [image, setImage] = useState(null)
    const [skillName,setSkillName] = useState("")
    const [skills,setSkills] = useState([])
    const [skillCount,setSkillCount] = useState(0)
   function formSubmitted(e){
       e.preventDefault()
        props.getValue({fullname : fullName,image:image,skills:skills,address : address,phoneNumber : phoneNumber,email : email, linkedinAccount : linkedinAccount,websiteUrl : websiteUrl,title:title,about:about,universityName:universityName,profession:profession,educationStartDate:educationStartDate,educationEndDate:educationEndDate,companyName:companyName,positionName:positionName,jobStartDate:jobStartDate,jobEndDate:jobEndDate})
        history.push("/template")
   }
   useEffect(() => {
     if(skillName){
    skills.push(skillName)
    setSkills(skills)
    setSkillName("")
     }
   },[skillCount])
    return (

<form onSubmit={formSubmitted}>
  <div className="form__header">
    <h1>Build Your Resume</h1>
    <p>Enter the fields below to generate an html resume</p>
  </div>

  <h2>Personal Details</h2>

  <div className="form-group">
    <label htmlFor="name">Full Name <span>*</span></label>
    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} name="name" id="name" placeholder="Robert Norman Ross"/>
    <div id="name__error" className="error"></div>
  </div>

  <div className="form-group">
    <label htmlFor="name">Image for Resume <span>*</span></label>
    <input type="file"  onChange={e=>setImage(URL.createObjectURL(e.target.files[0]))} name="name" id="name" placeholder="Robert Norman Ross"/>
    <div id="name__error" className="error"></div>
  </div>


  <div className="form-group">
    <label htmlFor="name">Title <span>*</span></label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="name" id="name" placeholder="Robert Norman Ross"/>
    <div id="name__error" className="error"></div>
  </div>

  <div className="form-group">
    <label htmlFor="address">Address <span>*</span></label>
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="address" placeholder="4059 Mt Lee Dr. Hollywood, CA 90068"/>
  </div>

  <div className="form-group">
    <label htmlFor="phone">Phone <span>*</span></label>
    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" id="phone" placeholder="+1  123 456 7890"/>
  </div>

  <div className="form-group">
    <label htmlFor="email">Email <span>*</span></label>
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="example@mail.com"/>
    <div id="email__error" className="error"></div>
  </div>
      <div class="row">
    <div class="col">
    <label htmlFor="email">Linkedin</label>
    <input type="text" value={linkedinAccount} onChange={(e) => setLinkedinAccount(e.target.value)} name="Linkedin" id="Linkedin" placeholder="Enter Linkedin Address"/>
      </div>
    <div class="col">
    <label htmlFor="email">Website</label>
    <input type="text" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}name="Linkedin" id="Linkedin" placeholder="Enter Website URL"/>
  </div>
  </div>
  <div className="form-group">
    <label htmlFor="about">About You</label>
    <textarea name="about" value={about} onChange={(e) => {setAbout(e.target.value)}}id="about"
              placeholder="Three or four sentences about your personality, work ethic, interests, and/or more"></textarea>
  </div>



<div className="line-break"></div>

<h2>Education</h2>

<div className="form-group">
  <label htmlFor="job-1__details">University Name</label>
  <input type="text" className="form-control" value={universityName} onChange={(e) => {setUniversityName(e.target.value)}}/>
</div>
<div className="form-group">
  <label htmlFor="job-1__details">Profession</label>
  <input type="text" className="form-control" value={profession} onChange={(e) => {setProfession(e.target.value)}}/>
</div>
<div className="form-date-group">
  <div className="form-group">
    <label htmlFor="job-1__start">Start Date</label>
    <input type="month" value={educationStartDate} onChange={(e) => {setEducationStartDate(e.target.value)}} name="job-1__start" id="job-1__start"/>
  </div>
  <div className="form-group">
    <label htmlFor="job-1__end">End Date</label>
    <input type="month" value={educationEndDate} onChange={(e) => {setEducationEndDate(e.target.value)}} name="job-1__end" id="job-1__end"/>
  </div>
</div>

<div class="add-element">
<a href="#add"><i class="fas fa-plus-circle"></i> Add Another </a>
</div>
  <div className="line-break"></div>

  <h2>Work Experience</h2>

  <h3>Most Recent Job</h3>
  <div className="form-group">
  <label htmlFor="job-1__details">Company Name</label>
  <input type="text" value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} className="form-control"/>
</div>
<div className="form-group">
  <label htmlFor="job-1__details">Position Name</label>
  <input type="text" value={positionName} onChange={(e) => {setPositionName(e.target.value)}} className="form-control"/>
</div>
  <div className="form-date-group">
    <div className="form-group">
      <label htmlFor="job-1__start">Start Date</label>
      <input type="month" value={jobStartDate} onChange={(e) => {setJobStartDate(e.target.value)}} name="job-1__start" id="job-1__start"/>
    </div>
    <div className="form-group">
      <label htmlFor="job-1__end">End Date</label>
      <input type="month" value={jobEndDate} onChange={(e) => {setJobEndDate(e.target.value)}} name="job-1__end" id="job-1__end"/>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="job-1__details">Position Details</label>
    <textarea name="job-1__details" id="job-1__details"></textarea>
  </div>

  <div className="line-break"></div>
  <h2>Skills</h2>
  <label htmlFor="job-1__details" class="input-group-label">Add Skills</label>

  <div className="input-group">
    <input type="text" value={skillName} onChange={(e) => setSkillName(e.target.value)} className="form-control"/>
    <button class="btn btn-info input-group-text" onClick={(e) => {setSkillCount(skillCount + 1);e.preventDefault()}} >Add</button>
  
  </div>
  <div class="d-flex w-100">
  {skills && skills.map(function(item){
    return (
      <div class="alert alert-secondary alert-dismissible fade show " role="alert">
    <strong>{item}</strong>
    <button  type="button" class="button-close" data-dismiss="alert" aria-label="Close" onClick={() => {skills.splice(skills.indexOf(item),1);setSkillCount(skillCount-1);setSkills(skills)}}>
    &times;
    </button>
  </div>
    )
  })}
  </div>
  {/* <div className="line-break"></div>

  <h3>Past Job</h3>

  <div className="form-date-group">
    <div className="form-group">
      <label htmlFor="job-2__start">Start Date</label>
      <input type="date" name="job-2__start" id="job-2__start"/>
    </div>
    <div className="form-group">
      <label htmlFor="job-2__end">End Date</label>
      <input type="date" name="job-2__end" id="job-2__end"/>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="job-2__details">Position Details</label>
    <textarea name="job-2__details" id="job-2__details"></textarea>
  </div>

  <div className="line-break"></div>

  <h3>Another Past Job</h3>

  <div className="form-date-group">
    <div className="form-group">
      <label htmlFor="job-3__start">Start Date</label>
      <input type="date" name="job-3__start" id="job-3__start"/>
    </div>
    <div className="form-group">
      <label htmlFor="job-3__end">End Date</label>
      <input type="date" name="job-3__end" id="job-3__end"/>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="job-3__details">Position Details</label>
    <textarea name="job-3__details" id="job-3__details"></textarea>
  </div> */}

  {/* <div className="line-break"></div>

  <div className="form-group">
    <label htmlFor="references">References</label>
    <textarea name="references" id="references"></textarea>
  </div> */}

  <div className="line-break"></div>

  <input type="submit" value="Create Resume" id="create-resume"/>
</form>
    )
}

export default ResumeForm