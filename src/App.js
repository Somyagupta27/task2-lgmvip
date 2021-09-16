import Users from "./profile";
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state={users_data : [],loading:false
  }
    this.update=this.update.bind(this)
  }
  update(){
    const link="https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) =>
    {setTimeout(() => {
      this.setState({users_data :users.data ,
        loading: false
      })
    }, 2500);
    this.setState({users_data :users.data ,
      loading: true
    })
    console.log(users.data);
  })
  .catch((error)=>{
    console.error(error)
  })
  }
  render(){
  return (<>
    <nav>
      <div className="box">
        <div className="row">
          <div className="col1">
            <h1>API</h1>
          </div>
          <div className="col2">
            <button onClick={this.update}>Get User</button>
      </div>
      </div>
      </div>
    </nav>
    <div className="box2">
    <Users loading={this.state.loading} users={this.state.users_data}/>
    </div>
    </>
  )
}

}
export default App;