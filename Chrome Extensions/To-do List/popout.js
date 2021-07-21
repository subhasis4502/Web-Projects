//The input, buttons are appeared when create-todo button clicked
document.querySelector('.create-todo').addEventListener('click',function(){
  document.querySelector('.new-item').style.display='block';
});

//Adding the new task when 'add' button is pressed
document.querySelector('.new-item .add').addEventListener('click',function(){
  var itemName = document.querySelector('.new-item input').value;
  if(itemName != ''){
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);
    itemsArr.push({"item":itemName, "status":0});
    saveItems(itemsArr);
    fetchItems();
    document.querySelector('.new-item input').value='';
    document.querySelector('.new-item').style.display='none';
  }
});

//Disapear the block when 'cancel' button is clicked
document.querySelector('.new-item .cancel').addEventListener('click', function(){
  document.querySelector('.new-item').style.display='none';
})

//Print the items stored inside our local storage
function fetchItems(){

  const itemsList = document.querySelector('ul.todo-items');
  itemsList.innerHTML = '';
  var newItemHTML = '';
  try{
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);

    for (var i = 0; i < itemsArr.length; i++) {
      var status = '';
      if(itemsArr[i].status == 1){
        status = 'class="done"';
      }
      newItemHTML += `<li data-itemindex="${i}" ${status}><span class="itemComplete">✅</span>
      <span class="item">${itemsArr[i].item}</span>
      <div><span class="itemDelete">🗑️</span></div>
      </li>`;
    }

    itemsList.innerHTML = newItemHTML;

    //Whenever ✅ or 🗑️ clicked
    var itemsListUL = document.querySelectorAll('ul li');
    for (var i = 0; i < itemsListUL.length; i++) {
      //For ✅
      itemsListUL[i].querySelector('.itemComplete').addEventListener('click', function(){
        var index = this.parentNode.dataset.itemindex;
        //console.log(index);
        itemComplete(index);
      });
      //For 🗑️
      itemsListUL[i].querySelector('.itemDelete').addEventListener('click', function(){
        var index = this.parentNode.parentNode.dataset.itemindex;
        itemDelete(index);
      });
    }
  }catch(e){
    
  }

}

//Update the status of that item when ✅ is pressed
function itemComplete(index){

  var itemsStorage = localStorage.getItem('todo-items');
  var itemsArr = JSON.parse(itemsStorage);

  itemsArr[index].status = 1; //Changing
  saveItems(itemsArr); //Saving

  document.querySelector('ul.todo-items li[data-itemindex="'+index+'"]').className='done';

}

//Delete the task when 🗑️ is pressed
function itemDelete(index){

  var itemsStorage = localStorage.getItem('todo-items');
  var itemsArr = JSON.parse(itemsStorage);

  itemsArr.splice(index, 1);
  saveItems(itemsArr);

  document.querySelector('ul.todo-items li[data-itemindex="'+index+'"]').remove();

}

//Saving the changes to our local storage
function saveItems(obj){
  var string = JSON.stringify(obj);
  localStorage.setItem('todo-items', string);

}

fetchItems();
