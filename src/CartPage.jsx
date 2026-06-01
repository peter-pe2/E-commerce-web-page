
import React from 'react';
import Navbar from './Navbar';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, addToCart, decreaseQuantity, calculateTotal } = useCart();
  const total = calculateTotal();

  return (
    <div style={{ padding: '150px 50px', background: '#1a1a1a', minHeight: '100vh', color: '#FFF' }}>
      <Navbar /> 
      
      <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '30px' }}>
        🛒 Your Shopping Cart
      </h1>

      <div className="cart-list" style={{ maxWidth: '900px' }}>
        {cartItems.length === 0 ? (
          <p style={{ fontSize: '20px' }}>Your cart is empty!</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '15px', borderBottom: '1px solid #444' }}>
                
                <img 
                  src={item.imageSrc} 
                  alt={item.name} 
                  style={{ width: '80px', height: 'auto', marginRight: '20px', borderRadius: '5px' }} 
                />
                
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: '#aaa', marginBottom: '10px' }}>${item.price.toFixed(2)} each</p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '20px' }}>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      border: '2px solid #C7F6D0',
                      background: 'transparent',
                      color: '#C7F6D0',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#C7F6D0';
                      e.target.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#C7F6D0';
                    }}
                  >
                    −
                  </button>
                  
                  <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      border: '2px solid #C7F6D0',
                      background: 'transparent',
                      color: '#C7F6D0',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#C7F6D0';
                      e.target.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#C7F6D0';
                    }}
                  >
                    +
                  </button>
                </div>
                
                <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#C7F6D0', minWidth: '100px', textAlign: 'right' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}            
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #C7F6D0', textAlign: 'right' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
                Total: ${total.toFixed(2)}
              </h2>
              <button
                style={{
                  marginTop: '30px',
                  padding: '15px 40px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                  background: '#C7F6D0',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => e.target.style.background = '#95d6ae'}
                onMouseLeave={e => e.target.style.background = '#C7F6D0'}
                onClick={() => {
                  import('./utils/auth').then(({ isLoggedIn }) => {
                    if (!isLoggedIn() || localStorage.getItem('isGuest') === 'true') {
                      alert('You must be logged in with an account to check out.');
window.location.href = '/';
                    } else {
                      alert('Proceeding to checkout!');
                    }
                  });
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default CartPage;