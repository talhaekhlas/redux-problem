
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { connect } from 'react-redux'
import {Redirect,withRouter } from "react-router-dom";
import {login} from '../../actions/LoginAction/LoginAction'


class Login extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  loginPlease = (e)=>{
    e.preventDefault()
    
    const {dispatch } = this.props; 
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    
    const formData = {'email':email,'password':password}

    dispatch(login(formData,this.props));
    // localStorage.setItem('token',document.querySelector('#name').value)
    // dispatch(indexTaskList());
  }
  render() {
    const checkLocalStorage = localStorage.getItem('token')
    

    console.log('login local storage check',checkLocalStorage)
    
      
    let { from } = this.props.location.state || { from: { pathname: "/custom/home" } };
    
    if (checkLocalStorage) return <Redirect to={from} />;
    return (
      <>
        
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md={{size:8,offset:2}}>
              <Form className="form" onSubmit = {this.loginPlease}>
                <Card className="card-login card-white">
                  <CardHeader>
                    <img
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h1">Log in</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" id="email" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" id="password" />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      type = "submit"
                      color="primary"
                      // href="#pablo"
                      // onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}



const mapStateToProps = state => ({
  login:state.loginReducer,
  
})

export default withRouter(connect(mapStateToProps)(Login))
