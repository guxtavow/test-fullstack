import './App.css';
import Header from './components/header/Header';
//import ListaUsers from './pages/ExibirUsuarios/ListaUsers';
import "bootstrap-icons/font/bootstrap-icons.css";
import NovoUser from './pages/NovoUsuario/NovoUser';




function App() {
  return (
    <div className="App">
      <Header />
      <NovoUser />
    </div>
  );
}

export default App;
