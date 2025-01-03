import axios from "./axiosInstance";
import { CreateProjectDto } from "../data/dtos/create-project.dto";
import { IProject } from "../data/interfaces/project.interface";

export const createProject = async (projectData: CreateProjectDto) => {
  try {
    console.log("Project Data =>",projectData);
    const response = await axios.post(`project`, projectData);
    console.log("Project Created =>",response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async () : Promise<IProject[]> => {
  try {
    const response = await axios.get(`project`);
    console.log("Projects =>",response.data);
    return response.data as IProject[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateProject = async (id: string, updateDto: any) => {
  try {
    await axios.put(`project/${id}`, updateDto);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProject = async (id: string) => {
  try {
    await axios.delete(`project/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const findProject = async (id: string) => {
  try {
    const response = await axios.get(`project/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

