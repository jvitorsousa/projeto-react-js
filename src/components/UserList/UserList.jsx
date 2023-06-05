import "./UserList.css"

import UserListItem from "../UserListItem/UserListItem";

function UserList({ users = [], onItemClick }) {

    const handleOnItemClick =(user) => {
        onItemClick && onItemClick(user);

    }

    const usersMap= users.map((user) => {
        return (
          <UserListItem key ={user.id} user ={user} onClick={handleOnItemClick} />
        )
    });

    return ( 
        <ul className="user-list-wrapper">
        {usersMap}
        </ul>
    )
}

export default UserList