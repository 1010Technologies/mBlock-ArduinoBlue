(function(ext) {
    var device = null;

    var levels = {
        HIGH:1,
        LOW:0
    };
    
    ext.resetAll = function(){
        device.send([0xff, 0x55, 2, 0, 4]);
    };

    ext.digitalWrite = function(pin,level) {
        device.send([pin, levels[level]])
    };
    
    ext.runArduino = function(){
        responseValue();
    };

    // Extension API interactions
    var potentialDevices = [];
    ext._deviceConnected = function(dev) {
        potentialDevices.push(dev);

        if (!device) {
            tryNextDevice();
        }
    }

    function tryNextDevice() {
        // If potentialDevices is empty, device will be undefined.
        // That will get us back here next time a device is connected.
        device = potentialDevices.shift();
        if (device) {
            device.open({ stopBits: 0, bitRate: 115200, ctsFlowControl: 0 }, deviceOpened);
        }
    }

    var watchdog = null;
    function deviceOpened(dev) {
        if (!dev) {
            // Opening the port failed.
            tryNextDevice();
            return;
        }
        device.set_receive_handler('arduino',processData);
    };

    ext._deviceRemoved = function(dev) {
        if(device != dev) return;
        device = null;
    };

    ext._shutdown = function() {
        if(device) device.close();
        device = null;
    };

    ext._getStatus = function() {
        if(!device) return {status: 1, msg: 'Arduino disconnected'};
        if(watchdog) return {status: 1, msg: 'Probing for Arduino'};
        return {status: 2, msg: 'Arduino connected'};
    }

    var descriptor = {};
    ScratchExtensions.register('BittyController', descriptor, ext, {type: 'serial'});
})({});
