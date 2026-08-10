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
    <div>
     <div className="w-xs  flex flex-col items-center rounded-2xl shadow-2xl relative">

      <div className="h-30 bg-linear-to-r from-violet-500 to-fuchsia-500 w-full rounded-t-2xl"></div>

      <img src={`https://i.pravatar.cc/100?img=${user.id}`} className="rounded-full absolute top-16 border-white border-8"/>

      <div className="flex flex-col items-center pt-15">
        <div>
        <p className="text-2xl">{user.name}</p>
      </div>
      <div>
        <p className="text-purple-700">@{user.username}</p>
      </div>

      <div className="flex gap-5 w-full p-3">
        <div className="bg-gray-200 rounded-md text-2xl p-1 h-11">✉️</div>

        <div>
        <p className="text-gray-400">EMAIL</p>
        <p>{user.email}</p>
        </div>
      </div>

      <div className="flex gap-5 w-full p-3">
        <div className="bg-gray-200 rounded-md text-2xl p-1 h-11">📞</div>

       <div>
        <p className="text-gray-400">PHONE</p>
        <p>{user.phone}</p>
       </div>
      </div>

      <div className="flex gap-5 w-full p-3">
        <div className="bg-gray-200 rounded-md text-2xl p-1 h-11">📍</div>

       <div>
         <p className="text-gray-400">ADDRESS</p>
         <p>
          {user.address.city}, {user.address.street}
         </p>
       </div>
      </div>

      <div className="flex gap-5 w-full p-3">
        <div className="bg-gray-200 rounded-md text-2xl p-1 h-11">🏢</div>

       <div>
         <p className="text-gray-400">COMPANY</p>
         <p>{user.company.name}</p>
       </div>
      </div>

      <button
        onClick={handleSave}
        className={`m-2 p-2 rounded-xl transition-all ease-in-out duration-300 ${user.isSave ? "bg-green-200" : "bg-blue-200"}`}
      >
        {user.isSave ? "Saved" : "Save User"}
      </button>
      </div>
      
    </div>
    </div>
  )
}