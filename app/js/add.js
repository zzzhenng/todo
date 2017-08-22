(function() {

    const addEle = document.createElement('form');

    const tags = [
        ['titleDiv', 'titleLabel', 'titleInput', 'div', 'label', 'input'],
        ['dateDiv', 'dateLabel', 'dateInput', 'div', 'label', 'input'],
        ['contentDiv', 'contentLabel', 'contentText', 'div', 'label', 'textarea'],
        ['submitDiv', 'submitInput', 'cancerInput', 'div', 'input', 'input']
    ];

    const attributes = [
        [
            {
                'for': 'task-title'
            },
            {
                'id': 'task-title',
                'type': 'text',
                'placeholder': 'please input string'
            }
        ],
        [
            {
                'for': 'task-deadline'
            },
            {
                'id': 'task-deadline',
                'type': 'date'
            }
        ],
        [
            {
                'for': 'task-description'
            },
            {
                'id': 'task-description',
                'placeholder': 'please input details'
            }
        ],
        [
            {
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
    //add `label` value 
    // document.body.onload = function() {


    var labelEles = document.getElementsByTagName('label');
    var labelContent = ['标题', '完成日期', '任务内容'];
    for (let i = 0; i < labelEles.length; i++) {
        labelEle = labelEles[i];
        console.log(labelEle);
        labelEle.innerHTML = labelContent[i];
        
    }


})();