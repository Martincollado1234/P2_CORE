 const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter{
	constructor(configuracion){
		super();
		later.date.localTime();
		if (configuracion instanceof Array) {
			for (var i=0; i<configuracion.length; i++){
				var e= configuracion[i];
				const schedule = later.parse.text('at' + e.hora);
				later.setInterval(() => this.emit('ideal', e.temperatura),schedule);
			}
		}
	}
}

exports = module.exports = Programador; 
