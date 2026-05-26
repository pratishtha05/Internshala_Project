interface Props {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
      {text}
    </span>
  );
}