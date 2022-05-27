import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Components/Form';

import Preview from './Components/Preview';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact='true' element={<Form></Form>}></Route>
        </Routes>

        <Routes>
          <Route path='/pre' exact='true' element={<Preview />}></Route>
        </Routes>
      </Router>
      {/* <div className='parent'>

     <Form />
    <Preview  />
  </div> */}
    </>
  );
}

export default App;
