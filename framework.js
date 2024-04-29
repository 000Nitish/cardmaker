const a = document.getElementById("name");
const file = document.getElementById("file");
const mail = document.getElementById("mail");
const number = document.getElementById("number");
const job = document.getElementById("job");
const btn = document.getElementById("btn");
const bgcolor =document.getElementById("bg-color");
const textcolor =document.getElementById("text-color");


//image fetching and displaying it through #id
file.addEventListener("change",function(){
    const reader =new FileReader();

    reader.addEventListener("load",()=>
{
    localStorage.setItem("recent-image",reader.result);
})

    reader.readAsDataURL(this.files[0]);
})

document.addEventListener("DOMContentLoaded",()=>
{
    const recentImg=localStorage.getItem("recent-image");
    if(recentImg)
    {
        document.getElementById("card-img").setAttribute("src",recentImg);
    }
})

btn.onclick = () =>{
    document.getElementById("card-value").style.display="none";
    document.getElementById("card").style.display="block";
    
    document.getElementById("card").style.backgroundColor=bgcolor.value;
    document.getElementById("card").style.color=textcolor.value;
    document.getElementById("card-name").innerText=a.value;
    document.getElementById("card-intro").innerText=job.value;
    document.getElementById("card-number").innerText=number.value;
    document.getElementById("card-gmail").innerText=mail.value;


}
