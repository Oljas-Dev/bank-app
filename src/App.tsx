import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./components/ui/Container";
import HomePage from "./components/pages/HomePage";
import TransferMoney from "./components/pages/TransferMoney";
import { SearchUserProvider } from "./context/searchContext";
import SendToForm from "./components/pages/SendToForm";
import { CurrentUser } from "./context/currentUser";
import { Toaster } from "react-hot-toast";
import { TransactionsProvider } from "./context/transactionsContext";

function App() {
  return (
    <SearchUserProvider>
      <CurrentUser>
        <BrowserRouter>
          <Routes>
            <Route element={<Container />}>
              <Route path="home" element={<HomePage />} />
              <Route path="newtransaction" element={<TransferMoney />} />
              <Route
                path="newtransaction/:userId"
                element={
                  <TransactionsProvider>
                    <SendToForm />
                  </TransactionsProvider>
                }
              />
              <Route
                path="newloan"
                element={
                  <TransactionsProvider>
                    <SendToForm />
                  </TransactionsProvider>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrentUser>
      <Toaster />
    </SearchUserProvider>
  );
}

export default App;
