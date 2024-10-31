import {
  HelpUser,
  WhoamI,
  EducationQualifications,
  Skills,
  Publications,
  Github,
  Linkedin,
  Achievements,
  Contact,
  Experience,
} from "./commands/HelpUser";

export const commands: Record<string, string | string[]> = {
  // Information about the user
  whoami: WhoamI.map(
    (item) => `${item.name} <br/> ${item.profession} <br/> ${item.company}`
  ),
  // Education Qualifications
  education: EducationQualifications.map(
    (item) => `
      <b style="color: #e98607">Course:</b> ${item.title} <br/>
      <b style="color: #e98607">College:</b> ${item.desc} <br/>
      <b style="color: #e98607">CGPA:</b> ${item.CGPA}<br/>
      <b style="color: #e98607">WES Course-by-Course Evaluation:</b> ${item.WES}
    `
  ),
  achievements: Achievements.map(
    (item) => `
      <b style="color: #e98607">• </b>${item.one}<br/>
      <b style="color: #e98607">• </b>${item.two}<br/>
      <b style="color: #e98607">• </b>${item.three}<br/>
      <b style="color: #e98607">• </b>${item.four}<br/>
    `
  ),
  
  clear: [],
  help: HelpUser.map(
    (item) => `
      <b style="color: #e98607">whoami :</b> ${item.whoami} <br/>
      <b style="color: #e98607">experience :</b> ${item.experience} <br/>
      <b style="color: #e98607">education :</b> ${item.education} <br/>
      <b style="color: #e98607">skills :</b> ${item.skills} <br/>
      <b style="color: #e98607">publications :</b> ${item.publications} <br/>
      <b style="color: #e98607">achievements :</b> ${item.achievements} <br/>
      <b style="color: #e98607">github :</b> ${item.github} <br/>
      <b style="color: #e98607">linkedin :</b> ${item.LinkedIn} <br/>
      <b style="color: #e98607">contact :</b> ${item.Contact} <br/>
      <b style="color: #e98607">clear :</b> ${item.clear}
    `
  ),

  skills: Skills.map(
    (item) => `

      <b style="color: #e98607">Programming Languages :</b> <br/> &emsp; &emsp; 
          <i style="color: #e98607"> Proficient: </i> ${item.programming_languages.proficient}<br/> &emsp; &emsp; 
          <i style="color: #e98607"> Familiar: </i> ${item.programming_languages.familiar} <br/>

      <b style="color: #e98607">Other Tools :</b> ${item.Tools} <br/>
    `
  ),

  publications: Publications.map(
    (item) => `
      <b style="color: #e98607"> Published on IEEE </b> <br/>
      ${item.image_caption} <br/>
      <a href="${item.url}" target="_blank">${item.url}</a>
    `
  ),


  github: Github.map(
    (item) => `
      <a href="${item.gh_handle}" target="_blank"><b style="color: #e98607">Github Handle </b> <br/>${item.gh_handle}</a>
    `
  ),


  linkedin: Linkedin.map(
    (item) => `
      <b style="color: #e98607">LinkedIn Handle </b> <br/>
      <a href="${item.linkedin}" target="_blank">${item.linkedin}</a>
    `
  ),

  contact: Contact.map(
    (item) => `
      <b style="color: #e98607">Email Address </b> <br/>
      ${item.email}
    `
  ),

  experience: Experience.map(
    (item) => `
      <b style="color: #e98607">${item.Equidor_CV_Engineer}</b> <br/>
      ${item.Equidor_CV_Engineer_role} <br/>

      <b style="color: #e98607">${item.Equidor_CV_Consultant}</b> <br/>
      ${item.Equidor_CV_Consultant_role} <br/>

      ${item.cyclops_internship} <br/>
    `
  ),
};
