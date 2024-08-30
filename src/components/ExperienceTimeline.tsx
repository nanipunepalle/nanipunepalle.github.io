import { ExperienceModel } from '@/data/model/DataModel'
import styles from '../sass/page.module.scss'
import Image from 'next/image';

interface ExperienceProps {
    experience: ExperienceModel[]
}

export default function ExperienceTimeline({ experience }: ExperienceProps) {
    return (
        <div id="experience">
            <h4 className="text-primary">{"<>Work Experience</>"}</h4>
            <div className={styles.timeline}>
                {
                    experience.map(value => {
                        return (
                            <div key={value.CompanyName + value.RoleName} className={styles.timelineEvent}>
                                <div className={styles.timelineDate}>{value.StartAndEndDate}</div>
                                <div className={styles.timelineContent}>
                                    <div className="d-flex flex-row">
                                        <div className="flex-grow-1">
                                            <h3>{value.CompanyName}{" - "}<span>{value.RoleName}</span></h3>
                                            <p>{value.Address}</p>
                                            <div>
                                                <ul>
                                                    {
                                                        value.Responsibilities && value.Responsibilities.map(resp => {
                                                            return (
                                                                <li key={resp}>
                                                                    <p>
                                                                        {resp}
                                                                    </p>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <Image unoptimized alt='company-image' className="d-none d-sm-block" src={value.Picture} height="80" width="200"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}