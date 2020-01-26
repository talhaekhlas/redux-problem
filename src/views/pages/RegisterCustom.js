/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import {Link,Redirect,withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import {indexTaskList} from '../../actions/IndexAction/IndexAction'
import {registration} from '../../actions/RegistrationAction/RegistrationAction'


class Register extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }

  registerSubmit = (e)=>{
      e.preventDefault()
      
      

      const {dispatch } = this.props; 

      var name = document.querySelector('#name').value;
      var email = document.querySelector('#email').value;
      var password = document.querySelector('#password').value;
      

      const formData = {
        'name':name,
        'email':email,
        'password':password,
        'password_confirmation':password,
      }

      dispatch(registration(formData,this.props));
      // localStorage.setItem('token',document.querySelector('#name').value)
      dispatch(indexTaskList());
  }
  render() {

    const checkLocalStorage = localStorage.getItem('token')
      
    let { from } = this.props.location.state || { from: { pathname: "/custom/home" } };

    // console.log('test local storage from render',checkLocalStorage)
    
    if (checkLocalStorage) return <Redirect to={from} />; 


    const indexTaskListMessage = this.props.index_task.index_task_list.message


    return (
      <>
        <div className="content">
        {indexTaskListMessage}
          <Container>
            <Row>
              
              <Col className="mr-auto" md={{size:8,offset:2}}>
                <Card className="card-register card-white">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h4">Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form className="form" onSubmit={this.registerSubmit}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Full Name" id='name' type="text" autoComplete="off" />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" id='email' type="text" />
                      </InputGroup>

                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" id='password' type="password" />
                      </InputGroup>

                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Confirm Password" id='confirm_password' type="password" />
                      </InputGroup>

                     
                    <Button
                      className="btn-round1"
                      style={{width:'100%'}}
                      color="primary"
                    //   href="#pablo"
                    //   onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Submit
                    </Button>
                 
                    </Form>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

// export default Register;


const mapStateToProps = state => ({
  index_task:state.indexReducer,
  
})

export default withRouter(connect(mapStateToProps)(Register))
