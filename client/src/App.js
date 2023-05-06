import './App.css';



function App() {

  
  var testServer = () => {
    console.log('testServer');
  }
  

  return (
    <div className="App">
      <button onClick={testServer}>test server!</button>
    </div>
  );
}

export default App;
