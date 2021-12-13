Head = "";
Doc = "";

document.getElementById("Name").innerHTML = localStorage.getItem("Name");
document.getElementById("Doc").innerHTML = localStorage.getItem("Doc");

function save() {
    Head = document.getElementById("Name").innerHTML;
    Doc = document.getElementById("Doc").innerHTML;
    localStorage.setItem("heading", Head);
    localStorage.setItem("document", Doc);
}