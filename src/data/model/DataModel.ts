export interface PersonalDataModel {
    Name: string;
    Bio?: string;
    MobileNo: string;
    Email: string;
    Address: string;
    ProfilePicture: string;
    LinkedinUrl?: string;
    GithubUrl?: string;
    FacebookUrl?: string;
    XUrl?: string;
    InstagramUrl?: string;
    ResumeUrl: string;
}

export interface SkillsModel {
    Skills: []
}

export interface EducationModel {
    SchoolName: string;
    CourseName: string;
    Address: string;
    CGPA: string;
    Coursework: string[];
    StartAndEndDate: string;
    Picture: string;
}

export interface ExperienceModel {
    CompanyName: string;
    RoleName: string;
    Address: string;
    StartAndEndDate: string;
    Picture: string;
    Responsibilities?: string[];
}

export interface ProjectsModel {
    id: number;
    Name: string;
    Description: string;
    VisitUrl: string;
    LearnMoreUrl: string;
    Technologies: string[];
    Picture: string;
}

export interface DataModel {
    personalData: PersonalDataModel;
    skills: object;
    education: EducationModel[];
    experience: ExperienceModel[];
    projects: ProjectsModel[];
}