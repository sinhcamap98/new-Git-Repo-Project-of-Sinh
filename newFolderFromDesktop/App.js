import logo from './logo.svg';
import './App.css';

function App() {

  const handleOnChange = (s) => {
    const file = s.target.files[0]

    console.log(URL.createObjectURL(file));
  }

  return (

    <div className="App">
        <input type='file' onChange={handleOnChange}></input>
    </div>
  );
}

export default App;
