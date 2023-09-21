export default function FriendList({ friends }) {
    return (
      <ul className="friend-list" style={{listStyle:'none'}}>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.isOnline === true ? (
              <li style={{display:'flex'}}>
                <div style={{background:'green', height:10, width:20}}></div>
                <img src={friend.avatar} alt={friend.name} style={{height:80}} />
                <span>ID {friend.id}</span>
                <span>name: {friend.name} {friend.id}</span>
              </li>
            ) : (
             <li style={{display:'flex'}}><div style={{background:'red', height:10, width:20}}></div>
             <img src={friend.avatar} alt={friend.name} style={{height:80}} />
             <span>ID {friend.id}</span>
             <span>name: {friend.name} {friend.id}</span></li>   
                
            )}
          </li>
        ))}
      </ul>
    );
  }