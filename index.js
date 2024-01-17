"use strict";

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(event, argument) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(argument).classList.add("active-tab");
}

function submitForm() {
    let field = document.getElementById("field");
    let fieldValue = field.value.trim();

    if (fieldValue.length < 100) {
        window.alert("Message was successfully sent.");
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        field.value = "";
    } else {
        let output = document.getElementById("output");
        output.style.color = "red";
        output.value = "Message should be 100 characters or less.";

        setTimeout(() => {
            output.value = "";
        }, 5000); 
    }
}

