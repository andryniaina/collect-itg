export interface IProject {
    _id: string;
    name: string;
    description: string;
    endDate: string;
    agents: string[];
    forms: string[];
    responsable: string;
    region: string;
    priority: string;
    section: string;
    status: string;
}