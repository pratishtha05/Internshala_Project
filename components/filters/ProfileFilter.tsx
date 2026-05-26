import SearchBar from "../ui/SearchBar";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ProfileFilter({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        Profile
      </label>

      <SearchBar
        value={value}
        onChange={onChange}
        placeholder="e.g. React Developer"
      />
    </div>
  );
}