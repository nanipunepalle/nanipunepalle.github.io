import { PersonalDataModel } from "@/data/model/DataModel";
import styles from "../sass/page.module.scss";
import Image from "next/image";

export default function ProfileHeader(props: PersonalDataModel) {

    return (
        <>
            <div className="d-flex flex-row gap-2 align-items-center">
                <p className="flex-shrink-0 text-primary">Portfolio</p>
                <hr className="flex-grow-1"></hr>
            </div>
            <div className="d-md-flex flex-md-row align-items-start justify-content-center gap-2">
                <div className="d-flex flex-row gap-2 order-md-2 mb-2">
                    <div className="">
                        <Image unoptimized src="my_latest.png" className="img-thumbnail rounded" alt="profile-picture" height="200" width="200"></Image>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="d-flex flex-column">
                            {props.LinkedinUrl && <a href={props.LinkedinUrl} className="link-secondary"><i className="bi bi-linkedin"></i></a>}
                            {props.GithubUrl && <a href={props.GithubUrl} className="link-secondary"><i className="bi bi-github"></i></a>}
                            {props.XUrl && <a href={props.XUrl} className="link-secondary"><i className="bi bi-twitter-x"></i></a>}
                            {props.FacebookUrl && <a href={props.FacebookUrl} className="link-secondary"><i className="bi bi-instagram"></i></a>}
                            {props.InstagramUrl && <a href={props.InstagramUrl} className="link-secondary"><i className="bi bi-instagram"></i></a>}
                        </div>
                    </div>
                </div>
                <div className="flex-grow-1 order-md-1">
                    <h2>{props.Name}</h2>
                    <h6 className={styles.bio}>{props.Bio || ""}</h6>
                    <div>
                        <a className="d-flex flex-row gap-2 link-primary" href={`tel:${props.MobileNo}`}>
                            <i className="bi bi-phone text-secondary"></i>
                            <p>{props.MobileNo}</p>
                        </a>
                        <a className="d-flex flex-row gap-2 link-primary" href={`mailto:${props.Email}`}>
                            <i className="bi bi-envelope text-secondary"></i>
                            <p>{props.Email}</p>
                        </a>
                        <a className="d-flex flex-row gap-2 link-primary">
                            <i className="bi bi-geo-alt text-secondary"></i>
                            <p>{props.Address}</p>
                        </a>
                    </div>
                    <div>
                        <a className="btn btn-primary btn-sm m-3" href={props.ResumeUrl} target="_blank">Resume <i className="bi bi-cloud-arrow-down"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}