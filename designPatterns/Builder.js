class Connection {


    _constructor() {
    }

    sendMsg(msg) {
        console.log("sending message to " + this._protocol + "://" + this._host + ":" + this._port);
    }

    port(port) {
        this._port = port;
    }

    host(host) {
        this._host = host;
    }

    protocol(protocol) {
        this._protocol = protocol;
    }

    maxConnections(maxConnections) {
        this._maxConnections = maxConnections;
    }

    socketTimeout(socketTimeout) {
        this._socketTimeout = socketTimeout;
    }

    addHosts(host){
        if(!this._additionalHosts){
            this._additionalHosts = []
        }
        this._additionalHosts.push(host)
    }
    readTimeout(readTimeout) {
        this._readTimeout = readTimeout;
    }

    idleTimeout(idleTimeout) {
        this._idleTimeout = idleTimeout;
    }

    static builder() {
        return new ConnectionBuilder();
    }
}



class ConnectionBuilder {


    constructor() {
        this.connection = new Connection();
    }

    host(host) {
        this.connection.host(host);
        return this;
    }

    port(port) {
        this.connection.port(port);
        return this;
    }

    protocol(protocol) {
        this.connection.protocol(protocol);
        this._protocol = protocol;
        return this;
    }

    maxConnections(maxConnections) {
        this.connection.maxConnections(maxConnections);
        this._maxConnections = maxConnections;
        return this;
    }

    socketTimeout(socketTimeout) {
        this.connection.socketTimeout(socketTimeout);
        this._socketTimeout = socketTimeout;
        return this;
    }

    readTimeout(readTimeout) {
        this.connection.readTimeout(readTimeout);
        this._readTimeout = readTimeout;
        return this;
    }

    addHost(host) {
        this.connection.addHosts(host);
        return this;
    }


    idleTimeout(idleTimeout) {
        this.connection.idleTimeout(idleTimeout);
        return this;
    }


    build() {

        return this.connection;
    }
}


let connection = Connection.builder()
    .host("localhost")
    .port(8181)
    .idleTimeout(12)
    .readTimeout(123)
    .maxConnections(20)
    .protocol("https")
    .addHost("host1")
    .addHost("host2")
    .addHost()
    .build();

connection.sendMsg("hello")