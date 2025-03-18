import Nav from "../ui/Nav";
import AccountSummary from "../ui/account/AccountSummary";
import Options from "../ui/options/Options";
import ModalsContainer from "../ui/ModalsContainer";
import TransactionsBoard from "../ui/transactions/Board";
import InfoBoard from "../ui/moreInfo/InfoBoard";

export default function HomePage() {
  return (
    <>
      <Nav.Main />
      <AccountSummary />
      <Options />
      <ModalsContainer>
        <TransactionsBoard />
        <InfoBoard />
      </ModalsContainer>
    </>
  );
}
