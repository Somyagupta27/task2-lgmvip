import React from 'react'
const Users=({loading,users})=>{

    return loading ?(
    <div id="main">
   <img className="loader" src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif?cid=ecf05e477x2zfhpt5euj1xxxndrj95f7fed3oxc48ztkt0pf&rid=giphy.gif&ct=g "/>
    </div>
    ):
    (
        <div id="main">
            {users.map(user =>
            <div className="project col3">
                {
                    console.log(user)
                }
            <div className="profile">
                <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                <h1 className="name">{user.first_name} {user.last_name}</h1>
                <p className="email"> {user.email}</p>
                <p>User ID:{user.id}</p>
                </div>
            </div>
    )
}
</div>
)
}
export default Users;