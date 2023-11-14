import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import api from '../api'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)

        await api.post('/login', formData).then((response) => {
            localStorage.setItem('token', response.data.token)
            navigate('/product')
        })
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={12} lg={12} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                    <p className=" mb-5">Please enter your username and password!</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login