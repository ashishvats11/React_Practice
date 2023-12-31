// import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero';
import Counter from './Component/Counter';
import Nav from './Component/Nav';
import Login from './Component/Login';
import { Routes,Route } from 'react-router-dom';
function App() {
  function parentComp(data){
    alert(data);

  }
  
  return (
    <div className="App">
     
     <Nav/>
      <Routes>
      
        <Route path="/element" element={<Hero alert={parentComp}/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Nav/>
      <Hero alert={parentComp} />
      <Counter/>
     
    </div>
  );
}

export default App;