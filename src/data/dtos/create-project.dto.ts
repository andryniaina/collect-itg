export interface CreateProjectDto {
    name: string;
    description: string;
    endDate: string;
    agents?: string[];
    forms?: string[];
    responsable?: string;
    region: string;
    priority?: string;
    section?: string;
}
