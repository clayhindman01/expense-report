import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransationList } from './components/TransationList'
import { AddTransation } from './components/AddTransation'

import { GlobalProvider } from "./context/GlobalState"

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
