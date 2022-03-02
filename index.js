let screen=document.getElementById('screen')
buttons=document.querySelectorAll('button')
let screenValue=''
var calculated=false
for(item of buttons){
    item.addEventListener('click',(e)=>{
      buttonText=e.target.innerText;
      console.log("button text is",buttonText)

      if(buttonText=="X"){
        buttonText='*';
        screenValue += buttonText
        screen.value = screenValue
      
      }
      else if(buttonText=='C'){
        screenValue = ""
        screen.value = screenValue
      }

      else if(buttonText=='='){
        screen.value=eval(screenValue)
        calculated=true
        
      }

      else if(buttonText=='back'){
        let value = screen.value;
        screen.value = value.substr(0, value.length - 1);
        screenValue=screen.value
      }

      else if(buttonText=="%"){
        screenValue = `(${screen.value})/100`
        screen.value = eval(screen.value)
      }

      else if (buttonText=="sin"){
        screenValue = `Math.sin(${screenValue}`
        screen.value = screenValue
      }

      else if (buttonText=="cos"){
        print()
      }

      

      else{
        if(calculated){
          screenValue = ""
          calculated = false
        }
        screenValue += buttonText
        screen.value = screenValue
      }
      
     

      
    
  })
      
    }
