import { Condition, Validation } from "../interfaces/FormBuilderTypes";

export interface UpdateFieldsDto {
    fields: Field[];
}

export interface Field {
    type: string;
    name: string;
    title: string;
    required: boolean;
    default: string;
    guidance: string;
    conditions: Omit<Condition, "id">[];
    validations: Omit<Validation, "id">[];
}