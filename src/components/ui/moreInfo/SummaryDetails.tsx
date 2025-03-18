interface SummaryProps {
  type: string;
  output: string;
}

export default function SummaryDetails({ type, output }: SummaryProps) {
  return (
    <div className="info__currency">
      <div className="flex">
        <p>{type}</p>
        <span
          className={`${type === "OUT" ? "negative__text" : "positive__text"}`}
        >
          {output} €
        </span>
      </div>
    </div>
  );
}
