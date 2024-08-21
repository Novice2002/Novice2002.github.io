// let myHeading = document.querySelector('h1')
// myHeading.textContent = "HelloWorld"
// function multiply(num1,num2){
//     let result = num1 * num2;
//     return result
// }
// // console.log(multiply(65,43));
// // document.querySelector('html').addEventListener('click',function(){
// //     alert('别戳我，我怕疼。。')
// // })
// document.querySelector('html').addEventListener('click',()=>{
//     alert('别再戳我了，我要生气了！！！')
// })
let myImage = document.querySelector('img')

myImage.onclick = ()=>{
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/image.png'){
        myImage.setAttribute('src','images/image2.png')
    }else{
        myImage.setAttribute('src','images/image.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName(){
    let myName = prompt('请输入你的名字')
    if (!myName) {
        setUserName()
    }else{
        localStorage.setItem('name',myName)
        myHeading.textContent = 'Mozilla 酷毙了，' + myName
    }
    
}

if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName
}
myButton.onclick = ()=>{
    setUserName()   
}
