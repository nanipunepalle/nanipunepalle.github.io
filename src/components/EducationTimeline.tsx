import { EducationModel } from '@/data/model/DataModel';
import styles from '../sass/page.module.scss';
import Image from 'next/image';

interface EducationProps {
    education: EducationModel[]
}

export default function EducationTimeline({ education }: EducationProps) {
    return (
        <div id="education">
            <h4 className="text-primary">{"<>Education</>"}</h4>
            <div className={styles.timeline}>
                {
                    education.map(value => {
                        return (
                            <div key={value.SchoolName+value.CourseName} className={styles.timelineEvent}>
                                <div className={styles.timelineDate}>{value.StartAndEndDate}</div>
                                <div className={styles.timelineContent}>
                                    <div className="d-flex flex-row">
                                        <div className="flex-grow-1">
                                            <h3>{value.SchoolName}{" - "}<span>{value.CourseName}</span></h3>
                                            <p>{value.Address}</p>
                                            <p className={styles.cgpa}>CGPA: {value.CGPA}</p>
                                        </div>
                                        <div>
                                            <Image unoptimized alt='college-image' className="d-none d-sm-block" src={value.Picture} height="100" width="100"></Image>
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