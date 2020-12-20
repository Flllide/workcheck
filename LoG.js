
(function (){
var bz = `
  <div onclick="logFunctional.showLog()" class="IconLoger" style="display:none;">&lt;/&gt;</div> 
  <div class="logger">
    <div class="loggerDisplay">
       <div class="scrollFocusObject" style="order: 2;"></div>
    </div>
    <div class="loggerInterface">
      <div class="loggerWriteCode" onclick="LogInteraction('WriteOpen')">+</div>
      <div class="loggerWriteInvalidation" onclick="LogInteraction('WriteInvalidat')"style="display:none">×</div>
      <div class="loggerWriteTriggering" onclick="LogInteraction('WriteSend')" >\></div> 
    </div> 
  </div>
  
  <style>
    .IconLoger{
      color:#fff;
      background: #000;
      box-shadow: inset -1px -1px 3px #0f8;
      display:inline-flex;
      font-size: 170%;
      padding: 1%;
      border-radius: 100% 100% 100% 50%;
      opacity: 0.7;
      position:fixed;
      bottom:0px;
      right:0px;      
     }
    .logger{
      position: fixed;
      max-width: 98%;
      width: 98%;
      bottom:0px;
      left:0px;
      display:flex;
      max-height: 15%;
      padding: 1%;
     }
     
     
    .logger .loggerInterface{
      flex-grow:1;
      display:flex;
      font-size: 150%;
      flex-direction: column;
      flex-wrap: wrap;
     }
    .logger .loggerInterface div {
      flex-grow:1;
      color:#fff;
      background: #000000;
      box-shadow:inset 1px 1px 0px #515151;
      text-align: center;
      font-weight: 900;
    }
    .logger .loggerInterface div:active {
      background:#777;
    }
   .logger .loggerInterface div span {
     color: #BEE1B3
    }
    
    
    .logger .loggerDisplay {
      font-size: 70%;
      font-weight: 300;
      color: #00ff00;
      border: solid 1px #415851;
      background: #000;
      flex-grow:5;
      display:flex;
      flex-flow: column;
      overflow:auto;
    }
    .logger .loggerDisplay div{
      box-shadow:0px 1px 0px rgba(205, 215, 205, 0.1); 
     }
    .logger .loggerDisplay div span {
      font-size: 90%;
      font-weight: 900;
      color:#fff;
    }
    .logger .loggerDisplay .logConsWrite {
     background: #000;
     order: 1;
     min-width:0px;
     border: none;
     box-shadow:0 0 50px #00FF46;
    }
     
    
   .logger .loggerDisplay .logConsWrite:focus{
   outline:none;
  }
  </style>
  `;
document.write(bz) 
})();


this.logFunctional = {
  
  logger: document.querySelector('.logger'),
  IconLoger: document.querySelector('.IconLoger'),
  loggerDisplay: document.querySelector('.loggerDisplay'),
  
  loggerWriteCode: document.querySelector('.loggerWriteCode'),
  loggerWriteTriggering: document.querySelector('.loggerWriteTriggering'),
  loggerWriteInvalidation: document.querySelector('.loggerWriteInvalidation'),
  
  
  NumberString: 0,
  
  output: function(Message) {
    this.loggerDisplay.innerHTML+= "<div><span>"+this.NumberString+"</span>"+" "+Message +'</div>';
    this.NumberString++;
    document.querySelector('.scrollFocusObject').scrollIntoView();
  },
  hideLog: function(){
    this.logger.style.display= "none";
    this.IconLoger.style.display= "flex";
  },
  showLog: function(){
    this.logger.style.display= "flex";
    this.IconLoger.style.display= "none";
  }
}


this.Log = function(Message) { 
 if(Message === "h" ){
   logFunctional.hideLog()
 }else{
  logFunctional.output(Message)
 }
}

this.LogInteraction = function(option){
      if(option==="WriteOpen"){
        logFunctional.loggerDisplay.innerHTML+= `<div type="text"class="logConsWrite"contenteditable="true"></div>`;
        logFunctional.loggerWriteCode.style.display= "none";
        logFunctional.loggerWriteInvalidation.style.display= "block";
        document.querySelector('.scrollFocusObject').scrollIntoView();
        document.querySelector('.logConsWrite'). focus();
      }
      else if(option==="WriteSend"){
      var loggerDisplayValue = document.querySelector('.logConsWrite'). innerHTML;
      eval(loggerDisplayValue);
        
      }
      else {
        document.querySelector('.logConsWrite'). remove();
        logFunctional.loggerWriteCode.style.display= "block";
        logFunctional.loggerWriteInvalidation.style.display= "none";
      };
}




Log("<div style='color:#FFB901; display:inline;'>____Лог , Добавлен______</div>") ;
//this.logFunctional.output();


