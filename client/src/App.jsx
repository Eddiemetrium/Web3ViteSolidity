import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { TransactionsProvider } from "./context/TransactionContext";
const App = () => (
  <div className="min-h-screen">
    <TransactionsProvider>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </TransactionsProvider>
  </div>
);

export default App;
