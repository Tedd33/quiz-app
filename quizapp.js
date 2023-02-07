var question=document.querySelector('.question')
var ans1=document.querySelector('.ans1')
var ans2=document.querySelector('.ans2')
var ans3=document.querySelector('.ans3')
var ans4=document.querySelector('.ans4')
var final=document.querySelector('.finalanswerbg')
var answer=document.querySelector('.finalanswer')
var yes=document.querySelector('.yes')
var no=document.querySelector('.no')
var next=document.querySelector('.next')
let start=document.querySelector('.start')
var z=document.querySelector(".bg")
let containerbackground=document.querySelector('.container-background')


var questions=[
{
  question:"Where should a CSS file be referenced in a HTML file?",
  ans1:'After all HTML code',
  ans2:'Before any HTML code',
  ans3:"Inside the head section",
  ans4:"Inside the body section",

},
{
  question:"What is the correct format for changing the background colour of a div in CSS?",
  ans1:'Bg-color:red;',
  ans2:'Background:red;',
  ans3:"Background-color:red;",
  ans4:"Color:red;",


},
{
  question:'What does HTML stand for?',
  ans1:"Hyper Tag Markup Language",
  ans2:'Hyper Text Markup Language',
  ans3:'Hyperlinks Text Mark Language',
  ans4:'Hyperlinking Text Marking Language',
},
{
  question:'What symbol indicates a tag?',
  ans1:"Angle brackets",
  ans2:"Exclamation marks ",
  ans3:"Commas",
  ans4:"Curved brackets "

},
{
  question:'What does CSS stand for?',
  ans1:"Computing Style Sheet",
  ans2:"Creative Style System",
  ans3:"Creative Styling Sheet",
  ans4:"Cascading Style Sheet"
}  
]

  

function remove(){
  final.classList.remove('finalanswerbgshow')
      answer.classList.remove('finalanswershow')
      ans1.classList.remove('tocno')
      ans1.classList.remove('netocno')
}

const answers=['Hyper Text Markup Language',"Angle brackets","Cascading Style Sheet","Inside the head section","Background-color:red;"]

 


ans1.addEventListener('click',()=>{
  
    final.classList.add('finalanswerbgshow')
  answer.classList.add('finalanswershow')
  yes.addEventListener('click',()=>{ 
    
  final.classList.remove('finalanswerbgshow')
  answer.classList.remove('finalanswershow')
  ans1.classList.remove('incorrect')
  ans1.classList.remove('correct')
  ans2.classList.remove('incorrect')
  ans2.classList.remove('correct')
  ans3.classList.remove('incorrect')
  ans3.classList.remove('correct')
  ans4.classList.remove('incorrect')
  ans4.classList.remove('correct')   
 
    if(answers.includes(ans1.innerHTML)){
      ans1.classList.add('correct')
    }
    else{
      ans1.classList.add('incorrect')
    }
     if(answers.includes(ans2.innerHTML))
      {
         ans2.classList.add('correct')
    }
     else if(answers.includes(ans3.innerHTML))
     {
        ans3.classList.add('correct')
      } 
  else if(answers.includes(ans4.innerHTML)){
        ans4.classList.add('correct')
          }
          z.classList.add('bs')
          setTimeout(()=>{ Callnext()},2000)
         
         
        })
      
        no.addEventListener('click',()=>{
          final.classList.remove('finalanswerbgshow')
          answer.classList.remove('finalanswershow')

        })
     
})


ans2.addEventListener('click',()=>{
  final.classList.add('finalanswerbgshow')
answer.classList.add('finalanswershow')
yes.addEventListener('click',()=>{ 
 final.classList.remove('finalanswerbgshow')
answer.classList.remove('finalanswershow')
ans1.classList.remove('incorrect')
      ans1.classList.remove('correct')
    ans2.classList.remove('incorrect')
    ans2.classList.remove('correct')
    ans3.classList.remove('incorrect')
    ans3.classList.remove('correct')
    ans4.classList.remove('incorrect')
    ans4.classList.remove('correct')   
  if(answers.includes(ans2.innerHTML)){
    ans2.classList.add('correct')
  }      else{
   ans2.classList.add('incorrect')
  }
   if(answers.includes(ans1.innerHTML)){
         ans1.classList.add('correct')
    }
    else if(answers.includes(ans3.innerHTML)){
      ans3.classList.add('correct')
    }
    else if(answers.includes(ans4.innerHTML)){
      ans4.classList.add('correct')
        }
        z.classList.add('bs')
        setTimeout(()=>{ Callnext()},2000)
       
})       
    
    no.addEventListener('click',()=>{
  final.classList.remove('finalanswerbgshow')
  answer.classList.remove('finalanswershow')
 }) 
})
 

ans3.addEventListener('click',()=>{
 final.classList.add('finalanswerbgshow')
answer.classList.add('finalanswershow')
yes.addEventListener('click',()=>{ 
final.classList.remove('finalanswerbgshow')
answer.classList.remove('finalanswershow')
ans1.classList.remove('incorrect')
      ans1.classList.remove('correct')
   ans2.classList.remove('incorrect')
   ans2.classList.remove('correct')
    ans3.classList.remove('incorrect')
    ans3.classList.remove('correct')
    ans4.classList.remove('incorrect')
    ans4.classList.remove('correct')   
  if(answers.includes(ans3.innerHTML)){
    ans3.classList.add('correct')
  } 
  else{
    ans3.classList.add('incorrect')
  }
     if(answers.includes(ans2.innerHTML)){
        ans2.classList.add('correct')
    }
    else if(answers.includes(ans1.innerHTML)){
      ans1.classList.add('correct')
    }
    else if(answers.includes(ans4.innerHTML)){
      ans4.classList.add('correct')
        }
        z.classList.add('bs')
        setTimeout(()=>{ Callnext()},2000)
     })
      
        no.addEventListener('click',()=>{
          final.classList.remove('finalanswerbgshow')
          answer.classList.remove('finalanswershow')
  }) 
 })

ans4.addEventListener('click',()=>{
  final.classList.add('finalanswerbgshow')
answer.classList.add('finalanswershow')
yes.addEventListener('click',()=>{ 
final.classList.remove('finalanswerbgshow')
answer.classList.remove('finalanswershow')
ans1.classList.remove('incorrect')
      ans1.classList.remove('correct')
   ans2.classList.remove('incorrect')
   ans2.classList.remove('correct')
   ans3.classList.remove('incorrect')
   ans3.classList.remove('correct')
    ans4.classList.remove('incorrect')
    ans4.classList.remove('correct')   
  if(answers.includes(ans4.innerHTML)){
    ans4.classList.add('correct')
  } else{
    ans4.classList.add('incorrect')
  }
     if(answers.includes(ans2.innerHTML)){
         odgv2.classList.add('correct')
    }
    else if(answers.includes(ans3.innerHTML)){
      ans3.classList.add('correct')
    }
    else if(answers.includes(ans1.innerHTML)){
      ans1.classList.add('correct')
    }
      z.classList.add('bs')
      setTimeout(()=>{ Callnext()},2000)
  })
        no.addEventListener('click',()=>{
          
          final.classList.remove('finalanswerbgshow')
          answer.classList.remove('finalanswershow')
        })
     })
     
     function  nextqtn(){
      z.classList.remove('bs')
      next.classList.remove('nexts')
      ans1.classList.remove('incorrect')
      ans1.classList.remove('correct')
    ans2.classList.remove('incorrect')
    ans2.classList.remove('correct')
    ans3.classList.remove('incorrect')
    ans3.classList.remove('correct')
    ans4.classList.remove('incorrect')
    ans4.classList.remove('correct')
    startgame()
  }
    
   
start.addEventListener('click',startgame)
next.addEventListener('click',nextqtn)

function startgame(){
  containerbackground.classList.add('backAdd')
  let random=Math.floor(Math.random()*questions.length)
  console.log(random)
  for(let x in questions){

 if(x==random){
 question.innerHTML=questions[x].question;
 ans1.innerHTML=questions[x].ans1
 ans2.innerHTML=questions[x].ans2
 ans3.innerHTML=questions[x].ans3
 ans4.innerHTML=questions[x].ans4
  }

  start.classList.add('starts')    
  }}

function Callnext(){
  next.classList.add('nexts') 
}