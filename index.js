let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage;
   renderLead();
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLead();
})

function renderLead() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target = "_blank" href = "${myLeads[i]}">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}