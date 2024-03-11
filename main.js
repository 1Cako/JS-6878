const tab1 = document.getElementById("tab1-content");
const tab2 = document.getElementById("tab2-content");
const tab3 = document.getElementById("tab3-content");

const button1 = document.getElementById("tab1-button");
const button2 = document.getElementById("tab2-button");
const button3 = document.getElementById("tab3-button");

function tab1Content(){
    button1.classList.add("background");
    button2.classList.remove("background");
    button3.classList.remove("background");

    tab1.classList.remove("displayNone");
    tab2.classList.add("displayNone");
    tab3.classList.add("displayNone");
};
function tab2Content(){
    button1.classList.remove("background");
    button2.classList.add("background");
    button3.classList.remove("background");

    tab1.classList.add("displayNone");
    tab2.classList.remove("displayNone");
    tab3.classList.add("displayNone");
};
function tab3Content(){
    button1.classList.remove("background");
    button2.classList.remove("background");
    button3.classList.add("background");

    tab1.classList.add("displayNone");
    tab2.classList.add("displayNone");
    tab3.classList.remove("displayNone");
};