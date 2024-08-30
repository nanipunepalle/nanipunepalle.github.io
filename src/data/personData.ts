import { DataModel, EducationModel, ExperienceModel, PersonalDataModel, ProjectsModel, SkillsModel } from "./model/DataModel"

const personalData: PersonalDataModel = {
  Name: "Lalith Sagar Punepalle Raveendrareddy",
  Bio: "MS CS @ Stony Brook University | Ex Software Engineer @ Infineon Technologies",
  MobileNo: "+1 615 282-6665",
  Email: "lalithpunepalle@gmail.com",
  Address: "700 Health Sciences Drive, Chapin-D-1056A, Stony Brook, NY - 11790, USA",
  ProfilePicture: "",
  LinkedinUrl: "https://www.linkedin.com/in/lalith-punepalle-605480167/",
  GithubUrl: "https://github.com/nanipunepalle",
  FacebookUrl: "",
  XUrl: "https://x.com/iamlalithreddy",
  InstagramUrl: "https://www.instagram.com/iamlalith_reddy?igsh=a3U5Ynpiejk0bGZm&utm_source=qr",
  ResumeUrl: "https://drive.google.com/file/d/12drFviVGG0ASqdLuMMO2xJ0ghsJuUxB7/view?usp=share_link"
}

const skills: object = {
  "Languages and Technologies": ["Javascript", "Python", "C#", "HTML", "CSS", "Typescript", "React.js", "Flask", '.NET', "SPFX", "Sharepoint", "Swift", "SwiftUI"],
  "Tools and Platforms": ["Git", "Docker", "Kubernetes", "Openshift", "Azuredevops", "Sharepoint", "Visual Studio"],
  "Databases": ["SQL", "MongoDB", "Redis"]
}

const educationData: EducationModel[] = [
  {
    SchoolName: "Stony Brook University",
    CourseName: "Master of Science in Computer Science",
    Address: "Stony Brook, NY",
    CGPA: "NA/4",
    Coursework: ["Human Computer Interaction", "Data Science Fundamentals", "Introduction to computer vision"],
    StartAndEndDate: "AUG 2024 - DEC 2025",
    Picture: "education/SBU.png"
  },
  {
    SchoolName: "Vellore Institute of Technology",
    CourseName: "M Tech (integrated) Software Engineering",
    Address: "Vellore, India",
    CGPA: "9.08/10",
    Coursework: ["Human Computer Interaction", "Data Science Fundamentals", "Introduction to computer vision"],
    StartAndEndDate: "JUL 2018 - MAY 2023",
    Picture: "education/VIT.png"
  },
]

const experienceData: ExperienceModel[] = [{
  CompanyName: "Infineon Technologies",
  RoleName: "Software Engineer",
  Address: "Bengaluru, India",
  StartAndEndDate: "JUN 2023-AUG 2024",
  Picture: "experience/infineon.png",
}, {
  CompanyName: "Infineon Technologies",
  RoleName: "Student Intern",
  Address: "Bengaluru, India",
  StartAndEndDate: "AUG 2022 - MAY 2023",
  Picture: "experience/infineon.png"
}]


const projectsData: ProjectsModel[] = [
  {
    id: 0,
    Name: "EllipseApp Web Application",
    Description: "Application to host and organize college events and hackathons",
    VisitUrl: "https://ellipse-e2428.web.app",
    LearnMoreUrl: "",
    Technologies: ["React.js", "Node.js", "MongoDB", "Redis"],
    Picture: "projects/ellipseapp.png"
  },
  {
    id: 2,
    Name: "SnippetBook Web Application",
    Description: "Application to store and share code snippets",
    VisitUrl: "https://github.com/nanipunepalle/snippet_book_server",
    LearnMoreUrl: "",
    Technologies: ["React.js", "flask", "MongoDB"],
    Picture: ""
  },
  {
    id: 3,
    Name: "Mic iOS Application",
    Description: "Application to use iPhone as mic which tramsmits audio to connected devices, record your audio and also transcripts your audio to text",
    VisitUrl: "https://github.com/nanipunepalle/Mic-iOS",
    LearnMoreUrl: "",
    Technologies: ["Swift", "SwiftUI"],
    Picture: ''
  },
  {
    id: 4,
    Name: "Speedo Meter iOS Application",
    Description: "iOS Application to know the speed of vehicle you are moving or your walking speed",
    VisitUrl: "https://github.com/nanipunepalle/speedometer-iosapp",
    LearnMoreUrl: "",
    Technologies: ["Swift", "SwiftUI"],
    Picture: ''
  },
  {
    id: 6,
    Name: "Butterfly Predection",
    Description: "Flask Application to predict butterfly species",
    VisitUrl: "https://github.com/nanipunepalle/image-classification-using-CNN",
    LearnMoreUrl: "",
    Technologies: ["Python", "Tensorflow", "Flask"],
    Picture: ''
  },
  {
    id: 7,
    Name: "Easykart",
    Description: "Web application for restaurant or store management. I have developed backend of the application using Node.js and MongoDB",
    VisitUrl: "https://easykart.centralindia.cloudapp.azure.com/navtabs/home",
    LearnMoreUrl: "",
    Technologies: ["Node.js", "MongoDB"],
    Picture: ''
  }
]

export const data: DataModel = {
  personalData: personalData,
  skills: skills,
  education: educationData,
  experience: experienceData,
  projects: projectsData
}