import React, { Component } from 'react';
import {StyledFooter, Names, Name} from './Footer.styles'


export class Footer extends Component{
  state = {users: []}
  




  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render(){
    return(
        <StyledFooter>
            <Names> {this.state.users.map(user =>
            
              <Name key={user.id}>
                  {user.username}
              </Name>)}
            
            </Names>
        </StyledFooter>
        
    );
  }
}