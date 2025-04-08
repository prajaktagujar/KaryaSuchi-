let todolist =[ ];
todolist.item='';
todolist.date='';
tododisplay();

function addtodo() {
    let inputelement = document.querySelector('#todoinput');
    let inputdate = document.querySelector('#todo-date');
    let tododate= inputdate.value;
    let todoitem = inputelement.value; // 'value' should be lowercase
    todolist.push({item: todoitem,date:tododate});
    inputdate.value='';
    inputelement.value='';
    console.log(todolist);
    tododisplay();
  }
  

function tododisplay(){
let containerelement = document.querySelector('.todocontainer');
let newhtml = '';
for (let  i=0;i<todolist.length;i++){
    
  newhtml += `
  
    <span>${todolist[i].item}</span>
    <span>${todolist[i].date}</span>
    <button  class='deletebutton'onclick="deletetodo(${i})">Delete</button>
  
`;

   // if you are using grid do remember u cant give them in div because it will accumulate at one place and it will treat them as one whole box and not the seprate columns 

    

}

containerelement.innerHTML= newhtml;


}  
function deletetodo(index){
  todolist.splice(index,1);
  
  tododisplay();
}


function adddate(){

}
