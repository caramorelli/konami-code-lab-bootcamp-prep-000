const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
 
  var index = 0;

  document.body.addEventListener('keydown',function(e){
      var key = parseInt(e.which || e.detail);
      const keyName = event.key
      
      if( key === codes[index] ){
      index++;
      
        if(index === codes.length){
        alert("Konami");
        index = 0;
      }
    }
    else{
      console.log(e.which);
      index = 0;
    }
  })
}