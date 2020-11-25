
//dom
const btn = document.querySelector('.talk');
const group = document.querySelector('.group')
const group_cls = document.querySelector('.group-close')
const main_content = document.querySelector('.box-1')
const group_content = document.querySelector('.box-2')
const quiz_sec = document.querySelector('.quiz')
const form_submit = document.querySelector('.submit');
const inp_tags = document.getElementsByTagName('input');
const correct_ans = document.getElementsByClassName('correct-ans');
const answers = document.getElementsByClassName('answer')
const marks = 0

//btn hover effect
btn.addEventListener('mouseenter', function(e){
    e.target.textContent = 'PRESS TO START'
    e.target.style.width = '200px'
    e.target.style.boxShadow = '5px 5px 5px 6px #ccc'
})
btn.addEventListener('mouseleave', function(e){
    e.target.textContent = 'START'
    e.target.style.width = '150px'
    e.target.style.boxShadow = '3px 3px 5px 6px #ccc'
})

btn.addEventListener('click',function(){
    quiz_sec.style.display = 'block'
    document.querySelector('.logo').style.display = 'none'
    btn.style.display = 'none';
    group.style.width = '180px';
    group.innerText = 'Our Group'
})

group.addEventListener('click',function(e){
    main_content.style.display = 'None';
    group_content.style.display = 'block';
})

group_cls.addEventListener('click',function(e){
    main_content.style.display = 'block';
    group_content.style.display = 'none';
})

form_submit.addEventListener('click',function(){
    for(k=0;k<answers.length;k++){
        answers[k].style.display = 'block'
    }

    for(i=0;i<inp_tags.length;i++){
        if(inp_tags[i].type =='radio'){
            if(inp_tags[i].checked){
                
                for(j=0;j<correct_ans.length;j++){
                    if(inp_tags[i].name == correct_ans[j].name){

                        
                            
                            if(inp_tags[i].value == correct_ans[j].innerHTML.trim()){
                                document.querySelector('.show_selected').innerHTML += 'Q' +inp_tags[i].name+'. The Answer you choosed '+inp_tags[i].value+' is correct<br>';
                                correct_ans[j].style.color = 'green'
                            }else{
                                document.querySelector('.show_selected').innerHTML += 'Q' +inp_tags[i].name+'. The Answer you choosed '+inp_tags[i].value+' is wrong<br>';
                                correct_ans[j].style.color = 'red'
                            }
                        }
                    
                }
            }
        }
    }
})