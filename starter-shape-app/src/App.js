import './App.css';

function App() {
  return (
    <div className="app">
      <div className='triContainer'>
        <div className='red'></div>
        <div className='green'></div>
        <div className='blue'></div>
      </div>
      <div className='searchContainer'>
        <input className='searchinput' type='search' placeholder='red, green, or blue' />
      </div>
    </div>
  );
}

export default App;
