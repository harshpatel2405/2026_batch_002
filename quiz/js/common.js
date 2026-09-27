// * toast call
function toastCall(toastClass, message, duration = 3000, location = null) {
  let toast = document.querySelector("#toast");

  toast.classList.add(toastClass);
  toast.innerHTML = message;
  setTimeout(() => {
    if (location) {
      window.location.href = location;
    }
    toast.classList.remove(toastClass);
  }, duration);
}

// * Reset signup form when the page loads
window.addEventListener("pageshow", function () {
  form.reset();
});

// * Perfected API Function
async function callAPI(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Extract the JSON body (works for both success and error responses)
    const result = await response.json();

    return {
      status: response.status,
      data: result
    };
  } catch (error) {
    console.error("Network error:", error);
    return { status: 500, data: { message: "Network connection failed" } };
  }
}

