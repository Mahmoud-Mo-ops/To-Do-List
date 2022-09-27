/*
use sweet alert if input is empty
check if task already exist or not 
create  Delete all tasks Button
create finish  all tasks Button 
*/ 

// setting up variables
let theInput=document.querySelector('.add-task input');
let theAddButton=document.querySelector('.add-task .plus');
let tasksContainer=document.querySelector('.tasks-content');
let tasksCount=document.querySelector('.task-count span');
let taskCompleted=document.querySelector('.task-completed span');
//Focus on Input Field
window.onload=function(){
    theInput.focus();
};

//adding the task
theAddButton.onclick=function(){
  
    //if the input is empty
    if(theInput.value === ''){
        Swal.fire('Kindly add a Task!')
    } else {
        let tasks=document.querySelectorAll('.tasks-content .task-box');

        let noTaskMsg=document.querySelector('.no-tasks-message');
        //check if span with no tasks msg exist
        if(document.body.contains(noTaskMsg)){
               //remove no tasks message
                noTaskMsg.remove();
        }
     
         //create span element
         let mainSpan=document.createElement('span');

         //create delete Button 
         let deleteElement=document.createElement('span');

         //create text to span
         let text=document.createTextNode(theInput.value);

        //  create text to the delete Button
        let deleteText=document.createTextNode('delete');

        //add text to main span
         mainSpan.appendChild(text);
        //add class to span
         mainSpan.className='task-box';
        // add text to deleteButton
         deleteElement.appendChild(deleteText);
        //add class to delete Button
         deleteElement.className='delete';
        
         //ADD DELETE BTN TO MAIN SPAN
          mainSpan.appendChild(deleteElement);

          //add the task to the conatiner
          tasksContainer.appendChild(mainSpan);

          Allappear();

          //empty the input 
          theInput.value='';
          //focus on field
          theInput.focus();
          //calculate number of tasks
          calculateTasks();
          
    }
}
// delete task
document.addEventListener('click',(e)=>{
   if(e.target.className == 'delete'){
    e.target.parentElement.remove();
    calculateTasks();
    if(tasksContainer.childElementCount ===0){
        createNoTasks();
    }
   }

   //finish task
     if(e.target.classList.contains('task-box')){
        //toogle class finish 
        e.target.classList.toggle('finished');
        calculateTasks()
     }
})

//function to create No Tasks message
function createNoTasks(){
    //create span element
    let msgSpan=document.createElement('span');
    //create the text message
    let msgText=document.createTextNode('No Tasks To Show');
    //add textmsg to span
    msgSpan.appendChild(msgText);
    //add classe to msg span
    msgSpan.className='no-tasks-message';
    //Apend the msg span ele to the container
    tasksContainer.appendChild(msgSpan);
}

// function to calculate tasks
function calculateTasks(){
    //calculate ALL tasks
     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    //calculate completed tasks
    taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}


// function checkExistTask(){
//     let tasks=[...document.querySelectorAll('.tasks-content .task-box')];
//         for(let i=0; i<tasks.length;i++){
//              if(tasks[i].firstElementChild=== theInput.value){
//                 console.log("yes");
//              } else{
//                 console.log(theInput.value);
//                 console.log(tasks[i].firstElementChild)
//              }
//         }
//     }


// create  Delete all tasks Button
//make buttons active when click

let all=document.querySelector('.all');
let deleteAll=document.querySelector('.del-all');
let finishedAll=document.querySelector('.fin-all');

function Allappear (){
    all.style.display="flex";
}
//work on delteBtn ALL 
deleteAll.onclick=()=>{
    [...document.querySelectorAll('.tasks-content .task-box')].forEach((ele,index)=>{
        ele.remove();
        calculateTasks();
         //focus on field
         theInput.focus();

    })
}

//work on finishedBtn ALL 
finishedAll.onclick=()=>{
    [...document.querySelectorAll('.tasks-content .task-box')].forEach((ele)=>{
        ele.classList.add('finished');
        calculateTasks();
         //focus on field
         theInput.focus();
    })
}