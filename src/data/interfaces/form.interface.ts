export interface IForm {
  _id: string;
  name: string;
  description: string;
  version: string;
  section: string;
  type: string;
  country: string;
  header: string;
  logo: string;
  groups: string[];
  status: string;
  fields: string[];
  createdAt: string;
  updatedAt: string;
}