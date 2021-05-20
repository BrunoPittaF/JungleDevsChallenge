import api from "../api";

export const formService = {
  async postForm(name: string, email: string): Promise<any> {
    try {
      const response = await api.post("challenge-newsletter/", {
        name: name,
        email: email,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
