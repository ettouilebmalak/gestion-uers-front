import logo from './logo.svg';
import './App.css';
import keycloak from "./keycloak";
import AdminCentral from './AdminCentral';

function App() {

  if (!keycloak.tokenParsed) {
    return <h1>Chargement...</h1>;
  }

  const roles = keycloak.tokenParsed.realm_access.roles;

  if (roles.includes("admin-central")) {
    return <AdminCentral/>;
  }

  if (roles.includes("admin-local")) {
    return <h1>Admin Local</h1>;
  }
  return <h1>Accès refusé</h1>;
}

export default App;
