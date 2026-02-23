import logo from './logo.svg';
import './App.css';
import keycloak from "./keycloak";
import AdminCentral from './AdminCentral';
import AdminLocal from './AdminLocal';

function App() {

  if (!keycloak.tokenParsed) {
    return <h1>Chargement...</h1>;
  }

  const roles = keycloak.tokenParsed.realm_access.roles;

  if (roles.includes("admin-central")) {
  return <AdminCentral keycloak={keycloak} />;
}

if (roles.includes("admin-local")) {
  return <AdminLocal keycloak={keycloak} />;
}return (
  <div style={{ textAlign: "center", marginTop: "100px", width:"100%" }}>
    <h1 >Accès refusé</h1>
    
    <button
      onClick={() =>
        keycloak.logout({
          redirectUri: window.location.origin
        })
      }
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#1e3a8a",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
    >
      Retour au login
    </button>
  </div>
);
  
}
export default App;
