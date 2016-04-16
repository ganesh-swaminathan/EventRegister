var newListener = new yourFunction();

//Register event with callback
newListener.addEventListener("whateverEvent", function () {alert("whateverEvent Occured");}, this);

function yourFunction() {}

yourFunction.prototype = Object.create(jsListener.prototype);

yourFunction.prototype.functiontoDispatch = function(){
    this.dispatchEvent("whateverEvent");
}


