///////////////////////////////////////////////////////////////////////
// HCEX Javascript Interface
///////////////////////////////////////////////////////////////////////

//
// Common
//
var callBackFuncList = new Array();
var callBackSearchFuncList = new Array();
var callBackWSDataReceivedFuncList = new Array();

if( !window.companionDevice ) {
	window.companionDevice = {};
}
if( !window.appLauncher ) {
	window.appLauncher = {};
}


//
//
//
var api_server ;
(function() {
	api_server = location.host;
	console.log( location.host );
}());
function restapi_url( endpoint ) {
	return "http://" + api_server + "/" + endpoint;
}

///////////////////////////////////////////////////////////////////////
// API for HCEX
///////////////////////////////////////////////////////////////////////
/**
 * window.appLauncher.setDevice()
 */
window.appLauncher.setDevice = function(addr) {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=select&ipaddr=" + addr ) )
		.then(function(response) {
//			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

window.appLauncher.setDeviceDirect = function( profile, ipaddr, applicationURL, uuid, locationURL ) {
	return new Promise( function(resolve, reject) {
		var devparam = "";
		devparam = devparam + "&profile=" + profile;
		devparam = devparam + "&ipaddr=" + ipaddr;
		devparam = devparam + "&ApplicationURL=" + applicationURL;
		devparam = devparam + "&uuid=" + uuid;
		devparam = devparam + "&LocationURL=" + locationURL;

		fetch( restapi_url( "hyconet?command=directselect" + devparam ) )
		.then(function(response) {
//			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.searchDevices()
 */
window.appLauncher.searchDevices = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=search" ) )
		.then(function(response) {
//			console.log(JSON.stringify(myJson));
			resolve(response.json());
		});
	});
};

///////////////////////////////////////////////////////////////////////
// API for HCEX Emulator
///////////////////////////////////////////////////////////////////////

/**
 * window.appLauncher.getDialAppInfoURL()
 */
window.appLauncher.getDialAppInfoURL = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getDialAppInfoURL" ) )
		.then(function(response) {
			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.getDialAppInfo()
 */
window.appLauncher.getDialAppInfo = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getDialAppInfo" ) )
		.then(function(response) {
			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

///////////////////////////////////////////////////////////////////////
// HCEX API
///////////////////////////////////////////////////////////////////////
/**
 * window.appLauncher.getAvailableMediaFromHostDevice()
 */
window.appLauncher.getAvailableMediaFromHostDevice = function(cache) {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getMedia") )
		.then(function(response) {
//			console.log(JSON.stringify(myJson));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.getChannelInfoFromHostDevice()
 */
window.appLauncher.getChannelInfoFromHostDevice = function(media, cache) {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getChannels&media=" + media) )
		.then(function(response) {
//			console.log(JSON.stringify(myJson));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.startAITControlledAppToHostDevice()
 */
window.appLauncher.startAITControlledAppToHostDevice = function(mode, app) {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=startAITControlledApp&mode=" + mode + "&app=" + JSON.stringify(app) ))
		.then(function(response) {
//			console.log(JSON.stringify(myJson));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.getTaskStatusFromHostDevice()
 */
window.appLauncher.getTaskStatusFromHostDevice = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getTaskStatus" ))
		.then(function(response) {
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.getReceiverStatusFromHostDevice()
 */
window.appLauncher.getReceiverStatusFromHostDevice = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=getReceiverStatus" ))
		.then(function(response) {
//			console.log(JSON.stringify(myJson));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.connWebsocket()
 */
window.appLauncher.connWebsocket = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=connws" ))
		.then(function(response) {
//			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.disconnWebsocket()
 */
window.appLauncher.disconnWebsocket = function() {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=disconnws" ))
		.then(function(response) {
//			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

/**
 * window.appLauncher.sendWebsocket()
 */
window.appLauncher.sendWebsocket = function(text) {
	return new Promise( function(resolve, reject) {
		fetch( restapi_url( "hyconet?command=sendws&message=" + text))
		.then(function(response) {
//			console.log(JSON.stringify(response));
			resolve(response.json());
		});
	});
};

