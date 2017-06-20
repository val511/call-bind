const xosq = {
  anun: 'mari',
  speak: function() {
    console.log(this.anun);
  }
};
const bar = { 
	anun:'nane' 
};
xosq.speak.call(bar);