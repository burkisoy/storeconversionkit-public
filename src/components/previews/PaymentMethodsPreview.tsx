import React from 'react';

const PaymentMethodsPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-1.5">
        {['visa', 'master', 'american_express', 'paypal', 'apple_pay'].map((provider, index) => (
          <img 
            key={index}
            src={`https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/${provider}.svg`}
            alt={provider}
            className="h-7 w-auto filter-none"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsPreview;