function jsListener() {
    this.customEvent = function () {
        this.name = "";
        this.target = null;
    };
    this.listeners = {};
}


/* Method to dispatch the events */
jsListener.prototype.dispatchEvent = function (eventName, eventObj) {
    var _customEvent = new this.customEvent();
    if (!eventObj) {
        _customEvent.name = eventName;
        _customEvent.target = this;
    } else {
        _customEvent = eventObj;
    }
    var listenerArray = this.listeners[eventName];
    if (listenerArray !== undefined && listenerArray !== null) {
        for (var i = 0; i < listenerArray.length; i++) {
            listenerArray[i].listener.call(listenerArray[i].scope, _customEvent);
        }
    }
};

/* Method to register objects for dispatching events.
 * @param event - Event to be listened.
 * @param listener - Handler method for the event. */
jsListener.prototype.addEventListener = function (event, listener, scp) {
    var listeners = this.listeners;
    if (!scp) {
        scp = this;
    }
    if (!listeners[event]) {
        listeners[event] = [];
    }
    if (listeners[event].indexOf(listener) === -1) {
        listeners[event].push({
            listener: listener,
            scope: scp
        });

    }
};

/* Method to unregister objects for dispatching events.
 * @param event - Event to be listened.
 * @param listener - Handler method for the event.*/
jsListener.prototype.removeEventListener = function (event, listener) {
    this.listeners[event] = null;
    console.log(listener);
};
