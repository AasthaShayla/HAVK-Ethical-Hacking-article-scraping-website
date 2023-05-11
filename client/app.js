
document.querySelectorAll('.codeOption').forEach((el,index)=>{el.addEventListener('click',()=>{if(index==1){el.style.background="green"}else{el.style.background="red"}})})
let burger
let navbar
let cross
let created=false
let navcreated=false
const interval = setInterval(function() {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

    if(width<=700){
    document.querySelector('.navel div').style.display="none"
    document.querySelector('.LandingText h3').setAttribute ('style', 'font-size: 15px !important;');
    burger=document.createElement('img')
    burger.setAttribute('src', './burger.svg')
    burger.setAttribute('class','burger-menu')

if(navcreated==false)
{
    navcreated=true
    navbar=document.createElement('div')
     navbar.setAttribute('class','navbar-inner')
     let about=document.createElement('h1')
     about.setAttribute('class','aboutText')
     about.innerText="About Us"
    navbar.appendChild(about) 
    about.addEventListener('click',()=>{
        window.location.href="./aboutus.html"
    })
    let news=document.createElement('h1')
    news.setAttribute('class','aboutText')
    news.innerText="News"
    news.addEventListener('click',()=>{
        window.location.href="./news.html"
    })
    navbar.appendChild(news)
     document.querySelector('body').appendChild(navbar)
   
  }  cross=document.createElement('img')
    cross.setAttribute('src', './xicon.svg')
    burger.addEventListener('click',()=>{
      
        navbar.classList.add('clicked')
    })
    cross.setAttribute('class','xicon'
      
     )
     cross.addEventListener('click',()=>{
        navbar.classList.remove('clicked')
        navbar.remove()
        navcreated=false
        

     })
    navbar.appendChild(cross)
    
   
   
   
    
    if(created==false){
    document.querySelector('.navel ').appendChild(burger)
    created=true
    }
    }
    else{
        created=false
        document.querySelector('.navel div').style.display="flex"
       if( document.querySelector('.burger-menu'))
        document.querySelector('.burger-menu').remove()
    document.querySelector('.LandingText h3').setAttribute ('style', 'font-size: 20px !important;');

    }
  }, 100);
 
document.body.scrollTop=0
let country;
document.querySelector('.model').style.opacity=0
document.querySelector('body').style.overflowY="hidden"
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
fetch('https://api.ipregistry.co/?key=nnym2r91gi242170')
    .then(function (response) {
       let ipdata=response.json().then((data) =>{
        fetch('./csvjson.json').then((data) =>{data.json().then((e)=>{
           e.forEach((countri)=>{
            if (countri["Country"]===country){
                document.querySelector('.web-malware').innerHTML=`${countri["% of Computers Infected with at Least One Malware Attack (Web-Based)"]}%`
                document.querySelector('.malware').innerHTML=`${countri["% of Computers Facing at Least One Local Malware Attack"]}%`
                document.querySelector('.spam-email-data').innerHTML=`${countri["% of all Spam Emails by Originating Country (Yearly)"]}%`
            }
           })
        })})

        country= data.location.country.name
        
        document.querySelector('.countryText').innerHTML=`cyber crime rate in ${country}`
        document.querySelector('.main').style.opacity="1";loader.style.opacity="0";chart.deltaLatitude=-data.location.latitude;chart.deltaLongitude=-data.location.longitude;setTimeout(()=>{
            let opacity=0;
            let interval=setInterval(()=>{
                if(document.querySelector('.model')){
                document.querySelector('.model').style.opacity=opacity;opacity+=0.1;if(opacity==1){clearInterval(interval)}}},1)
               },100)})   
       
      
    }).catch(error => {console.log(error)})
const questions=[{
    "question":"Which of the following is NOT a common method of social engineering? ",
    "answer":2,
    "options":["A)Phishing","B)Shoulder surfing","C)Malware injection","D)Spear phishing"],
},{"question":"What is the term used to describe the practice of using multiple authentication methods to access a system?,",
"answer":0,
"options":["A.  Multifactor authentication", 
   " B.Single-factor authentication",
   " C. Biometric authentication",
   " D.  None of the above"],},{
    "question":"What is the term used to describe the practice of hiding data within other data?",
    "answer":1,
    "options":["a. Encryption","b. Steganography","c. Authentication","d. Authorization"],
   },{
    "question":"Which of the following is a type of attack that involves intercepting and altering communications between two parties",
    "answer":3,
    "options":["a. Phishing","b. Malware","c. Distributed denial of service (DDoS)","d.  Man-in-the-middle (MitM) attack "],
   },{
    "question":"What is the term used to describe the practice of accessing a system or network without authorization?",
    "answer":0,
    "options":["a. Hacking","b.Phishing","c.Social engineering","d.Malware"],
   },{
    "question":"What is the term used to describe a malicious software that is designed to damage, disrupt, or gain unauthorized access to a system or network?",
    "answer":3,
    "options":["a. Virus","b. Worm","c. Trojan","d.All of the above"],
   },{
    "question":"Which of the following is a technique used to prevent unauthorized access to a system or network by blocking certain types of traffic?",
    "answer":0,
    "options":["a.Firewall","b.Antivirus","c. Encryption","d.Intrusion detection system (IDS)"],
   },{
    "question":"What is the term used to describe the practice of verifying the identity of a user or device before allowing access to a system or network?",
    "answer":0,
    "options":["a. Authentication","b. Authorization","c. Encryption","d. Steganography"],
   },{
    "question":"What is the term used to describe a type of attack in which an attacker gains access to a system or network by exploiting a vulnerability that has not yet been patched?",
    "answer":1,
    "options":["a.Social engineering","b.Zero-day exploit","c. Cross-site scripting (XSS)","d. SQL injection"],
   },{
    "question":"What is the term used to describe a type of attack in which an attacker gains access to a system or network by exploiting a vulnerability that has not yet been patched?",
    "answer":1,
    "options":["a. Encryption","b. Digital signature","c. Hash function","d. Symmetric key"],

   }]
document.querySelectorAll('.pages').forEach((el)=>{
    el.childNodes.forEach((elP)=>{elP.childNodes.forEach((lis)=>{
        console.log(lis.tagName)
    if(lis.tagName==="LI"){
        lis.style.background="transparent"

    }
    })})
})
let questionNumber=0
document.querySelectorAll('.number').forEach((el,index)=>{
    el.style.background="#1b1b1b"
    el.addEventListener("click",(e)=>{
        document.querySelectorAll('.number').forEach((ele,index)=>{
            ele.style.background="#1b1b1b"})
        el.style.background="#1D1370"

        questionNumber=index
        set()
    })
})
document.querySelectorAll('.number')[0].style.background="#1D1370"
set()
function pop(element){
    let opa=0
    element.style.opacity=opa
    setInterval(()=>{
        if(opa<1){
            opa+=0.5
            element.style.opacity=opa

        }

    },0.5)

}
function set(){
let element=document.querySelectorAll('.option')
pop(document.querySelector('.question'))
document.querySelector('.question').innerHTML=questions[questionNumber]["question"]
element.forEach((el,index)=>{
    el.style.background="rgba(27, 27, 27,0.7)"
})
element.forEach((el,index)=>{
    pop(el)
    el.addEventListener('click',()=>{
        if(questions[questionNumber]["answer"]==index){
            
            el.style.background="#187330"
        }
        else{
            el.style.background="#8f312e"
        }
    })
    el.children[0].innerHTML=questions[questionNumber]["options"][index]
})
}
document.querySelector('body').style.overflow="hidden"
var loader=document.querySelector('.loadingPage')
loader.style.opacity="1"
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }

    })
})
const observerPage=new IntersectionObserver((en)=>{
   en.forEach((entry)=>{
    if(entry.isIntersecting){
        
    document.querySelectorAll('.page').forEach((el)=>{
        let id=el.getAttribute('id')
        console.log()
        console.log(document.querySelector('.scroll').children[0].childNodes.forEach((el)=>{if(el.nodeName==="LI"){
          if(el.getAttribute("id")===id.split('')[4]){
            document.getElementById(id.split('')[4]).style.background="red"
          }
        }}))
    })
        
    }
   })
})

const pages=document.querySelectorAll('.page').forEach((el)=>{
    observerPage.observe(el)
})
const hidenEL=document.querySelectorAll('.hidden')
hidenEL.forEach((el)=>{observer.observe(el)})
console.log(hidenEL)




am4core.useTheme(am4themes_animated);
var chart = am4core.create("earth", am4maps.MapChart);
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.color="#0af"
polygonSeries.useGeodata = true;
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.stroke = am4core.color("#000");


chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Orthographic();
chart.maxZoomLevel = 1;
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#0af");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;

var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
let timeOutRotation=setTimeout(function(){
  animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
}, 3000)

chart.seriesContainer.events.on("down", function(){
  animation.pause()
})

chart.seriesContainer.events.on("up", function(){
    animation.resume()
})
//model controller
window.addEventListener('click', function(e){   
    if (document.querySelector('.data-div').contains(e.target)){
        
      
    } else{
        modelClose()
    }
  });
document.querySelector('.cross').addEventListener("click",()=>{modelClose()})  
function modelClose(){
    document.querySelector('body').style.overflowY="visible"
    document.querySelector('.model').remove()

  }