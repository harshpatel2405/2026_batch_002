let form = document.querySelector("#loginForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  const data = {
    email: email,
    password: password,
  };
  console.log(data);

  try {
    // let status = await callAPI(data);
    let status = 201;

    if (status === 201) {
      console.log("Login Successful");
      toastCall(
        "show",
        "Login Successful..Redirecting to Exam Page",
        2000,
        "../html/index.html",
      );
    } else {
      console.log("Login Failed");
      toastCall("showerr", "Login Failed...else", 2000);
    }
  } catch (error) {
    console.log(error);
    toastCall("showerr", error.message, 2000);
  }
});
