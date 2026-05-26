import { Internship } from "@/types/internship";
import Badge from "../ui/Badge";
import { formatLocation } from "@/utils/formatters";

interface Props {
  internship: Internship;
}

export default function InternshipCard({ internship }: Props) {
  return (
    <div className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{internship.title}</h3>

          <p className="text-gray-600 mt-1">{internship.company_name}</p>
        </div>

        {internship.company_logo ? (
          <img
            src={internship.company_logo}
            alt={internship.company_name}
            className="w-14 h-14 object-contain rounded-lg border p-1 bg-white"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 border">
            {internship.company_name?.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        <Badge
          text={
            internship.work_from_home
              ? "Work From Home"
              : formatLocation(internship.location_names)
          }
        />

        <Badge text={internship.duration} />

        <Badge text={internship.stipend.salary} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Start Date</p>

          <p className="font-medium">{internship.start_date}</p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
