export function UserCard(props) {
  const { user, users, setUsers } = props;

  function handleSave() {
    const newUsers = users.map((mapUser) => {
      if (mapUser.id === user.id) {
        return { ...mapUser, isSave: true };
      } else {
        return mapUser;
      }
    });
    setUsers(newUsers);
  }
  return (
    <div className="w-xs  flex flex-col items-center rounded-lg shadow-2xl">
      <div>
        <p>{user.name}</p>
      </div>
      <div>
        <p className="text-purple-700">@{user.username}</p>
      </div>
      <div>
        <p className="text-gray-400">EMAIL</p>
        <p>{user.email}</p>
      </div>
      <div>
        <p className="text-gray-400">PHONE</p>
        <p>{user.phone}</p>
      </div>
      <div>
        <p className="text-gray-400">ADDRESS</p>
        <p>
          {user.address.city}, {user.address.street}
        </p>
      </div>
      <div>
        <p className="text-gray-400">COMPANY</p>
        <p>{user.company.name}</p>
      </div>
      <button
        onClick={handleSave}
        className={`p-2 rounded-xl transition-all ease-in-out duration-300 ${user.isSave ? "bg-green-200" : "bg-blue-200"}`}
      >
        {user.isSave ? "Saved" : "Save User"}
      </button>
    </div>
  );
}
