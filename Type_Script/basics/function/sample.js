function display() {
    console.log("TYPESCRIPT FUNCTION");
}
display();
function data(roll, name, email) {
    console.log("Roll number:", roll);
    console.log("Name:", name);
    if (email != undefined) {
        console.log("Email", email);
    }
}
data(2001, "anu");
data(3002, "ram", "ram@gmail.com");
