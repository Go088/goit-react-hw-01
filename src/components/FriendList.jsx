export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <li key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
            </li>)}
        </ul>
    )
}

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline? "Online" : "Offline"}</p>
        </div>
    )
}

