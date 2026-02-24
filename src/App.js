import logo from './logo.svg';
import './App.css';
import keycloak from "./keycloak";
import AdminCentral from './AdminCentral';
import AdminLocal from './AdminLocal';

function App() {
  //verifier if kecloack a charge le token d'user  sinon affiche chargement
  if (!keycloak.tokenParsed) {
    return <h1>Chargement...</h1>;
  }

  //recuperer les roles a partir des tokens de keycloack
  const roles = keycloak.tokenParsed.realm_access.roles;

  if (roles.includes("admin-central")) {
  return <AdminCentral keycloak={keycloak} />;
}
//si le rrole est admin local afficher son composant
if (roles.includes("admin-local")) {
  return <AdminLocal keycloak={keycloak} />;
}return (
  // sinon affihcer msg 
  <div style={{ textAlign: "center", marginTop: "100px", width:"100%" }}>
    <h1 >Accès refusé</h1>
    {/*button de deconnexion revenir au login*/}
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
