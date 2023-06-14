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
//assigning buttons to numbers
one.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="1"
    }
    else{

        let value=input.textContent+"1";
        input.textContent=value;
    

    }
})


two.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="2"
    }
    else{

        let value=input.textContent+"2";
        input.textContent=value;
    

    }
})

three.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="3"
    }
    else{

        let value=input.textContent+"3";
        input.textContent=value;
    

    }
})
four.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="4"
    }
    else{

        let value=input.textContent+"4";
        input.textContent=value;
    

    }
})


five.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="5"
    }
    else{

        let value=input.textContent+"5";
        input.textContent=value;
    

    }
})

six.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="6"
    }
    else{

        let value=input.textContent+"6";
        input.textContent=value;
    

    }
})


seven.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="7"
    }
    else{

        let value=input.textContent+"7";
        input.textContent=value;
    

    }
})

eight.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="8"
    }
    else{

        let value=input.textContent+"8";
        input.textContent=value;
    

    }
})

nine.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="9"
    }
    else{

        let value=input.textContent+"9";
        input.textContent=value;
    

    }
})

zero.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="0"
    }
    else{

        let value=input.textContent+"0";
        input.textContent=value;
    

    }
})
twoZero.addEventListener('click',function(e){
    if (input.textContent==0){

        input.textContent="00"
    }
    else{

        let value=input.textContent+"00";
        input.textContent=value;
    

    }
})





//assigning signs to symbols
let finalAnswer=document.querySelector('#answer')
let equal=document.querySelector('#equals')
let divide=document.querySelector('#divide')
let addition=document.querySelector('#plus')

let subtraction=document.querySelector('#subtract')
let multiplication=document.querySelector('#multiply')



divide.addEventListener('click',function(e){
  /*the first if-else statement is used to allow use of negative numbers
  so it simply checks on that
  the # symbol is used so that it replaces the numbe it replaces it back with the negative symbol*/
    let num=calculating();
    let result=0
    let answerArray=num.split("")
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
    
    
                    console.log("multiply")
                  
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


            console.log("yeah")
          
            answerArray=answerArray.join("")
           
            answerArray=answerArray.split("*")
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
            console.log(answerArray)
            let result=1;
                let num;
                //let num=parseFloat(answerArray[add])
                //console.log(num)
                result=answerArray[0]-answerArray[1]
                
        
        
            
            finalAnswer.textContent=result;
           input.textContent=result;

            console.log(result)
           
           
        }
        
      
    }

}   let value=input.textContent+"/";
input.textContent=value;})
addition.addEventListener('click',function(e){
    
     // let value=input.textContent+"-";
    //input.textContent=value;
    let num=calculating();
    let result=0
    let answerArray=num.split("")
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
    
    
                    console.log("multiply")
                  
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
                        //let num=parseFloat(answerArray[add])
                        //console.log(num)
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
            console.log(answerArray)
            let result=1;
                let num;
                //let num=parseFloat(answerArray[add])
                //console.log(num)
                result=answerArray[0]-answerArray[1]
                
        
        
            
            finalAnswer.textContent=result;
           input.textContent=result;

            console.log(result)
           
           
        }
        
      
       
}}


    
 
     let value=input.textContent+"+";
    input.textContent=value;


})
subtraction.addEventListener('click',function(e){
    
   // let value=input.textContent+"-";
    //input.textContent=value;
    let num=calculating();
    let result=0
    let answerArray=num.split("")
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
    
    
                    console.log("multiply")
                  
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
                        //let num=parseFloat(answerArray[add])
                        //console.log(num)
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


            console.log("yeah")
          
            answerArray=answerArray.join("")
           
            answerArray=answerArray.split("*")
            let result=1;
            for(let add in answerArray){
                let num=parseFloat(answerArray[numeric])
                console.log(num)
                result=num*result
        
        
            }
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
            console.log(answerArray)
            let result=1;
                let num;
                //let num=parseFloat(answerArray[add])
                //console.log(num)
                result=answerArray[0]-answerArray[1]
                
        
        
            
            finalAnswer.textContent=result;
           input.textContent=result;

            console.log(result)
           
           
        }
        
     
      
    }       

}  let value=input.textContent+"-";
input.textContent=value;})
multiplication.addEventListener('click',function(e){
    
    
 
    let num=calculating();
    let result=0
    let answerArray=num.split("")
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


                console.log("multiply")
              
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
                    //let num=parseFloat(answerArray[add])
                    //console.log(num)
                    result=answerArray[0]-answerArray[1]
                    
            
            
                
                finalAnswer.textContent=result;
               input.textContent=result;
    
                console.log(result)
               
               
            }
            
            


    console.log(answerArray)

 }}
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
            console.log(answerArray)
            let result=1;
                let num;
                //let num=parseFloat(answerArray[add])
                //console.log(num)
                result=answerArray[0]-answerArray[1]
                
        
        
            
            finalAnswer.textContent=result;
           input.textContent=result;

            console.log(result)
           
           
        }
        
   }}
let value=input.textContent+"*";
input.textContent=value;

})




//addition 

calculating()
  
equal.addEventListener('click',function(e){
    

    let num=calculating();
    let result=0
    let answerArray=num.split("")
    for( let numeric in answerArray){
    //checks if any character is + so that it should add

        if("+"==answerArray[numeric]){


           
          
            answerArray=answerArray.join("")
            answerArray=answerArray.split("+")
            
            for(let numeric in answerArray){
                let num=parseFloat(answerArray[numeric])
                result=num+result
                
                
            }
            finalAnswer.textContent=result;
            input.textContent=result;
           
        }
        else if("*"==answerArray[numeric]){


          
          
            answerArray=answerArray.join("")
            answerArray=answerArray.split("*")
        
                let num=parseFloat(answerArray[numeric])
                result=answerArray[0]*answerArray[1]
        
        
                input.textContent=result;
            finalAnswer.textContent=result;
            console.log(result)
           
        }
       else if("-"==answerArray[numeric]){


            console.log("yeah")
          
            answerArray=answerArray.join("")
            answerArray=answerArray.split("-")
        
           
                
                result=answerArray[0]-answerArray[1]
        
        
                input.textContent=result;
            finalAnswer.textContent=result;
            console.log(result)
           
        }
        else if("/"==answerArray[numeric]){


            console.log("yeah")
          
            answerArray=answerArray.join("")
            answerArray=answerArray.split("/")
        
           
                
                result=answerArray[0]/answerArray[1]
        
        
                input.textContent=result;
            finalAnswer.textContent=result;
            console.log(result)
           
        }
       
        
       
       
        


    }
    
   
 

  
        
        

  
    console.log(answerArray)



})

clear.addEventListener('click',function(e){
    
    input.textContent="0";
    finalAnswer.textContent="0";



})


  
 