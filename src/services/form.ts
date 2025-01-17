import axios from "./axiosInstance";
import { CreateFormDto } from "../data/dtos/create-form.dto";
import { UpdateFieldsDto } from "../data/dtos/update-fields.dto";
import { DeleteFormsDto } from "../data/dtos/detele-forms.dto";

export const createForm = async (formData: CreateFormDto) => {
  try {
    console.log("Form Data =>", formData);
    const response = await axios.post(`forms`, formData);
    console.log("Form Created =>", response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const getForms = async () => {
  try {
    const response = await axios.get("forms");
    console.log('Forms =>',response.data);
    return response.data;
  } catch (error) {
    console.error(error) ;
    return [];
  }
};

export const deleteForm = async(formId: string) => {
  try {
    await axios.delete(`forms/${formId}`) ;
  } catch(error) {
    console.error(error) ;
  }
}

export const deleteForms = async(data: DeleteFormsDto) => {
  try {
    await axios.post(`forms/delete`, data) ;
  } catch(error) {
    console.error(error) ;
  }
}

export const updateFields = async(id: string, updateDto: UpdateFieldsDto) => {
  try {
    await axios.put(`forms/${id}`,updateDto) ;
  } catch(error) {
    console.error(error) ;
  }
}

export const findForm = async(id:string) => {
  try {
    const response = await axios.get(`forms/${id}`) ;
    return response.data
  } catch(error) {
    console.error(error)
  }
}