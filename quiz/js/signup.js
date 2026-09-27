let form = document.querySelector("#signupForm");
// Handle form submission
form.addEventListener("submit", async function (event) {
  event.preventDefault(); 
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let batch = document.querySelector("#batch").value;
  let now = new Date();
  // const data = {
  //   name: name,
  //   email: email,
  //   batch: batch,
  //   createdAt: now,
  // };
  const data = {
    name: name,
    email: email,
    gender:"male",
    password:"Harsh123"
  };
  console.log(data);

  try {
    let status = await callAPI("http://localhost:5000/user/signup",data);
    console.log("Status: " ,status)
    // let status = 201;

    if (status === 201) {
      console.log("Signup Successful");
      toastCall(
        "show",
        "Signup Successful...Redirecting to Login Page",
        2000,
        "../html/login.html",
      );
    } else {
      console.log("Signup Failed");
      toastCall("showerr", status.data.message, 2000);
    }
  } catch (error) {
    console.log(error);
    toastCall("showerr", error.message, 2000);
  }
});
