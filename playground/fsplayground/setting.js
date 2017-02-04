exports.IP = 'localhost';
exports.PORT = 3000;
exports.startServer = function() {
    console.log("Server running at http://" + exports.IP + ":" + exports.PORT + "/");
}
exports.HEADER = {"Content-Type" : "text/html; charset=UTF-8"};

exports.DB_IP = "localhost";
exports.DB_PORT = 4000;
