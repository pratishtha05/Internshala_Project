import internshipsData from "@/data/internships.json";
import { Internship } from "@/types/internship";

export const fetchInternships = async (): Promise<Internship[]> => {
  try {
    return internshipsData.internships_meta
      ? Object.values(
          internshipsData.internships_meta
        ) as Internship[]
      : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};