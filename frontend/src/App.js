import './App.css';
import Header from './components/header/Header';
import ListaUsers from './pages/ExibirUsuarios/ListaUsers';
//import NovoUser from './pages/NovoUsuario/NovoUser';
//import EditarUsers from './pages/EditarUsuarios/EditarUsers';
import "bootstrap-icons/font/bootstrap-icons.css";





function App() {
  return (
    <div className="App">
      <Header />
      <ListaUsers />
    </div>
  );
}

export default App;
