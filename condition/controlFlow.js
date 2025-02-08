var userRol = "Editor";

if (userRol === "Admin") {
  console.log("Redirecting to admin dashboard");
} else if (userRol === "Editor") {
  console.log("Redirecting to editor dashboard");
} else {
  console.log("Redirecting to user dashboard");
}

var isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("Welcome to home page");
} else {
  console.log("Navigate to signUp page");
}
