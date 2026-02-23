import React, { useState } from "react";
import Administrations from "./Administrations";
import Header from "./header";
import { administrations } from "./data";

    function AdminCentral({ keycloak }) {

    const [selected, setSelected] = useState("");
    const [view, setView] = useState("list");

    const [users, setUsers] = useState([
        {
            id: 1,
            nom: "ettouileb",
            prenom: "malak",
            email: "malak@gmail.com",
            role: "instruction"
        },
        {
            id: 2,
            nom: "bouaalam",
            prenom: "sara",
            email: "sara@gmail.com",
            role: "validation"
        },
        {
            id: 3,
            nom: "benqacem",
            prenom: "adil",
            email: "adil@gmail.com",
            role: "validation"
        }
    ]);

    const handleMenuChange = (e) => {
        setSelected(e.target.value);
        setView("list");
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        const form = e.target;

        const newUser = {
            id: users.length + 1,
            nom: form.nom.value,
            prenom: form.prenom.value,
            email: form.email.value,
            role: form.role.value
        };

        setUsers([...users, newUser]);
        setView("list");
    };
    const handleDelete = (id) => {
        const newList = users.filter(user => user.id !== id);
        setUsers(newList);
    };

    return (
        <>
        <Header  keycloak={keycloak}/>
        <div style={{ display: "flex", paddingTop: "60px" }}>
        <div style={{ display: "flex" }}>

            <div style={{
                width: "220px",
                background: "#1e3a8a",
                color: "white",
                padding: "20px",
                minHeight: "100vh"
            }}>
                <h3>Admin Central</h3>

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
                        width: "100%"
                    }}
                >
                    <option value="">-- Menu --</option>
                    <option value="administrations">Administrations</option>
                    <option value="users">Liste des utilisateurs</option>
                </select>
            </div>

            <div style={{ padding: "40px", flex: 1 }}>

                {!selected && (
                    <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
                        Bienvenue sur Admin Central
                    </h1>
                )}

                {selected === "administrations" && (
                    <>
                        <h2>Listes des administrations</h2>
                        <Administrations />
                    </>
                )}

                {selected === "users" && view === "list" && (
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h2>Listes users</h2>
                            <button
                                onClick={() => setView("create")}
                                style={{
                                    backgroundColor: "#1e3a8a",
                                    color: "white",
                                    padding: "10px 20px",
                                    border: "none",
                                    cursor: "pointer"
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
                                    <th>Roles</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.nom}</td>
                                        <td>{user.prenom}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "5px 10px",
                                                    cursor: "pointer"
                                                }} >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                {selected === "users" && view === "create" && (
                    <>
                        <h2>Créer un utilisateur</h2>

                        <form onSubmit={handleCreateUser} style={{ maxWidth: "400px", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>

                            <label>Nom:</label>
                            <input name="nom" required style={{ width: "100%", marginBottom: "10px", padding: "5px" }} />

                            <label>Prénom:</label>
                            <input name="prenom" required style={{ width: "100%", marginBottom: "10px", padding: "5px" }} />

                            <label>Email:</label>
                            <input name="email" type="email" required style={{ width: "100%", marginBottom: "10px", padding: "5px" }} />

                            <label>Téléphone:</label>
                            <input name="telephone" type="tel" required style={{ width: "100%", marginBottom: "10px", padding: "5px" }} />

                            <label>Type:</label><br />
                            <input type="radio" name="role" value="admin_local" required /> Admin local
                            <input type="radio" name="role" value="commission" style={{ marginLeft: "10px" }} /> Commission
                            <input type="radio" name="role" value="referentiel" style={{ marginLeft: "10px" }} /> référentiel
                            <br /><br />

                        
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#1e3a8a",
                                    color: "white",
                                    padding: "10px 20px",
                                    border: "none",
                                    cursor: "pointer",
                                    width: "100%"
                                }}
                            >
                                Créer
                            </button>
                        </form>
                    </>
                )}

            </div>
        </div>
        </div>
        </>
    );
}

export default AdminCentral; 