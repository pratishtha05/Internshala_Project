interface Props {
  count: number;
}

export default function InternshipHeader({
  count,
}: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold">
        Latest Internships
      </h2>

      <p className="text-gray-500 mt-2">
        {count} total internships found
      </p>
    </div>
  );
}