import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import Menu from './pages/Menu';
import MyPage from './pages/MyPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Store from './pages/Store';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inquiry" element={<Inquiry />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
