function getValueById(id){
    const getvalue =parseInt(document.getElementById(id).innerText);
    return getvalue;
}
function getHistory(id){
    const title =document.getElementById(id).innerText;
    const now = new Date();
    const time =now.toLocaleTimeString();

    const pushContainer =document.getElementById("massageadd");
    const paragraph =document.createElement("p");
    paragraph.classList.add("bg-gray-100")
    paragraph.classList.add("m-2")
    paragraph.classList.add("rounded-xl")
    paragraph.classList.add("p-2")
    paragraph.classList.add("bg-gray-100")
    paragraph.innerText =`

                You have complete The Task ${title} at ${time}
 
    `
    pushContainer.appendChild(paragraph);
}
function completed(id){
    alert("Board Update Successfully")
    const assignTask =getValueById("remaining")
    const checkbox =getValueById("adding")
    
    const setTask =assignTask - 1;
    const setCheckbox =checkbox + 1;

    document.getElementById("adding").innerText=setCheckbox;
    document.getElementById("remaining").innerText =setTask;

    

    
}
function disable(id){
    document.getElementById(id).setAttribute("disabled",true)
}

document.getElementById("mobileBtn").addEventListener('click',function(){
    completed()
    getHistory("textShow");
    disable("mobileBtn");
    
})

document.getElementById("DarkBtn").addEventListener('click',function(){
    completed()
    getHistory("darkText");
    disable("DarkBtn");
    
})
document.getElementById("HomeBtn").addEventListener('click',function(){
    completed()
    getHistory("optText");
    disable("HomeBtn");
    
})

document.getElementById("AddEmoji").addEventListener('click',function(){
    completed()
    getHistory("AddEmoj");
    disable("AddEmoji");
    
})
document.getElementById("addButton").addEventListener('click',function(){
    completed()
    getHistory("OpenText");
    disable("addButton");
    
})
document.getElementById("ImpBtn").addEventListener('click',function(){
    completed()
    alert("congrates!!! You have completed all the current task")
    
})
document.getElementById("ClearBtn").addEventListener('click',function(){
    document.getElementById("massageadd").innerHTML="";
})







