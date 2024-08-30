import { SkillsModel } from "@/data/model/DataModel";
import styles from "../sass/page.module.scss"

export default function Skills(props: object) {

    return (
        <div id="skills" className={styles.skills}>
            <h4 className="text-primary">{"<>Skills</>"}</h4>
            <ul>
            {
                Object.entries(props).map(([key, value]) => {
                    return <li key={key}><p >{`${key}: `}<span>{value.join(", ")}</span></p></li>
                })
            }  
            </ul>
        </div>
    )
}