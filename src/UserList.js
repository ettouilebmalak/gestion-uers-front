function UserList({ users }) {
  return (
    <div>
      <h2>Liste des utilisateurs</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Administration</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom} {user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.administration || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;