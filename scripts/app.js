function saveTask(){
    console.log("Saving task");
    //get value
    const title =$("#txtTitle").val();
    const desc =$("#txtDescription").val();
    const color =$("#selColor").val();
    const date =$("#selDate").val();
    const status =$("#selStatus").val();
    const budget =$("#numBudget").val();
    console.log(title,desc,color,date,status,budget)
    //build object
    let taskToSave = new Task (title,desc,color,date,status,budget);
    console.log(taskToSave);
    displayTask(taskToSave);
    //save to server

    //display the 
    function displayTask(task){
        let syntax = `<div class ="task" style="border-color:${task.color}">
        <div class="info">
        <h3>${task.title}</h3>
        <p>${task.desc}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
        </div>
        `;
        $(".pending-task").append(syntax)
    }
    if (!title || !desc || !color || !date || !status || !budget) {
        alert("Please fill in all fields.");
        return;
}
}

function testRequest(){

    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error)
        }
    });
}
const toggleBtn = document.getElementById('toggleBtn');
const captureForm = document.getElementById('show-hide');

toggleBtn.addEventListener('click', function() {
  if (captureForm.style.display === 'none') {
    captureForm.style.display = 'block';
    toggleBtn.textContent = 'Hide Form';
  } else {
    captureForm.style.display = 'none';
    toggleBtn.textContent = 'Show Form';
  }
});
function init() {

    //load data
    
    //hook events
    $("#btnSave").click(saveTask)
}

window.onload = init; //avoid the init()
//hello