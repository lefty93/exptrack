import Income from "./components/Income";
import Balance from "./components/Balance";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='mt-3 flex justify-center'>Expenses Tracker</h1>
      <div className='flex flex-row mt-3 justify-around columns-3'>
        <div className=''>
          <Income />
        </div>
        <div className=''>
          <Balance />
        </div>
        <div className=''>
          <TotalExpenses />
        </div>
      </div>
      <h3 className='mt-3 flex justify-center'>Expenses</h3>
      <div className='flex flex-row mt-3 justify-center mx-auto'>
        <div className='columns-5xl'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3 flex justify-center'>Add Expenses</h3>
      <div className='flex flex-row mt-3 justify-center mx-auto'>
        <div className='columns-5xl'>
          <AddExpenseForm />
        </div>
      </div>
    </div>

  );
}

export default App;
