(function (){
var bz = `
  <div class="logger"></div> 
  <style>
    .logger span {
      font-size: 90%;
      font-weight: 900;
      color:#fff;
      
    }
    .logger {
      position: fixed;
      bottom:0px;
      font-size: 70%;
      font-weight: 100;
      color: #00ff00;
      overflow:auto;
      max-height: 15%;
      border: solid 1px #415851;
      background: #000;
      width: 95%;
    }
  </style>
  `;
document.write(bz) 
})();

var LOGstrNumberLOG = 0;
this.Log = function(Message) { 
  var LogDiv = document.querySelector('.logger');
  var StorageLogDiv = LogDiv.innerHTML;
  LogDiv.innerHTML= "<span>"+LOGstrNumberLOG+"</span>"+" "+Message +'<br/>' + StorageLogDiv;
  LOGstrNumberLOG++;
}
Log("<div style='color:#FFB901;'>____Лог , Добавлен______</div>") ;

