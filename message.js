var pushedCnt = 0;
var hideList = document.getElementsByClassName("hide");
var message = '이거 만드는데 진짜 힘들었다구요 ㅡㅅㅡ';
var i = 0;
var send = null;
var sendC = null;

function sendMessage(){
  if(pushedCnt > 1) return 0;
  else if(pushedCnt == 1){
    send.classList.add('hide');
    document.getElementsByClassName("text_message_me")[1].innerHTML = '<div class="child">'+message+'</div>';
    hideList[0].setAttribute('class', 'wow bounceInRight animated');
    setTimeout(next_message, 1000);
    pushedCnt++;
  } else {
    send = document.querySelector(".send_text");
    send.classList.add('hide');
    display_effect();
    pushedCnt++;
    setTimeout(next_message, 1000);
    setTimeout(typing, 2000);
  }
}

function display_effect(){
    for(var i=0; i<2; i++){
      hideList[0].setAttribute('class', 'wow bounceInRight animated');
  }
}

function next_message(){
  hideList[0].setAttribute('class', 'wow bounceInLeft animated');
}

function typing() {
  sendC  = document.getElementsByClassName("send_text")[0];
  send.classList.remove('hide');
  sendC.innerHTML = '&nbsp&nbsp&nbsp';
  setTimeout(typeWriter, 0);
}

function typeWriter() {
  if(i<message.length){
    sendC.innerHTML += message.charAt(i);
    i++
    setTimeout(typeWriter, 50);
  }
}

function wait(ms){
  var d = new Date();
  var d2 = null;
  do {
    d2 = new Date();
  } while(d2-d < ms);
}
