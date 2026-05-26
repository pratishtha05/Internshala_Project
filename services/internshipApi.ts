import { Internship } from "@/types/internship";

const API_URL = "https://internshala.com/hiring/search";

export const fetchInternships = async (): Promise<Internship[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch internships");
  }

  const data = await response.json();

  return data.internships_meta
    ? Object.values(data.internships_meta)
    : [];
};