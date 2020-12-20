var Directory = document.querySelector('.Directory'); 
this.Log = function(Message) {
 if(Message === "h" ){
   logFunctional.hideLog()
 }else if(Message === "crW"){
  numberWindow++;
  Windows.push( new Window('Window'+numberWindow))
 }else{
  logFunctional.output(Message)
 }
}




function Window(ContainerId, number){
  this._Constructor= new Constructor(ContainerId, number);
  this._Eventer = new Eventer(ContainerId);
}

function Constructor(ContainerId, number){
  this._render(ContainerId, number);
  this._renderBacWind(ContainerId);
};

Constructor.prototype = {
   _Body: document.querySelector('body'),
   
   _render: function(ContainerId, number){
      if(Directory=== null){
        var elementDirectory = document.createElement("div");
        elementDirectory.className = "Directory";
        this._Body.appendChild(elementDirectory);
        Directory = document.querySelector('.Directory'); 
        Log("Создана Директория");
        this._CreaterWindow(ContainerId, number);
       }else{
         this._CreaterWindow(ContainerId, number);
       }
   },
   _CreaterWindow: function(ContainerId, number){
     var elementWindow = document.createElement("div");
     elementWindow.className = "window";
     elementWindow.id =ContainerId;
     elementWindow.innerHTML = `
        <div class="window" id= "${ContainerId}">${ContainerId} <br/>
          <input class="clicker" id="${ContainerId+"Clicker"}" type="button" value="Кнопка" >
          <div class="display" id="${ContainerId+"Display"}">Результат</div> 
        </div>
    `;
   // elementWindow.style.backgroundColor = this._generatorNackground(); 
     Directory.appendChild(elementWindow);
     Log(`создан элемент ${ContainerId}`);
     
   },
   _renderBacWind: function(ContainerId){
   var randNum = Math.floor(Math.random() * 3000);
    setInterval(func, randNum); 
    function func(){ 
      var lix = `0px 0px 5px #${back()}`;
      //Log(back()) 
     //document.querySelector(`#${ContainerId}`).style.backgroundColor =back(); 
     document.querySelector(`#${ContainerId}`).style["boxShadow"] = lix;
     document.querySelector(`#${ContainerId}Clicker`).style["boxShadow"] = lix;
    }
    function back(){
      
      col = Math.round(50.0*Math.random());
      r = col.toString(16);
      col = Math.round(250.0*Math.random());
      g=col.toString(16);
      col = Math.round(250.0*Math.random());
      d=col.toString(16);
      col=r+g+d;
      return col;
   
    }
   },
}



function Eventer(ContainerId){
  this._Listener(ContainerId);
};

Eventer.prototype = {
  
  _Listener: function(ContainerId) {
		
		var ButtonWindow = document.querySelector(`#${ContainerId}Clicker`);
		var DisplayWindow = document.querySelector(`#${ContainerId}Display`);
		self = this
	    ButtonWindow.addEventListener("click", function(){self._Click(ContainerId)});
	    
  },
  
  _Click: function(ContainerId){
    var lpt = document.querySelector(`#${ContainerId}Display`);
    var yserData = new Date();

    lpt. innerHTML= `ваш ip: ${IP} <br/> ваше время: ${yserData}`;
  },
}
/*
    "Год сегодня - " + date.getFullYear() + br +
     "месяц сегодня - " + date.getMonth() + br +
     "день сегодня - " + date.getDate() + br +
     "часов сейчас - " + date.getHours() + br +
     "минут - " + date.getMinutes() + br +
     "cекунд - " + date.getSeconds() + br ;
*/
	
