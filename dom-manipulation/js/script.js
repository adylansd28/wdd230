/* Get Input value, button reference, list to be manipulated reference */


let button = document.getElementById("button");


button.addEventListener("click", function (){
    let input = document.getElementById("favchap").value;
    let list = document.getElementById("list");
    if (input !== "") {
        const newBTN = document.createElement("button");
        newBTN.innerHTML = "\u274C"

        let new_li_element = document.createElement("li");
        new_li_element.textContent = input;
        list.appendChild(new_li_element);
        list.appendChild(newBTN);

        new_li_element.setAttribute("id", "new_li" + input);
        newBTN.setAttribute("class", "x_button");

        document.getElementById("favchap").value  = "";
    };
});

let x_button = document.getElementsByClassName("x_button")