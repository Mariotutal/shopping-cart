import { create } from "zustand";

const useContactFormStore = create((set) => ({
  formData: {},
  setFormData: (data) => set({ formData: data }),
}));

export default useContactFormStore;
