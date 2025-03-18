import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./components/ui/Container";
import HomePage from "./components/pages/HomePage";
import TransferMoney from "./components/pages/TransferMoney";
import { SearchUserProvider } from "./context/searchContext";
import SendToForm from "./components/pages/SendToForm";

function App() {
  return (
    <SearchUserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route path="home" element={<HomePage />} />
            <Route path="newtransaction" element={<TransferMoney />} />
            <Route path="newtransaction/:userId" element={<SendToForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchUserProvider>
  );
}

export default App;
