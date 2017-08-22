(function() {

    //create confirm and cancer modal dialog
    function createButton() {
        
        //create `div` and `button` element
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

        //add to body
        document.body.appendChild(modalBoxEle);

    }

    //use to delete task
    function deleteTask() {

        createButton();
 
        let modal = document.getElementsByClassName('modal')[0];
        let closes = document.getElementsByClassName('close');
        let btnSub = document.getElementsByClassName('btnSub')[0];
        let btnCan = document.getElementsByClassName('btnCan')[0];

        let removeRoot = document.getElementById('tasklist');
        for (let i = 0; i < closes.length; i++) {
            let close = closes[i];

            /*
            when close logo clicked, UI'll display a interface with
            confirm and cancer button.
            when confirm button clicked, the task be clicked will be deleted.
             */ 
            (function(cls) {

                let removeTaskEle = cls.parentElement.parentElement;
                let taskContent = cls.previousElementSibling.innerHTML;

                cls.onclick = function() {

                    modal.style.display = 'block';
                    btnSub.innerHTML = `确认删除${taskContent}项目?`;
                    btnCan.innerHTML = '取消';

                    btnSub.onclick = function(evt) {
                        console.log(evt);
                        console.log(removeTaskEle);
                        removeRoot.removeChild(removeTaskEle);
                        modal.style.display = 'none';
                    }

                    btnCan.onclick = function() {
                        modal.style.display = 'none';
                    }

                }

            })(close);
        }
    }

    /*
    there has may function excuted after window loaded, using this function
     */
    function addLoadEvent(func){
      var oldonload = window.onload;
      if( typeof window.onload != 'function') {
        window.onload = func;
      }else {
        window.onload = function() {
          oldonload();
          func();
        }
      }
    }
    addLoadEvent(deleteTask);


})();