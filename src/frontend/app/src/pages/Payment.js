import { MainNav } from "../components/Main/MainNav";
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';




export function Payment() {
  return (
  <>
  <MainNav/>
  <Container>
    <div>
      <div className="py-3 bg-primary">
        <div className="container">
          <h5><strong>Checkout</strong></h5>
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">

            <div className="col-md-7">
              <div className="card">
                  <div className="card-header">
                    <h4> Customer Info</h4>
                  </div>
                  <div className="card-body">

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group- md-3">
                          <label> First Name</label>
                          <input type="text" name="firstname" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group- md-3">
                          <label> Last Name</label>
                          <input type="text" name="firstname" className="form-control"/>
                        </div>
                      </div>
                      <div className="row-md-6">
                        <div className="form-group- md-3">
                          <label> Email </label>
                          <input type="text" name="email" className="form-control"/>
                        </div>
                      </div>
                      <div className="row-md-6">
                        <div className="form-group- md-3">
                          <label> Address </label>
                          <input type="text" name="address" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group- md-3">
                          <label> City</label>
                          <input type="text" name="city" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group- md-3">
                          <label> State</label>
                          <input type="text" name="state" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group- md-3">
                          <label> Zip Code</label>
                          <input type="text" name="zip" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group text-end">
                        <button type="button" className="btn btn-success mx-1">Place Order</button>
                      </div>

                    
                    </div>
                  </div>
              </div>

            </div>

            <div className="col-md-5">
                <table className="table table-bordered">
                    <thread>
                      <tr>
                        <th>Order Summary</th>     
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>             
                      </tr>                    
                    </thread>
                    <tbody>
                      <tr>
                        <th>Iphone 14</th>
                        <td>$999</td>
                        <td>1</td>
                        <td>$1200</td>                       
                      </tr>
                    </tbody>
                </table>
              </div>

          </div>
        </div>
      </div>
      
  </div>
  </Container>
  </>
         
  );
}