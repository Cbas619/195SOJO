import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { MainNav } from '../components/Main/MainNav';
import { MainCategories } from '../components/Main/MainCategories';

export function PaymentConfirmation() {

    const styles = {
        background: {
        backgroundColor: 'white',
        //width: '14.9vw',
        height: '100vh',
        paddingTop: '30px',
        borderRadius: '10px'
        }
      }
    return (
        <>
            <MainNav/>
            <MainCategories/>
        <div className="background-1">
            <div className="ordersPageContainer">
                <Container style={styles.background} align="center">
                    <div className="ordersPageHeader">Payment Successful!</div>
                <div className="orderLine-1"></div>
                <Form.Label>Payment Successful!</Form.Label>
                </Container>
            </div>
        </div>
        </>

        
    ); // end return
}