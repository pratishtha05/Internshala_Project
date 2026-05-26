import { Internship } from "@/types/internship";
import InternshipCard from "./InternshipCard";

interface Props {
  internships: Internship[];
}

export default function InternshipList({
  internships,
}: Props) {
  return (
    <div className="space-y-5">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
        />
      ))}
    </div>
  );
}