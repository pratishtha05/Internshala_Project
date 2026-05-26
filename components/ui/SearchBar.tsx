interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}