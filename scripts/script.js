let input = document.querySelector(".input");

let result = document.querySelector(".result");

let outPutBox = document.querySelector(".output");

let check = document.getElementById("checkbox")

let colorPicker = document.getElementById("colorpicker")



function writeCss(){

    
    let printArea = document.querySelector(".printarea")

    printArea.innerHTML = "" // clear that area innerhtml

    if(printArea.innerHTML == ""){

        let printer = document.createElement("p") //create new "p" element

        if(outPutBox.style.boxShadow == ""){
            printer.innerHTML = `background-color: ${colorPicker.value}; <br> border-radius: ${input.value}%;`//if shadow check box is not checked use this innerhtml
        }else{
            printer.innerHTML = `box-shadow: ${outPutBox.style.boxShadow}; <br> background-color: ${colorPicker.value}; <br> border-radius: ${input.value}%;` //if shadow check box is  checked use this innerhtml
        }
        
        //-*-*-*printer-*-*-*--*
        printer.style.background = "aliceblue"
        printer.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.459)"
        printer.style.padding = "20px"
        printer.style.width = "30%"
        printer.style.borderRadius = "10px"

        //-*-*-*print area-*-*-*-*
        printArea.style.marginTop = "50px"
        printArea.classList.add("content")
        printArea.appendChild(printer);
    }
}
// change box color
colorPicker.addEventListener("input", function(){
    outPutBox.style.background = colorPicker.value 
})

input.addEventListener("input", function (){
    result.innerText = input.value + "%"; // change range text
    outPutBox.style.borderRadius = input.value + "%" // change border radius
})

check.addEventListener("change", function(){
    if(this.checked){
        // if shadow is "checked" use this style
        outPutBox.style.boxShadow = "5px 5px 10px black" 
    }
    else{
        // if shadow is not "checked" boxShadow = empty
        outPutBox.style.boxShadow = ""   
    }
})
