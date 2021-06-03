
  var reasons=[
    "Chavi mehra",
    "Akhil mehra",
    "luv mehra",
    "kush mehra",
  ];
  var images=[
   "mom.jpg",
   "dad.jpeg",
   "brother.jpg",
   "me.jpg"
   
  ];
  var i=0;
  function nextslide(){
    document.getElementById("reasontext").innerHTML=reasons[i];    
    document.getElementById("album").src=images[i];
        i++;
        if(i>3){
          i=0;
        }
      }
        
      
