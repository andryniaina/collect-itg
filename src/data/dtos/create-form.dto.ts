export interface CreateFormDto {
  name: string;
  description: string;
  version?: string;
  section: string;
  type: string;
  country: string;
  header?: string;
  logo?: string;
}
