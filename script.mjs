function convert(event){
    event.preventDefault();

    console.log("function is running")

    let marla = document.querySelector("#inputMarla").value;
    let squareFeet = marla * 272.25;

    document.querySelector("#resultWindow").innerHTML = `marla in square feet is ${squareFeet} `;

    console.log(marla)
    console.log(squareFeet)
}