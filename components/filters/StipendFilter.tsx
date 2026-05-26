interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function StipendFilter({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        Minimum Stipend
      </label>

      <input
        type="range"
        min={0}
        max={50000}
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <p className="text-sm text-gray-500 mt-2">
        ₹ {value}
      </p>
    </div>
  );
}