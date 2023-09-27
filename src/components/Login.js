import React, {  useEffect, useState, } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate,  } from 'react-router-dom';



 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  let navigate = useNavigate("/add")
  const home = useNavigate("/")
  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate.push("/")
    }
  }, [])

    async function login(){
     //console.warn(email, password)
     let item = { email, password };
     let result = await fetch("https://fakestoreapi.com/users", {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)

     });
     result = await result.json();
     localStorage.setItem('token-info', JSON.stringify(item));
      setIsLoggedin(true);
      setEmail('');
      setPassword('');
     
    }
  
    const logout = () => {
      localStorage.removeItem('token-info');
      setIsLoggedin(false);
  };


  const goHome = () =>{
    home("../")
  }
  


  return (
    <>
    <Container className="mb-3">
        <div style={{ textAlign: 'center' }}>
        <br></br>
            <h1>E.MARKET </h1>
            {!isLoggedin ? (
                <>
                    <form action="">
                    <Form.Group as={Row} className="mb-3" controlId="fformPlaintextEmail">
                      <Form.Label column sm="2" onChange={(e) => setEmail(e.target.value)} required >
                          Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Email" />
                      </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2" onChange={(e) => setPassword(e.target.value)}>
                          Password
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="password" placeholder="Password" />
                        </Col>
                      </Form.Group>
                        <br></br>
                        <Button variant="primary" size="lg" className="mb-3" onClick={login}>
                      Log In
                     </Button>
                    </form>
                </>
            ) : (
                <>
                    <h1>Welcome</h1>
                    <Button variant="primary" size="lg" className="mb-3" onClick={goHome}>
                    goHome
                    </Button>
                    <br></br>
                      <Button variant="primary" size="lg" className="mb-3" onClick={logout}>
                      logout
                     </Button>
                </>
            )}
        </div>
        </Container> 
    </>
);



            }
export default Login;




