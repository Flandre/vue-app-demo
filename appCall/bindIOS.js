window.APP_CALL = {
  automatic: function(type) {
    if(window.webkit.messageHandlers['automatic']){
      window.webkit.messageHandlers['automatic'].postMessage({"type": type})
    }
  },
  automaticSuccess: function(){

  },
  callCamera: function(width, height){
    if(window.webkit.messageHandlers['callCamera']){
      window.webkit.messageHandlers['callCamera'].postMessage({"width": width, "height": height})
    }
  },
  cameraCallback: function(data){

  }
}
