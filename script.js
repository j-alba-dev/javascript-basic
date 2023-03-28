document.getElementById('executeBtn').addEventListener('click', function() {
    const outputElement = document.getElementById('output');

    // Your JavaScript code goes here
    const message = 'Hello, JavaScript!';
    let firstName = "Jose";
    let lastName = "Alba";
    console.log(firstName + " " + lastName);
    outputElement.textContent = firstName + " " + lastName;
    alert(firstName + " " + lastName);
});
