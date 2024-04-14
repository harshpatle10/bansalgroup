document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "harshpatle99999@gmail.com" && password === "harshpatle") {
      alert("Detail save ");
      
      
    } else {
      document.getElementById("error-message").innerText = "Invalid username or password";
    }
  });
  