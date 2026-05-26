import ProfileFilter from "./ProfileFilter";
import LocationFilter from "./LocationFilter";
import DurationFilter from "./DurationFilter";
import StipendFilter from "./StipendFilter";

interface Props {
  profile: string;
  setProfile: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  stipend: number;
  setStipend: (value: number) => void;
}

export default function FilterSidebar(props: Props) {
  return (
    <aside className="bg-white rounded-2xl border p-5 h-fit sticky top-24 space-y-6">
      <h2 className="text-xl font-semibold">
        Filters
      </h2>

      <ProfileFilter
        value={props.profile}
        onChange={props.setProfile}
      />

      <LocationFilter
        value={props.location}
        onChange={props.setLocation}
      />

      <DurationFilter
        value={props.duration}
        onChange={props.setDuration}
      />

      <StipendFilter
        value={props.stipend}
        onChange={props.setStipend}
      />
    </aside>
  );
}