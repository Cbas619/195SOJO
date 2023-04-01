import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { MainNav } from '../components/Main/MainNav';


export function PaymentConfirmation() {
    return (
        <Container align='center'>
            <MainNav/>
            <br></br>
            <br></br>
            <Form.Label>Payment Successful!</Form.Label>
        </Container>

        
    ); // end return
}