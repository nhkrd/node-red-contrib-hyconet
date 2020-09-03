//
// node-red plugin for Hybridcast Connect
//
var hyconet = require("hyconet.js");

module.exports = function(RED) {
	// search
	function search(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
//console.log("***** Config");
//console.log(config);
			var hcobj = hyconet.search(msg.payload);
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("search", search);

	// select
	function select(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.select( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("select", select);

	// directselect
	function directselect(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.directselect( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("directselect", directselect);

	// getDialAppInfoURL
	function getDialAppInfoURL(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getDialAppInfoURL( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getDialAppInfoURL", getDialAppInfoURL);

	// getDialAppInfo
	function getDialAppInfo(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getDialAppInfo( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getDialAppInfo", getDialAppInfo);

	// getDeviceList
	function getDeviceList(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			msg.payload = hyconet.getDeviceList( msg.payload );
			node.send(msg);
		});
	}
	RED.nodes.registerType("getDeviceList", getDeviceList);

	// getDeviceListInfo
	function getDeviceListInfo(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			msg.payload = hyconet.getDeviceListInfo( msg.payload );
			node.send(msg);
		});
	}
	RED.nodes.registerType("getDeviceListInfo", getDeviceListInfo);

	// getMedia
	function getMedia(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getMedia( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getMedia", getMedia);

	// getChannels
	function getChannels(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getChannels( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getChannels", getChannels);

	// getReceiverStatus
	function getReceiverStatus(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getReceiverStatus( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getReceiverStatus", getReceiverStatus);


	// startAITControlledApp
	function startAITControlledApp(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.startAITControlledApp( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("startAITControlledApp", startAITControlledApp);

	// getTaskStatus
	function getTaskStatus(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.getTaskStatus( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("getTaskStatus", getTaskStatus);


	// connws
	function connws(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var hcobj = hyconet.connWebsocket( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("connws", connws);


	// sendws
	function sendws(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {

			var message = "";
			if( "message" in msg.payload ) {
				var sendTextToHostDevice = {
					"message": {
						"devid": "hcex",
						"sendTextToHostDevice": {
							"text": ""
						}
					}
				};
				sendTextToHostDevice["message"]["sendTextToHostDevice"]["text"] = msg.payload["message"] ;

//				msg.payload["message"] = JSON.stringify(sendTextToHostDevice);
				msg.payload = sendTextToHostDevice;
			}

			var hcobj = hyconet.sendWebsocket( msg.payload );
			hcobj.then(function(data) {
				msg.payload = data;
				node.send(msg);
			});
		});
	}
	RED.nodes.registerType("sendws", sendws);


	// recvws
	function recvws(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		hyconet.setWebsocketListener( 
			function( data ) {
//console.log( "recvws: " + data )

				let msg = {"payload": data};
				node.send( [msg, null] );
			},

			function(data) {
				let msg = {"payload": data};
				node.send( [null, msg] );
			}
		);
	}
	RED.nodes.registerType("recvws", recvws);
}
