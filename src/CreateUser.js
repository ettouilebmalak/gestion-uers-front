import { useState } from "react";

function CreateUser({ setUsers, users, goToList }) {

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    role: "",
    administration: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      ...form,
      id: users.length + 1
    };

    setUsers([...users, newUser]);

    goToList(); // retourne à la liste
  };

  return (
    <div>
      <h2>Créer un utilisateur</h2>

      <form onSubmit={handleSubmit}>

        <input name="nom" placeholder="Nom" onChange={handleChange} required />
        <br />

        <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
        <br />

        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <br />

        <input name="telephone" placeholder="Téléphone" onChange={handleChange} />
        <br />

        <select name="role" onChange={handleChange} required>
          <option value="">Choisir rôle</option>
          <option value="admin-local">Admin Local</option>
          <option value="commission">Commission</option>
          <option value="referentiel">Référentiel</option>
        </select>

        <br />

        {form.role === "admin-local" && (
          <select name="administration" onChange={handleChange} required>
            <option value="">Choisir administration</option>
            <option value="Finance">Finance</option>
            <option value="Santé">Santé</option>
          </select>
        )}

        <br />
        <button type="submit">Créer</button>

      </form>
    </div>
  );
}

export default CreateUser;