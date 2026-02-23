import React, { useState } from "react";
import Header from "./header"; 
function AdminLocal({keycloak}) {
   
  const [selected, setSelected] = useState(""); 

  const [users, setUsers] = useState([
    {
      id: 1,
      nom: "Malak",
      prenom: "Ettouileb",
      email: "malak@gmail.com",
      telephone: "0612345678",
      role: "transcription",
      active: true,
    },
    {
      id: 2,
      nom: "Sara",
      prenom: "Bouaalam",
      email: "sara@gmail.com",
      telephone: "0698765432",
      role: "e-service",
      active: false,
    },
  ]);

  const handleMenuChange = (e) => setSelected(e.target.value);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id: users.length + 1,
      nom: form.nom.value,
      prenom: form.prenom.value,
      email: form.email.value,
      telephone: form.telephone.value,
      role: form.role.value,
      active: true,
    };
    setUsers([...users, newUser]);
    setSelected("users");
  };

  const handleDelete = (id) => setUsers(users.filter((user) => user.id !== id));

  const toggleActive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <Header  keycloak={keycloak} />
      <div style={{ display: "flex", paddingTop: "60px" }}>
        <div
          style={{
            width: "220px",
            background: "#1e3a8a",
            color: "white",
            padding: "20px",
            minHeight: "100vh",
          }}
        >
          <h3>Admin Local</h3>
          <select
            value={selected}
            onChange={handleMenuChange}
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#1e3a8a",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <option value="">-- Menu --</option>
            <option value="users">Liste des utilisateurs</option>
            <option value="create">Ajouter utilisateur</option>
          </select>
        </div>

        <div style={{ flex: 1, padding: "40px" }}>
          {!selected && (
            <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
              Bienvenue Admin Local
            </h1>
          )}

          {selected === "users" && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>Liste des utilisateurs</h2>
                <button
                  onClick={() => setSelected("create")}
                  style={{
                    backgroundColor: "#1e3a8a",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Créer utilisateur
                </button>
                
              </div>

              <table border="1" width="100%" style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>NOM</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Rôle</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.nom}</td>
                      <td>{user.prenom}</td>
                      <td>{user.email}</td>
                      <td>{user.telephone}</td>
                      <td>{user.role}</td>
                      <td>{user.active ? "Actif" : "Inactif"}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(user.id)}
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            cursor: "pointer",
                            marginRight: "5px",
                          }}
                        >
                          Supprimer
                        </button>

                        <button
                          onClick={() => toggleActive(user.id)}
                          disabled={user.active}
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            marginRight: "5px",
                          }}
                        >
                          Activer
                        </button>

                        <button
                          onClick={() => toggleActive(user.id)}
                          disabled={!user.active}
                          style={{
                            backgroundColor: "gray",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                          }}
                        >
                          Désactiver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {selected === "create" && (
            <>
              <h2>Créer un utilisateur</h2>
              <form
                onSubmit={handleCreateUser}
                style={{
                  maxWidth: "400px",
                  backgroundColor: "#f0f0f0",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <label>Nom:</label>
                <input
                  name="nom"
                  required
                  style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
                />

                <label>Prénom:</label>
                <input
                  name="prenom"
                  required
                  style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
                />

                <label>Email:</label>
                <input
                  name="email"
                  type="email"
                  required
                  style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
                />

                <label>Téléphone:</label>
                <input
                  name="telephone"
                  type="tel"
                  required
                  style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
                />

                <label>Type:</label>
                <br />
                <input type="radio" name="role" value="transcription" required />
                Transcription
                <input
                  type="radio"
                  name="role"
                  value="e-service"
                  style={{ marginLeft: "10px" }}
                />
                E-service
                <input
                  type="radio"
                  name="role"
                  value="referentiel_local"
                  style={{ marginLeft: "10px" }}
                />
                Référentiel local
                <br />
                <br />

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#1e3a8a",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Créer
                </button>

                <button
                  type="button"
                  onClick={() => setSelected("users")}
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Annuler
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminLocal;