import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './resumeForm.scss'
import { useHistory } from 'react-router'
export const ResumeForm = (props: any) => {
  const history = useHistory()
  const [fullName, setFullName] = useState("")
  const [title, setTitle] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [linkedinAccount, setLinkedinAccount] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [about, setAbout] = useState("")
  const [universityName, setUniversityName] = useState("")
  const [profession, setProfession] = useState("")
  let [educationStartDate, setEducationStartDate] = useState("")
  let [educationEndDate, setEducationEndDate] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [positionName, setPositionName] = useState("")
  let [jobStartDate, setJobStartDate] = useState("")
  let [jobEndDate, setJobEndDate] = useState("")
  const [image, setImage] = useState<any>(null)
  const [skillName, setSkillName] = useState("")
  const [skills, setSkills] = useState<any>([])
  const [skillCount, setSkillCount] = useState(0)
  const [hobbyName, setHobbyName] = useState("")
  const [hobbies, setHobbies] = useState<any>([])
  const [hobbyCount, setHobbyCount] = useState(0);
  const [certificateName, setCertificateName] = useState("")
  const [institutionName, setInstitutionName] = useState("")
  let [issueDate, setIssueDate] = useState("")
  let [expirationDate, setExpirationDate] = useState("")
  const [positionDetails, setPositionDetails] = useState("")
  const monthName = ["January", "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  function formSubmitted(e:any) {
    e.preventDefault()

    if (Number(jobStartDate.slice(5)) > 9) {
      jobStartDate = jobStartDate.slice(0, 4) + " " + monthName[Number(jobStartDate.slice(5)) - 1]

    } else {
      jobStartDate = jobStartDate.slice(0, 4) + " " + monthName[Number(jobStartDate.slice(6)) - 1]

    }

    if (Number(jobEndDate.slice(5)) > 9) {
      jobEndDate = jobEndDate.slice(0, 4) + " " + monthName[Number(jobEndDate.slice(5)) - 1]

    } else {
      jobEndDate = jobEndDate.slice(0, 4) + " " + monthName[Number(jobEndDate.slice(6)) - 1]

    }


    if (Number(educationStartDate.slice(5)) > 9) {
      educationStartDate = educationStartDate.slice(0, 4) + " " + monthName[Number(educationStartDate.slice(5)) - 1]

    } else {
      educationStartDate = educationStartDate.slice(0, 4) + " " + monthName[Number(educationStartDate.slice(6)) - 1]

    }


    if (Number(educationEndDate.slice(5)) > 9) {
      educationEndDate = educationEndDate.slice(0, 4) + " " + monthName[Number(educationEndDate.slice(5)) - 1]

    } else {
      educationEndDate = educationEndDate.slice(0, 4) + " " + monthName[Number(educationEndDate.slice(6)) - 1]

    }


    if (Number(expirationDate.slice(5)) > 9) {
      expirationDate = expirationDate.slice(0, 4) + " " + monthName[Number(expirationDate.slice(5)) - 1]

    } else {
      expirationDate = expirationDate.slice(0, 4) + " " + monthName[Number(expirationDate.slice(6)) - 1]

    }

    if (Number(issueDate.slice(5)) > 9) {
      issueDate = issueDate.slice(0, 4) + " " + monthName[Number(issueDate.slice(5)) - 1]

    } else {
      issueDate = issueDate.slice(0, 4) + " " + monthName[Number(issueDate.slice(6)) - 1]

    }
    props.getValue({
      fullname: fullName, image: image, skills: skills, hobbies: hobbies, address: address, phoneNumber: phoneNumber, email: email, linkedinAccount: linkedinAccount, websiteUrl: websiteUrl, title: title, about: about, universityName: universityName, profession: profession, educationStartDate: educationStartDate, educationEndDate: educationEndDate, companyName: companyName, positionName: positionName, jobStartDate: jobStartDate, jobEndDate: jobEndDate, certificateName: certificateName, institutionName: institutionName, expirationDate: expirationDate, issueDate: issueDate
    })

    axios.post("http://localhost:8800/resume",
      {
        fullname: fullName,
        title: title,
        email: email,
        address: address,
        phone: phoneNumber,
        linkedin: linkedinAccount,
        websiteUrl: websiteUrl,
        universityName: universityName,
        professionName: profession,
        universityStartDate: educationStartDate,
        universityEndDate: educationEndDate,
        companyName: companyName,
        positionName: positionName,
        jobStartDate: jobStartDate,
        jobEndDate: jobEndDate,
        positionDetails: positionDetails,
        skills: String(skills),
        certificateName: certificateName,
        institutionName: institutionName,
        certificateStartDate: issueDate,
        certificateExpirationDate: expirationDate,
        hobbies: String(hobbies)
      }).then((response) => {
        console.log(response)
        history.push("/template");
      }).catch(err => {
        console.log(err)
      }
      )


  }
  useEffect(() => {
    if (skillName) {
      skills.push(skillName)
      setSkills(skills)
      setSkillName("")
    }
  }, [skillCount, skillName, skills])
  useEffect(() => {
    if (hobbyName) {
      hobbies.push(hobbyName)
      setHobbies(hobbies)
      setHobbyName("")
    }
  }, [hobbies, hobbyCount, hobbyName])



  return (

    <form onSubmit={formSubmitted}>
      <div className="form__header">
        <h1>Build Your Resume</h1>
        <p>Enter the fields below to generate an html resume</p>
      </div>

      <h2>Personal Details</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name <span>*</span></label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} name="name" id="name" placeholder="Robert Norman Ross" />
        <div id="name__error" className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="name">Image for Resume <span>*</span></label>
        <input type="file"
        //  onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} 
         
        onChange={e => {
          setImage(String(e?.target?.files?.[0]));

        }}
         name="name" id="name" placeholder="Robert Norman Ross" />
        <div id="name__error" className="error"></div>
      </div>


      <div className="form-group">
        <label htmlFor="name">Title <span>*</span></label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="name" id="name" placeholder="Robert Norman Ross" />
        <div id="name__error" className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address <span>*</span></label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="address" placeholder="4059 Mt Lee Dr. Hollywood, CA 90068" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone <span>*</span></label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone" id="phone" placeholder="+1  123 456 7890" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email <span>*</span></label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="example@mail.com" />
        <div id="email__error" className="error"></div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Linkedin</label>
          <input type="text" value={linkedinAccount} onChange={(e) => setLinkedinAccount(e.target.value)} name="Linkedin" id="Linkedin" placeholder="Enter Linkedin Address" />
        </div>
        <div className="col">
          <label htmlFor="email">Website</label>
          <input type="text" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} name="Linkedin" id="Linkedin" placeholder="Enter Website URL" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="about">About You</label>
        <textarea name="about" value={about} onChange={(e) => { setAbout(e.target.value) }} id="about"
          placeholder="Three or four sentences about your personality, work ethic, interests, and/or more"></textarea>
      </div>



      <div className="line-break"></div>

      <h2>Education</h2>

      <div className="form-group">
        <label htmlFor="job-1__details">University Name</label>
        <input type="text" className="form-control" value={universityName} onChange={(e) => { setUniversityName(e.target.value) }} />
      </div>
      <div className="form-group">
        <label htmlFor="job-1__details">Profession</label>
        <input type="text" className="form-control" value={profession} onChange={(e) => { setProfession(e.target.value) }} />
      </div>
      <div className="form-date-group">
        <div className="form-group">
          <label htmlFor="job-1__start">Start Date</label>
          <input type="month" value={educationStartDate} onChange={(e) => { setEducationStartDate(e.target.value) }} name="job-1__start" id="job-1__start" />
        </div>
        <div className="form-group">
          <label htmlFor="job-1__end">End Date</label>
          <input type="month" value={educationEndDate} onChange={(e) => { setEducationEndDate(e.target.value) }} name="job-1__end" id="job-1__end" />
        </div>
      </div>
      <br />
      <div className="add-element">
        <a href="#add" ><i className="fas fa-plus-circle"></i> Add Another </a>
      </div>
      <div className="line-break"></div>

      <h2>Work Experience</h2>

      <h3>Most Recent Job</h3>
      <div className="form-group">
        <label htmlFor="job-1__details">Company Name</label>
        <input type="text" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="job-1__details">Position Name</label>
        <input type="text" value={positionName} onChange={(e) => { setPositionName(e.target.value) }} className="form-control" />
      </div>
      <div className="form-date-group">
        <div className="form-group">
          <label htmlFor="job-1__start">Start Date</label>
          <input type="month" value={jobStartDate} onChange={(e) => { setJobStartDate(e.target.value) }} name="job-1__start" id="job-1__start" />
        </div>
        <div className="form-group">
          <label htmlFor="job-1__end">End Date</label>
          <input type="month" value={jobEndDate} onChange={(e) => { setJobEndDate(e.target.value) }} name="job-1__end" id="job-1__end" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="job-1__details">Position Details</label>
        <textarea value={positionDetails} onChange={(e) => setPositionDetails(e.target.value)} name="job-1__details" id="job-1__details"></textarea>
      </div>

      <div className="line-break"></div>
      <h2>Skills</h2>
      <label htmlFor="job-1__details" className="input-group-label">Add Skills</label>

      <div className="input-group">
        <input type="text" value={skillName} onChange={(e) => setSkillName(e.target.value)} className="form-control" />
        <button className="btn btn-info input-group-text" onClick={(e) => { setSkillCount(skillCount + 1); e.preventDefault() }} >Add</button>

      </div>
      <div className="d-flex w-100">
        {skills && skills.map(function (item:any) {
          return (
            <div className="alert alert-secondary alert-dismissible fade show " role="alert">
              <strong>{item}</strong>
              <button type="button" className="button-close" data-dismiss="alert" aria-label="Close" onClick={() => { skills.splice(skills.indexOf(item), 1); setSkillCount(skillCount - 1); setSkills(skills) }}>
                &times;
              </button>
            </div>
          )
        })}
      </div>
      <div className="line-break"></div>

      <h2>Certificates</h2>

      <div className="form-group">
        <label htmlFor="job-1__details">Certificate Name</label>
        <input type="text" value={certificateName} onChange={(e) => { setCertificateName(e.target.value) }} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="job-1__details">Institution Name</label>
        <input type="text" value={institutionName} onChange={(e) => { setInstitutionName(e.target.value) }} className="form-control" />
      </div>
      <div className="form-date-group">
        <div className="form-group">
          <label htmlFor="job-1__start">Issue Date</label>
          <input type="month" value={issueDate} onChange={(e) => { setIssueDate(e.target.value) }} name="job-1__start" id="job-1__start" />
        </div>
        <div className="form-group">
          <label htmlFor="job-1__start">Expiration Date</label>
          <input type="month" value={expirationDate} onChange={(e) => { setExpirationDate(e.target.value) }} name="job-1__start" id="job-1__start" />
        </div>
      </div>




      <div className="line-break"></div>
      <h2>Hobbies</h2>
      <label htmlFor="job-1__details" className="input-group-label">Add Hobbies</label>

      <div className="input-group">
        <input type="text" value={hobbyName} onChange={(e) => setHobbyName(e.target.value)} onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setHobbyCount(hobbyCount + 1); e.preventDefault()
          }
        }
        }
          className="form-control" />
        <button className="btn btn-info input-group-text" onClick={(e) => { setHobbyCount(hobbyCount + 1); e.preventDefault() }} >Add</button>

      </div>
      <div className="d-flex w-100">
        {hobbies && hobbies.map(function (item:any) {
          return (
            <div className="alert alert-secondary alert-dismissible fade show " role="alert">
              <strong>{item}</strong>
              <button type="button" className="button-close" data-dismiss="alert" aria-label="Close" onClick={() => { hobbies.splice(hobbies.indexOf(item), 1); setHobbyCount(hobbyCount - 1); setHobbies(hobbies) }}>
                &times;
              </button>
            </div>
          )
        })}
      </div>
      <div className="line-break"></div>

      <input type="submit" value="Create Resume" id="create-resume" />
    </form>
  )
}

export default ResumeForm