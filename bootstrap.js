$.when(capabilitiesPromiseLoaded).then(function () {    
   
});

var initcapabilities = function () {

    if (datasource == "") {
        if (window.location.hostname == "localhost") {
            if (!using_explorer) {
                datasource = window.location.protocol + "//192.168.0.134:7001";
            } else {
                datasource = window.location.protocol + "//192.168.0.134:7001";

            }
        } else {
            if (using_explorer) {
                analyzer_tcp_port = window.location.port;
            }
            datasource = window.location.protocol + "//" + window.location.hostname + ":" + analyzer_tcp_port;
        }
    }
    
}();
