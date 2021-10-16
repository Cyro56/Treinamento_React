import './App.css'
import SayMyName from './Components/SayMyName'
import Pessoa from './Components/Pessoa'
import Frase from './Components/Frase'
import List from "./Components/List"


function App() { 
  
  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando Css</h1>
      <Frase/>  
      <Frase/>    
      <SayMyName nome="Cyro"/>
      <SayMyName nome="Caio"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Cyro" 
      idade="25" 
      profissao="Dev" 
      foto="https://via.placeholder.com/150"/>
      <List/>      
    </div>
  );
}

export default App;
