import React from "react";

const PayNow = ({ totalAmount }) => {
  const handlePayment = async () => {
    if (!totalAmount || totalAmount <= 0) {
      alert("Cart is empty");
      return;
    }

    try {
      // call backend
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_YOUR_KEY_ID", // 🔑 your key
        amount: order.amount,
        currency: "INR",
        name: "Shoe Store",
        description: "Test Payment",
        order_id: order.id,

        handler: function (response) {
          alert("✅ Payment Successful!");
          console.log(response);
        },

        modal: {
          ondismiss: function () {
            alert("❌ Payment Cancelled");
          },
        },

        theme: {
          color: "#28a745",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        alert("❌ Payment Failed");
        console.log(response.error);
      });

      rzp.open();
    } catch (err) {
      console.log(err);
      alert("Error in payment");
    }
  };

  return (
    <button className="pay-btn" onClick={handlePayment}>
      Pay Now ₹{totalAmount}
    </button>
  );
};

export default PayNow;
