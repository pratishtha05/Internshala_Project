"use client";

import { useEffect, useState } from "react";
import { Internship } from "@/types/internship";
import { fetchInternships } from "@/services/internshipApi";

export const useInternships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInternships = async () => {
      try {
        const data = await fetchInternships();
        setInternships(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadInternships();
  }, []);

  return { internships, loading };
};