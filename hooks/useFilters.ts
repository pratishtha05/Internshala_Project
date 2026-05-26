"use client";

import { useMemo, useState } from "react";
import { Internship } from "@/types/internship";
import { filterInternships } from "@/utils/filters";

export const useFilters = (internships: Internship[]) => {
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [stipend, setStipend] = useState(0);

  const filteredInternships = useMemo(() => {
    return filterInternships(internships, {
      profile,
      location,
      duration,
      stipend,
    });
  }, [internships, profile, location, duration, stipend]);

  return {
    profile,
    setProfile,
    location,
    setLocation,
    duration,
    setDuration,
    stipend,
    setStipend,
    filteredInternships,
  };
};