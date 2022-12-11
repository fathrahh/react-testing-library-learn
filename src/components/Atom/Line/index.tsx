interface Props {
  color: string;
}

export default function Line({ color }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: color ?? "#14905",
      }}
    />
  );
}
