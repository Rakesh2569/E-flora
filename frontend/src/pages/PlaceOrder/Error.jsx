import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center', // Horizontal centering
      alignItems: 'center', // Vertical centering
      height: '100vh', // Full viewport height
      textAlign: 'center', 
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      padding: '20px'
    }}>
      <div>
        <h2 style={{ 
          color: '#e74c3c',
          fontSize: '24px',
          marginBottom: '10px'
        }}>Oops! Something went wrong.</h2>
        <p style={{ 
          color: '#333',
          fontSize: '16px',
          lineHeight: '1.5'
        }}>
          We're sorry, but it seems that an error occurred while processing your payment request. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage
