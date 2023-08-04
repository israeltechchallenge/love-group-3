import { Container, Form, FloatingLabel, Button, FormGroup } from 'react-bootstrap'
import React, { useState } from 'react';

export default function Login() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [orientation, setorientation] = useState('');

    return (
        <Container className='w-50 position-relative'>
            <FormGroup className='position-absolute top-50 start-50 translate-middle' >
                <FloatingLabel
                    label='Name'
                    className='mb-3'
                >
                    <Form.Control
                        as='textarea'
                        placeholder='Please input your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel
                    label='Age'
                    className='mb-3'
                >
                    <Form.Control
                        as='textarea'
                        placeholder='Please input your age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)} />
                </FloatingLabel>
                <Form.Select className='mb-3' onChange={(e) => setorientation(e.target.value)}>
                    <option>Please select your interest</option>
                    <option value='men'>Men</option>
                    <option value='women'>Women</option>
                    <option value='both'>Both</option>
                </Form.Select>
                <Button variant='primary' type='button'>Login</Button>
            </FormGroup>
        </Container>
    );
}