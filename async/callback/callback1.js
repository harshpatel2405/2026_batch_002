function getOrder(orderId, callback) {
  setTimeout(() => {
    console.log(orderId + " - Order Placed Successfully");
    callback();
  }, 1000);
}

function processPayment(paymentId, callback) {
  setTimeout(() => {
    console.log("Payment processed successfully - " + paymentId);
    callback();
  }, 1000);
}

function getBill(billId, callback) {
  setTimeout(() => {
    console.log("Bill Generated Successfully - " + billId);
    callback();
  }, 1000);
}

getOrder(1234, function () {
  processPayment(2345, function () {
    getBill(3456, function () {
      console.log("Wait on table for 15 minutes to get your food");
    });
  });
});

/*
function getOrder(orderId, paymentId,billId,callback1, callback2) {
  setTimeout(() => {
    console.log(orderId + " - Order Placed Successfully");
    callback1(paymentId, billId, callback2);
  }, 1000);
}

function processPayment(paymentId,billId, callback) {
  setTimeout(() => {
    console.log("Payment processed successfully - " + paymentId);
    callback(billId);
  }, 1000);
}

function getBill(billId) {
  setTimeout(() => {
    console.log("Bill Generated Successfully - " + billId);
  }, 1000);
}
getOrder(1234, 2345,3456, processPayment, getBill)
// getOrder(1234, function () {
//   processPayment(2345, function () {
//     getBill(3456, function () {
//       console.log("Wait on table for 15 minutes to get your food");
//     });
//   });
// });

*/