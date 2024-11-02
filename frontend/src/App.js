import './App.css';
import Header from './components/header/Header';
import ListaUsers from './pages/ExibirUsuarios/ListaUsers';
import NovoUser from './pages/NovoUsuario/NovoUser';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
          <div className="App">
          <Header />
          <Routes>
            <Route path="/Criar-Usuario" element={<NovoUser />} />
            <Route path="/" element={<ListaUsers />} />
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
