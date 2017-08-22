(function() {

    /*
    FORM MODAL DIALOG
    adding form modal dialog, when `add button` or `edit icon` clicked,
     using it to input task name, date and description. using JS
     */
    function createModalForm() {

        const addEle = document.createElement('form');

        const tags = [
            ['titleDiv', 'titleLabel', 'titleInput', 'div', 'label', 'input'],
            ['dateDiv', 'dateLabel', 'dateInput', 'div', 'label', 'input'],
            ['contentDiv', 'contentLabel', 'contentText', 'div', 'label', 'textarea'],
            ['submitDiv', 'submitInput', 'cancerInput', 'div', 'input', 'input']
        ];

        const attributes = [
            [{
                    'for': 'task-title'
                },
                {
                    'id': 'task-title',
                    'type': 'text',
                    'placeholder': 'please input string'
                }
            ],
            [{
                    'for': 'task-deadline'
                },
                {
                    'id': 'task-deadline',
                    'type': 'date'
                }
            ],
            [{
                    'for': 'task-description'
                },
                {
                    'id': 'task-description',
                    'placeholder': 'please input details'
                }
            ],
            [{
                    'type': 'submit',
                    'id': 'task-submit',
                    'value': '提交'
                },
                {
                    'type': 'submit',
                    'id': 'task-cancer',
                    'value': '取消'
                }
            ]
        ];

        //add `tags` and `attribute`
        for (let i = 0; i < tags.length; i++) {


            (function addTags(nameDiv, nameLable, nameTag, tag1, tag2, tag3) {
                //use to add 'div' and inner tags--function
                nameDiv = document.createElement(tag1);
                addEle.appendChild(nameDiv);
                nameLable = document.createElement(tag2);
                nameTag = document.createElement(tag3);
                nameDiv.appendChild(nameLable);
                nameDiv.appendChild(nameTag);

                //add attribute to tags
                let ele = [nameLable, nameTag];

                for (let j = 0; j < attributes[i].length; j++) {
                    attribute = attributes[i][j];

                    for (var key of Object.keys(attribute)) {
                        ele[j].setAttribute(key, attribute[key]);
                    }
                }
            })(...tags[i]);

        }

        document.body.appendChild(addEle);
        var labelEles = document.getElementsByTagName('label');
        var labelContent = ['标题', '完成日期', '任务内容'];
        for (let i = 0; i < labelEles.length; i++) {
            labelEle = labelEles[i];
            labelEle.innerHTML = labelContent[i];
        }
    }


    /*
    BUTTON MODAL DIALOG
    create confirm and cancer modal dialog
     */
    function createModalButton() {

        //create `div` and `button` element
        let modalBoxEle = document.createElement('div');
        let modalBoxContent = document.createElement('div');
        let btnSub = document.createElement('button');
        let btnCan = document.createElement('button');

        modalBoxEle.appendChild(modalBoxContent);
        modalBoxContent.appendChild(btnSub);
        modalBoxContent.appendChild(btnCan);

        modalBoxEle.className = 'modal';
        modalBoxContent.className = 'modalContent';
        btnSub.classList.add('btn', 'btnSub');
        btnCan.classList.add('btn', 'btnCan');

        document.body.appendChild(modalBoxEle);

    }
    createModalButton();

    /*
    use to delete task
     */
    function deleteTask() {

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
                let btn = document.getElementsByClassName('btn');

                cls.onclick = function() {
                    console.log(closes.length);

                    modal.style.display = 'block';
                    btnSub.innerHTML = `确认删除${taskContent}项目?`;
                    btnCan.innerHTML = '取消';

                    btnSub.onclick = function() {
                        removeRoot.removeChild(removeTaskEle);
                        modal.style.display = 'none';
                        //when task list changed, initial `addTask` function 
                        addTask();
                    }

                    btnCan.onclick = function() {
                        modal.style.display = 'none';
                    }     
                }

            })(close);
        }
    }


    function addTask() {

        let addEle = document.getElementById('addTask');
        let taskListEle = document.getElementById('taskList');

        //new task `HTML` modal dddiiiaaallloooggg
        let newTaskModal = `
        <div class="new-task">
            <div class="new-title">
                <label for="new-task-title">任务名称</label>
                <input id="new-task-title" type="text">
            </div>
            <div class="new-button">
                <button class="confirm-btn">确认</button>
                <button class="cancer-btn">取消</button>
            </div>
        </div>
        `;
        
        
        addEle.onclick = function() {
            /*
            when `add task button` clicked,
            //adding new task DOM to `body` everytime.
             */
            $('body').append(newTaskModal);

            let newTaskValue = document.getElementById('new-task-title');
            let newTaskConfirm = document.getElementsByClassName('confirm-btn')[0];
            let newTaskCancer = document.getElementsByClassName('cancer-btn')[0];

            
            newTaskConfirm.onclick = function() {
                let newTaskEle = `
                <li>
                    <div class="item-title">
                        <i class="fa fa-folder-open"></i><span>
                        ${newTaskValue.value} ($data)</span><i class="close">&times;</i>
                    </div>
                </li>
            `;
                $('#tasklist').append(newTaskEle);
                //remove new task DOM everytime
                $('.new-task').remove();
                //when add new task, initial `deleteTask` function
                deleteTask();
            }

            newTaskCancer.onclick = function() {
                $('.new-task').remove();
            }   
        }     
    }

    /*
    there has may function excuted after window loaded, using this function
     */
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                oldonload();
                func();
            }
        }
    }
    addLoadEvent(addTask);
    addLoadEvent(deleteTask);
})();