export default function EmptyState() {
  return (
    <div className="bg-white border rounded-2xl p-10 text-center">
      <h3 className="text-2xl font-semibold">
        No internships found
      </h3>

      <p className="text-gray-500 mt-2">
        Try changing your filters
      </p>
    </div>
  );
}