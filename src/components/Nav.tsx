export default function Nav() {
    return (
        <div className="navbar sticky-top justify-content-center bg-body">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active link-primary" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active link-primary" aria-current="page" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-primary" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-primary" href="#education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-primary" href="#experience">Work Experience</a>
                </li>
            </ul>
        </div>
    )
}