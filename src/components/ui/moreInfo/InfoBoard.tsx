import Modal from "../Modal";
import CurrencyContainer from "./CurrencyContainer";
import SummaryBoard from "./SummaryBoard";

export default function InfoBoard() {
  return (
    <Modal.Window windowName="More" classes="info__module grid">
      <CurrencyContainer />
      <SummaryBoard />
    </Modal.Window>
  );
}
