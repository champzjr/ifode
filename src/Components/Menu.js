import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';

class Menu extends Component {
  state = {
    users: [],
  };

  componentWillMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => { this.setState({ users: json }); console.log(this.state) });
    // this.setState
  };

  render() {
    return (

      <div className="Menu">
        {this.state.users.map(user => (
          <Row key={user.id}>
            <Col m={4} s={4} key={user.id}>
              <Card key={user.id} header={<div className="card-image"><img src="https://source.unsplash.com/800x600/?duck" alt=""/></div>} title={user.name} reveal={"Horário: 20:30 as 06:00 Endereço: "+ user.address.city + ", " + user.address.street + ", " + user.address.suite + "\n\n " + user.website }>
                <p>
                  Valor: R$ 200,00 <br/>telefone:{user.phone}<br/>
                  <a href="/qualquercoisaainafrente">
                    Ver perfil
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
export default Menu;