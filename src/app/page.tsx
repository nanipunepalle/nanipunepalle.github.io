
// import "bootstrap/dist/css/bootstrap.min.css";
import "@/sass/custom.scss"
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./page.module.css
// import styles from './page.module.css'
import ProfileHeader from "@/components/ProfileHeader";
import { data } from "@/data/personData";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="container" style={{ maxWidth: "900px" }}>
      <div style={{ margin: '10px' }}>
        <ProfileHeader {...data.personalData}></ProfileHeader>
        <Nav></Nav>
        <Skills {...data.skills}></Skills>
        <hr></hr>
        <Projects projects={data.projects}></Projects>
        <hr></hr>
        <EducationTimeline education={data.education}></EducationTimeline>
        <hr></hr>
        <ExperienceTimeline experience={data.experience}></ExperienceTimeline>
        <hr></hr>
      </div>
    </main>
  )
}