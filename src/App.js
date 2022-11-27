import './App.css';
import Nav from './components/nav';
import {Routes,Route} from 'react-router-dom'
import Div1 from './components/div1'
import Div2 from './components/div2'
import Profile from './components/profile'

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path = '/' element = {<Div2 />}></Route>
        <Route path = '/store' element = {<Div1 />}></Route>
        <Route path = '/iphone' element = {<Div1 />}></Route>
        <Route path = '/ipad' element = {<Div1 />}></Route>
        <Route path = '/login' element = {<Profile />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
