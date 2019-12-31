var isPushed = false;

function sendMessage(){
  if(isPushed) return 0;
  else {
    document.querySelector(".send_text").classList.add('hide');
    display_effect();
    isPushed = true;
  }
}

function display_effect(){
  var hideList = document.getElementsByClassName("hide");
    for(var i=0; i<2; i++){
      hideList[0].setAttribute('class', 'wow bounceInRight animated');
  }

}

function wait(ms){
  var d = new Date();
  var d2 = null;
  do {
    d2 = new Date();
  } while(d2-d < ms);
}
