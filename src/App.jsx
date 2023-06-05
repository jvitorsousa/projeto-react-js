import { useState } from "react";
import UserList from "./components/UserList/UserList";

 function App() {

  // eslint-disable-next-line no-undef
  const [selected, setSelected] = useState(null);

  const users = [
    {
      id: 0,
      name: 'Harry Styles'
    },

    {
      id:1,
      name:'Louis Tomlinson'
    },

    {
      id:2,
      name:'Zayn Malyk'
    },

    {
      id:3,
      name:'Nail Horran'
    },
  ]

 const handleOnItemClick = (user) => {
   setSelected(user)
 }

  return (
    <div>
     <h1>Usuários</h1>
     { selected && (
      <p>Selecionado: {selected.name}</p>
     )}

     <UserList users={users} onItemClick={handleOnItemClick} />
    </div>
  );
}

export default App;
