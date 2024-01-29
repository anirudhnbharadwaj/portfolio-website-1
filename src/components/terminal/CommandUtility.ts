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
      <b style="color: #fc5b57">Course:</b> ${item.title} <br/>
      <b style="color: #fc5b57">College:</b> ${item.desc} <br/>
      <b style="color: #fc5b57">CGPA:</b> ${item.CGPA}
    `
  ),
  achievements: Achievements.map(
    (item) => `
      <b style="color: #fc5b57">• </b>${item.one}<br/>
      <b style="color: #fc5b57">• </b>${item.two}<br/>
      <b style="color: #fc5b57">• </b>${item.three}<br/>
      <b style="color: #fc5b57">• </b>${item.four}<br/>
    `
  ),
  
  clear: [],
  help: HelpUser.map(
    (item) => `
      <b style="color: #fc5b57">whoami :</b> ${item.whoami} <br/>
      <b style="color: #fc5b57">experience :</b> ${item.experience} <br/>
      <b style="color: #fc5b57">education :</b> ${item.education} <br/>
      <b style="color: #fc5b57">skills :</b> ${item.skills} <br/>
      <b style="color: #fc5b57">publications :</b> ${item.publications} <br/>
      <b style="color: #fc5b57">achievements :</b> ${item.achievements} <br/>
      <b style="color: #fc5b57">github :</b> ${item.github} <br/>
      <b style="color: #fc5b57">linkedin :</b> ${item.LinkedIn} <br/>
      <b style="color: #fc5b57">contact :</b> ${item.Contact} <br/>
      <b style="color: #fc5b57">clear :</b> ${item.clear}
    `
  ),

  skills: Skills.map(
    (item) => `

      <b style="color: #fc5b57">Programming Languages :</b> <br/> &emsp; &emsp; 
          <i style="color: #fc5b57"> Proficient: </i> ${item.programming_languages.proficient}<br/> &emsp; &emsp; 
          <i style="color: #fc5b57"> Familiar: </i> ${item.programming_languages.familiar} <br/>

      <b style="color: #fc5b57">Other Tools :</b> ${item.Tools} <br/>
    `
  ),

  publications: Publications.map(
    (item) => `
      <b style="color: #fc5b57"> Published on IEEE </b> <br/>
      ${item.image_caption} <br/>
      <a href="${item.url}" target="_blank">${item.url}</a>
    `
  ),


  github: Github.map(
    (item) => `
      <a href="${item.gh_handle}" target="_blank"><b style="color: #fc5b57">Github Handle </b> <br/>${item.gh_handle}</a>
    `
  ),


  linkedin: Linkedin.map(
    (item) => `
      <b style="color: #fc5b57">LinkedIn Handle </b> <br/>
      <a href="${item.linkedin}" target="_blank">${item.linkedin}</a>
    `
  ),

  contact: Contact.map(
    (item) => `
      <b style="color: #fc5b57">Email Address </b> <br/>
      ${item.email}
    `
  ),

  experience: Experience.map(
    (item) => `
      <b style="color: #fc5b57">${item.freelance}</b> <br/>
      ${item.role} <br/>

      <b style="color: #fc5b57">${item.cyclops}</b> <br/>
      ${item.cyclops_role} <br/>
      ${item.cyclops_internship} <br/>
    `
  ),
};
