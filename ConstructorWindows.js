function Window(ContainerId, number){
  this._Constructor= new Constructor(ContainerId, number);
  this._Eventer = new Eventer(ContainerId);
}
var Directory = document.querySelector('body> .Directory');


function Constructor(ContainerId, number){
  this._render(ContainerId, number);
};

Constructor.prototype = {
   _render: function(ContainerId, number){
     if(Directory=== null){
       this._Body.innerHTML +=`<div class="Directory"></div>`;
       Directory = document.querySelector('body> .Directory');
       Log("Создана Директория");
       this._CreaterWindow(ContainerId, number);
       
     }else{
       this._CreaterWindow(ContainerId, number);
     }
   },
   _Body: document.querySelector('body'),
   _Directory: document.querySelector('body> .Directory'), 
   _CreaterWindow: function(ContainerId, number){
    Directory.innerHTML +=`
      <div class="window" id= "${ContainerId}">${ContainerId} <br/>
        <input class="clicker" id="${ContainerId+"Clicker"}" type="button" value="Кнопка" onclick='Windows[${number}]._Eventer._Click("${ContainerId}")'>
        <div class="display" id="${ContainerId+"Display"}">Результат</div> 
      </div> 
    `;
    Log("создано окно") 
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
			//this._ButtonWindow.addEventListener("click", function(){self._Click(ContainerId)});
	        // Windows[0]._Eventer._Click(ContainerId)
	    Log(ContainerId) 
  },
  
  _Click: function(ContainerId){
    var lpt = document.querySelector(`#${ContainerId}Display`); 
    lpt. innerHTML= 658987;
  },
}