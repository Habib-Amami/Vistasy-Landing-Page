interface ConnectorSVGProps {
  direction: "left" | "right";
  color?: string;
}

export default function ConnectorSVG({ direction, color = "#B366FF" }: ConnectorSVGProps) {
  const isRight = direction === "right";

  return (
    <svg
      width="180"
      height="380"
      viewBox="0 0 179 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isRight ? "scale-x-[-1]" : ""}`}
    >
      <path d="M0 4L178 3.99998" stroke={color} strokeWidth="8" />
      <path d="M175 3L175 412" stroke={color} strokeWidth="8" />
    </svg>
  );
}
