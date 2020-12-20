var Directory = document.querySelector('.Directory'); 





function Window(ContainerId, number){
  this._Constructor= new Constructor(ContainerId, number);
  this._Eventer = new Eventer(ContainerId);
}

function Constructor(ContainerId, number){
  this._render(ContainerId, number);
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
     Directory.appendChild(elementWindow);
     Log(`создан элемент ${ContainerId}`) 
   },
}



function Eventer(ContainerId){
  this._Listener(ContainerId);
};

Eventer.prototype = {
  
  _Listener: function(ContainerId) {
		
		this._ButtonWindow = document.querySelector(`#${ContainerId}Clicker`);
		this._DisplayWindow = document.querySelector(`#${ContainerId}Display`);
		self = this
			this._ButtonWindow.addEventListener("click", function(){self._Click(ContainerId)});
	       
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
	
