import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PayPalCheckout from '../../components/PayPalCheckout';

function Checkout() {
    return (
      <>
      <Header />
      <div className="content">
          <PayPalCheckout />
      </div>
      <Footer />
      </>
    )
  }
  
  export default Checkout;