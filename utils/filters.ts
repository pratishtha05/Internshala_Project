import { Internship } from "@/types/internship";

interface FilterOptions {
  profile: string;
  location: string;
  duration: string;
  stipend: number;
}

export const filterInternships = (
  internships: Internship[],
  filters: FilterOptions
) => {
  return internships.filter((item) => {
    const matchesProfile =
      !filters.profile ||
      item.title.toLowerCase().includes(filters.profile.toLowerCase());

    const matchesLocation =
      !filters.location ||
      item.location_names.some((loc) =>
        loc.toLowerCase().includes(filters.location.toLowerCase())
      );

    const matchesDuration =
      !filters.duration ||
      item.duration.toLowerCase().includes(filters.duration.toLowerCase());

    const stipendAmount = parseInt(
      item.stipend.salary.replace(/[^\d]/g, "")
    );

    const matchesStipend =
      !filters.stipend || stipendAmount >= filters.stipend;

    return (
      matchesProfile &&
      matchesLocation &&
      matchesDuration &&
      matchesStipend
    );
  });
};