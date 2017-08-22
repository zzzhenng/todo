(function() {

  //create div
  let modalBoxEle = document.createElement('div');
  let modalBoxContent = document.createElement('div');

  let btnSub = document.createElement('button');
  let btnCan = document.createElement('button');

  modalBoxEle.appendChild(modalBoxContent);
  modalBoxContent.appendChild(btnSub);
  modalBoxContent.appendChild(btnCan);

  //add class name at modal and button
  modalBoxEle.className = 'modal';
  modalBoxContent.className = 'modalContent';
  btnSub.classList.add('btn', 'btnSub');
  btnCan.classList.add('btn', 'btnCan');
  

  

  //add modal component to body
  document.body.appendChild(modalBoxEle);

  //display modal box when user click close logo
  let modal = document.getElementsByClassName('modal')[0];
  let closes = document.getElementsByClassName('close');

  let removeRoot = document.getElementsByClassName('list-items')[0];
  for (let i = 0; i< closes.length; i++) {
    let close = closes[i];

    close.onclick = function() {
      modal.style.display = 'block';
      let taskContent = close.previousElementSibling.innerHTML;
      //add textcomtent to button
      btnSub.innerHTML = `确认删除${taskContent}项目?`;
      btnCan.innerHTML = '取消';
    }
    //
    let removeTaskEle = close.parentElement.parentElement;

    btnSub.onclick = function() {
      removeRoot.removeChild(removeTaskEle);
      modal.style.display = 'none';
    }
    btnCan.onclick = function() {
      modal.style.display = 'none';
    }
    
  }

 
  
  
  
  

  

  





})();