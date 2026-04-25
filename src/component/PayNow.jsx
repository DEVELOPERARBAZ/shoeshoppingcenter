import React from "react";

<<<<<<< HEAD
const PayNow = ({ totalAmounts }) => {
  const totalAmount = Number(10);

=======
const PayNow = ({ totalAmount }) => {
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
  const handlePayment = async () => {
    if (!totalAmount || totalAmount <= 0) {
      alert("Cart is empty");
      return;
    }

    try {
<<<<<<< HEAD
      // Create order from backend
      const res = await fetch("http://localhost:5000/order", {
=======
      // call backend
      const res = await fetch("http://localhost:5000/create-order", {
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
        body: JSON.stringify({
          amount: totalAmount * 100,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
=======
        body: JSON.stringify({ amount: totalAmount }),
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
      });

      const order = await res.json();

      const options = {
<<<<<<< HEAD
        key: "rzp_test_Shj9XZA0uLIKSv",
        amount: order.amount,
        currency: order.currency,
=======
        key: "rzp_test_YOUR_KEY_ID", // 🔑 your key
        amount: order.amount,
        currency: "INR",
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
        name: "Shoe Store",
        description: "Test Payment",
        order_id: order.id,

<<<<<<< HEAD
        handler: async function (response) {
          // Verify payment
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
          console.log(jsonRes);
=======
        handler: function (response) {
          alert("✅ Payment Successful!");
          console.log(response);
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
        },

        modal: {
          ondismiss: function () {
<<<<<<< HEAD
            alert("Payment Cancelled");
=======
            alert("❌ Payment Cancelled");
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
          },
        },

        theme: {
          color: "#28a745",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
<<<<<<< HEAD
        alert("Payment Failed");
=======
        alert("❌ Payment Failed");
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
        console.log(response.error);
      });

      rzp.open();
    } catch (err) {
      console.log(err);
<<<<<<< HEAD
      alert("Payment Error");
=======
      alert("Error in payment");
>>>>>>> e213904666f4ea243824ce4a30d89bb986df5617
    }
  };

  return (
    <button className="pay-btn" onClick={handlePayment}>
      Pay Now ₹{totalAmount}
    </button>
  );
};

export default PayNow;
