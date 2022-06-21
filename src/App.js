import Navbar from "./component/Navbar";
import{ Routes,Route }from 'react-router-dom'
import Home from './pages/Home'
import Main from "./component/Main";


function App() {
  return (
    <>
      <div>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/main' element={<Main/>}/>
       </Routes>
      </div>
    </>
  );
}

export default App;
