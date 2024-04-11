import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Footer/>  
    </div>
  );
}

export default App;
