import React from "react";
import AdminCentral from "./AdminCentral";
import AdminLocal from "./AdminLocal";

function App({ keycloak }) {

  if (keycloak.hasRealmRole("admin-central")) {
    return <AdminCentral />;
  }

  if (keycloak.hasRealmRole("admin-local")) {
    return <AdminLocal />;
  }

  return <div>Accès refusé</div>;
}

export default App;