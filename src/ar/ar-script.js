AFRAME.registerComponent('distance-circle', {
  init: function() {
    //Listen for the circle-adjust-event dispatched from the social-distance service to set the circles attributes according to the users given options
    window.addEventListener('circle-adjust-event', event => {
      for (let [key, value] of Object.entries(event.detail)) {
        console.log('key ', key, 'value ', value);
        this.el.setAttribute(key, value);
      }
    });

    //Once the distance circle is ready and the eventlisteners have been added to the iframe window,
    //dispatch the 'circle-ready-event' that is being listened to by the social-distance-ar page
    let _customEvent = new CustomEvent('circle-ready-event');
    window.parent.window.dispatchEvent(_customEvent);
  }
});
