interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function DurationFilter({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        Duration
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="">Select Duration</option>
        <option value="1 Month">1 Month</option>
        <option value="2 Months">2 Months</option>
        <option value="3 Months">3 Months</option>
        <option value="6 Months">6 Months</option>
      </select>
    </div>
  );
}