setInterval(()=>{
  d= new Date();
  htime=d.getHours();
  mtime=d.getMinutes();
  stime=d.getSeconds();
  hrota= 30*htime + mtime/2;
  mrota= 6*mtime;
  srota= 6*stime;

  hour.style.transform= `rotate(${hrota}deg)`;
  minute.style.transform= `rotate(${mrota}deg)`;
  second.style.transform= `rotate(${srota}deg)`;
},1000);