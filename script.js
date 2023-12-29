const hour=document.querySelector('.hour')
const minute=document.querySelector('.min')
const second=document.querySelector('.sec')



setInterval(runclock,1000);


function runclock()
{
    const time=new Date()

    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    hour.style.setProperty('--rotate',hrs*360);
    minute.style.setProperty('--rotate',min*360);
    second.style.setProperty('--rotate',sec*360);
 
}
runclock()