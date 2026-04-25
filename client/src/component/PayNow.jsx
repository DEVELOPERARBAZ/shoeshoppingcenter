import React from "react";

const PayNow = ({ totalAmounts }) => {
  const totalAmount = Number(totalAmounts || 10);

  const handlePayment = async () => {
    if (!totalAmount || totalAmount <= 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmount * 100,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_Shj9XZA0uLIKSv",
        amount: order.amount,
        currency: order.currency,
        name: "Shoe Store",
        description: "Test Payment",
        order_id: order.id,

        handler: async function (response) {
          const validateRes = await fetch(
            "http://localhost:5000/order/validate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            },
          );

          const jsonRes = await validateRes.json();
          alert(jsonRes.msg);
        },

        modal: {
          ondismiss: function () {
            alert("Payment Cancelled");
          },
        },

        theme: {
          color: "#28a745",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function () {
        alert("Payment Failed");
      });

      rzp.open();
    } catch (err) {
      console.log(err);
      alert("Payment Error");
    }
  };

  return (
    <button className="pay-btn" onClick={handlePayment}>
      Pay Now ₹{totalAmount}
    </button>
  );
};

export default PayNow;
