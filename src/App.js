import Income from "./components/Income";
import Balance from "./components/Balance";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='mt-3 flex justify-center'>Expenses Tracker</h1>
      <div className='flex flex-row mt-3 justify-between'>
        <div className='columns-sm'>
          <Income />
        </div>
        <div className='columns-sm'>
          <Balance />
        </div>
        <div className='columns-sm'>
          <TotalExpenses />
        </div>
      </div>
      <h3 className='mt-3 flex justify-center'>Expenses</h3>
      <div className='flex flex-row mt-3 justify-center mx-auto'>
        <div className='columns-5xl'>
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default App;
