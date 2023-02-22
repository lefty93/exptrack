import Income from "./components/Income";
import Balance from "./components/Balance";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className='container mx-auto'>
        <h1 className='my-3 flex justify-center font-caveat text-3xl'>Expenses Tracker</h1>
        <div className='flex flex-nowrap h-36'>
          <div className='flex justify-center w-1/3 h-full'>
            <Income />
          </div>
          <div className='flex justify-center w-1/3 h-full'>
            <Balance />
          </div>
          <div className='flex justify-center  w-1/3 h-full'>
            <TotalExpenses />
          </div>
        </div>
        <h3 className='mt-3 flex justify-center font-caveat text-3xl'>Expenses</h3>
        <div className='flex flex-row mt-3 justify-center mx-auto'>
          <div className='columns-5xl'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3 flex justify-center font-caveat text-3xl'>Add Expenses</h3>
        <div className='flex flex-row mt-3 justify-center mx-auto'>
          <div className='columns-5xl'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
