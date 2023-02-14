/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "services/common/instance";

export const getDemoService = async (): Promise<any> => {
  const response = await axiosInstance.get("https://jsonplaceholder.typicode.com/todos");
    return response?.data;
};

export const placeholder = null;
