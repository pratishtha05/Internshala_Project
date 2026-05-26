import SearchBar from "../ui/SearchBar";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationFilter({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        Location
      </label>

      <SearchBar
        value={value}
        onChange={onChange}
        placeholder="e.g. Delhi"
      />
    </div>
  );
}