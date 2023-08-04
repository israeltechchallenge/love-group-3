import { Container, Form, FloatingLabel, Button, FormGroup } from "react-bootstrap"

export default function Login() {
    return (
        <Container className="w-50 position-relative">
            <FormGroup className="position-absolute top-50 start-50 translate-middle">
                <FloatingLabel
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Please input your name" />
                </FloatingLabel>
                <FloatingLabel
                    label="Age"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Please input your age" />
                </FloatingLabel>
                <Form.Select className="mb-3">
                    <option>Please select your interest</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="both">Both</option>
                </Form.Select>
                <Button variant="primary">Login</Button>
            </FormGroup>
        </Container>
    );
}