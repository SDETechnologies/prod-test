import './App.css';



function App() {

  
  var testServer = async () => {
    console.log('testServer()');
    await fetch('https://cra-cloud-run-snc4sjprxq-uc.a.run.app/api/testserver')
    .then(res => res.json())
    .then(data => {
      console.log('data: ', data);
    })
    .catch(err => console.log('error: ', error));
  }
  

  return (
    <div className="App">
      <button onClick={testServer}>test server!</button>
    </div>
  );
}

export default App;
