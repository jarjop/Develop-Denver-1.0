var debugLevel, debug;

	var levelValue, caller, messageObj;
	if(debugLevel==0) return;
	if(!window.console) return;
	if(level==null) level = "debug";
	var debugFunction = window.console.log;
	switch(level) {
		case "debug":
			level = 1;
			break;
		case "warn":
			level = 2;
			debugFunction = console.warn
			break;
		case "error":
			level = 3;
			debugFunction = console.error
			break;
		default:
			level = 1;
			break;
	}
	if(level<debugLevel) return;
	try {
		caller = arguments.callee.caller.name;
		callerParent = '';
			if(arguments.callee.caller.callee) callerParent = arguments.callee.caller.callee.caller.name;
		
		if(callerParent && callerParent != '' && callerParent != 'anonymous') caller = callerParent + '>' + caller;
	} catch (err) {
		//do nothing
	}
	if(message==null || message=='') {
		//debugFunction.call(console,caller);
		console.log(caller);
	} else {
		if(typeof(message)=='string' && caller!= '' && caller != 'anonymous') message = caller+' > '+message;
		//debugFunction.call(console,message);
		console.log(message);
	}
}

String.prototype.capitalize = function(){
   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};
	try {
	} catch(e) {
		debug("problem parsing:"+css_pixel_string);
		return css_pixel_string;
	}
		return parseFloat(css_pixel_value) + "px";
	} catch(e) {
		debug("problem parsing:"+css_pixel_value);
		return css_pixel_value;
	}

function randomFromTo(from, to){
	return Math.floor(Math.random() * (to - from + 1) + from);
}