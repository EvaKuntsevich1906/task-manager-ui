import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TaskPage from './pages/TaskPage/TaskPage';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<AuthPage></AuthPage>}></Route>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/task' element={<TaskPage></TaskPage>}></Route>

      </Routes>

    </div>
  );
}
export default App;
