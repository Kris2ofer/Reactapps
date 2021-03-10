import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import DisplayIncome from './components/DisplayIncome';
import History from './components/History';
import { NewTransaction } from './components/NewTransaction';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <DisplayIncome />
        <History />
        <NewTransaction />
      </div>  
    </GlobalProvider>
  );
}

export default App;
