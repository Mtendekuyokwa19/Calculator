let one=document.querySelector(' #one')
let input=document.querySelector('#myInput')
let three=document.querySelector('#three')
let four=document.querySelector('#four')
let five=document.querySelector('#five')
let six=document.querySelector('#six')
let seven=document.querySelector('#seven')
let eight=document.querySelector('#eight')
let nine=document.querySelector('#nine')
let zero=document.querySelector('#zero')
let two=document.querySelector('#two')
let clear=document.querySelector('#clear')
let twoZero=document.querySelector('#twoZero')

let calculating=(answer) => {
    answer=input.textContent;
  
   
    return answer;
}

let Number=(num)=>{
    num=num.toString()
    if (input.textContent=="0"){

         input.textContent=num
    }
    else{
      
        let value=input.textContent+num;
         input.textContent=value;
    

    }



}

//assigning buttons to numbers
one.addEventListener('click',function(e)
{Number(1)})

two.addEventListener('click',function(e){
    Number(2)})

three.addEventListener('click',function(e){ 
    Number(3)})
four.addEventListener('click',function(e){
   Number(4)
})

five.addEventListener('click',function(e){
   Number(5)
})

six.addEventListener('click',function(e){
 Number(6) 
})

seven.addEventListener('click',function(e){
   Number(7)
})

eight.addEventListener('click',function(e){
 Number(8)
})

nine.addEventListener('click',function(e){
   Number(9)
})

zero.addEventListener('click',function(e){
  Number(0)
})
twoZero.addEventListener('click',function(e){
    Number("00");
})

//assigning signs to symbols
let finalAnswer=document.querySelector('#answer')
let equal=document.querySelector('#equals')
let divide=document.querySelector('#divide')
let addition=document.querySelector('#plus')
let subtraction=document.querySelector('#subtract')
let multiplication=document.querySelector('#multiply')
let decimal=document.querySelector("#decimal");
let del=document.querySelector('#clearOne');
let sign=(symbol)=>{
 
    let value=input.textContent+symbol;
    input.textContent=value;
}
decimal.addEventListener('click',function(e){
    sign(".");
   
})

let mathematics=(num,result,answerArray)=>{
 num=calculating();
 result=0
 answerArray=num.split("")
if (answerArray[0]=="-"){
    answerArray=answerArray.join("")
    answerArray=answerArray.replace("-","#")
    answerArray=answerArray.split("");
    for( let numeric in answerArray){
        //checks if any character is + so that it should add
    
            if("+"==answerArray[numeric]){
    
    
                console.log("yeah")
              
                answerArray=answerArray.join("")
                answerArray=answerArray.replace("#","-")
                answerArray=answerArray.split("+")
              
                for(let numeric in answerArray){
                    let num=parseFloat(answerArray[numeric])
                    result=num+result
            
            
                }
                finalAnswer.textContent=result;
               input.textContent=result  ;
    
                console.log(result)
               
            }
            else if("*"==answerArray[numeric]){

                answerArray=answerArray.join("")
                answerArray=answerArray.replace("#","-")
                answerArray=answerArray.split("*")
                console.log("multiply",answerArray)
                let result=1;
                
                    let num=parseFloat(answerArray[numeric])
                    console.log(num)
                    result=answerArray[0]*answerArray[1]
            
            
                
                finalAnswer.textContent=result;
               input.textContent=result ;
    
                console.log(result)
               
               
            }
    
            else if("/"==answerArray[numeric]){
    
    
                console.log("yeah")
              
                answerArray=answerArray.join("")
                answerArray=answerArray.replace("#","-")
              answerArray=answerArray.split("/")
                console.log(answerArray)
                let result=1;
                    let num;
                    //let num=parseFloat(answerArray[add])
                    //console.log(num)
                    result=answerArray[0]/answerArray[answerArray.length-1]
                    
            
            
                
                finalAnswer.textContent=result;
                input.textContent=result;
    
                console.log(result)
               
               
            }
            else if("-"==answerArray[numeric]){
    
    
                console.log("yeah")
              
                answerArray=answerArray.join("")
                
              answerArray=answerArray.split("-")
              answerArray=answerArray[0].replace("#","-")
                console.log(answerArray)
                let result=1;
                    let num;
                   
                    result=answerArray[0]-answerArray[1]
                    
            
            
                
                finalAnswer.textContent=result;
               input.textContent=result;
    
                console.log(result)
               
               
            }
            
            


    console.log(answerArray)
        } }
        
        else{ 
            for( let numeric in answerArray){
//checks if any character is + so that it should add

    if("+"==answerArray[numeric]){


        console.log("yeah")
      
        answerArray=answerArray.join("")
        console.log(answerArray)
        answerArray=answerArray.split("+")
      
        for(let numeric in answerArray){
            let num=parseFloat(answerArray[numeric])
            result=num+result
    
    
        }
        finalAnswer.textContent=result;
       input.textContent=result  ;

        console.log(result)
       
    }
    
    else if("*"==answerArray[numeric]){


        console.log("multiply")
      
        answerArray=answerArray.join("")
       
        answerArray=answerArray.split("*")
        console.log("multiply",answerArray)
        let result;
        
          
        
            result=answerArray[0]*answerArray[1]
    
    
        
        finalAnswer.textContent=result;
       input.textContent=result ;

        console.log(result)
       
       
    }

    else if("/"==answerArray[numeric]){


        console.log("yeah")
      
        answerArray=answerArray.join("")
      answerArray=answerArray.split("/")
        console.log(answerArray)
        let result=1;
            let num;
          
            result=answerArray[0]/answerArray[answerArray.length-1]

        finalAnswer.textContent=result;
        input.textContent=result;

        console.log(result)
       
       
    }
    else if("-"==answerArray[numeric]){


        console.log("yeah")
      
        answerArray=answerArray.join("")
      answerArray=answerArray.split("-")
        console.log(answerArray)
        let result=1;
            let num;
           
            result=answerArray[0]-answerArray[1]
            
        finalAnswer.textContent=result;
       input.textContent=result;

        console.log(result)  
    }  
}}}

divide.addEventListener('click',function(e){
mathematics();
    sign("/");})
addition.addEventListener('click',function(e){
    
   mathematics()
   
sign("+")
})
subtraction.addEventListener('click',function(e){
mathematics()
  sign("-")})


multiplication.addEventListener('click',function(e){
    
 mathematics()   
 
   sign("*")

})

  
equal.addEventListener('click',function(e){
    mathematics();

})
let square=document.querySelector('#square')

square.addEventListener('click',()=>{
mathematics()
let ans=input.textContent;
ans=parseFloat(ans)
ans=ans*ans;
input.textContent=ans;
})

clear.addEventListener('click',function(e){
    input.textContent="0";
})

del.addEventListener('click',function(e){
    let value=input.textContent;
    value=value.split("");
    value=value.splice(0,value.length-1);
    value=value.join("");
     (value.length==0)? input.textContent="0" : input.textContent=value;
})  
 