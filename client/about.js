let text=document.querySelector('.svroles')
let pointer=0
let pointer2=0
let teamLeaderState=true
let headwebState=false
let nameArr2='Head Web Developer'.split('')
console.log(nameArr2)
let next=1
let nameArr=["T","e","a","m"," ","L","e","a","d","e","r"]
let interveral=setInterval(()=>{
   
    if(text.textContent!="Team Leader" && teamLeaderState){
        console.log(nameArr[pointer])
        text.textContent=text.textContent+nameArr[pointer]
        pointer++
        next=1

    }
    else if(text.textContent!="Head Web Developer" && headwebState){
        console.log(nameArr2[pointer])
        text.textContent=text.textContent+nameArr2[pointer]
        pointer++
        next=0
    }
    else{
        teamLeaderState=false
        headwebState=false
        text.textContent=text.textContent.substring(0, text.textContent.length - 1);
        if(text.textContent.trim()===""){
            pointer=0
            if(next===1){
            headwebState=true
            teamLeaderState=false
            }
            else{
                teamLeaderState=true
                headwebState=false

            }
           
        }


    }
},100)