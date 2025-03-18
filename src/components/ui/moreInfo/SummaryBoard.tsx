import SummaryDetails from "./SummaryDetails";

export default function SummaryBoard() {
  return (
    <div className="info__add fl-btw">
      <SummaryDetails type="IN" output="28 035,20" />
      <SummaryDetails type="OUT" output="6 038,53" />
      <SummaryDetails type="INTEREST" output="335,10" />
    </div>
  );
}
