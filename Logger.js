class AbstractLogger {
    constructor(name) {
        this.name = name
    };
}

class MessageLogger extends AbstractLogger {
    constructor(name) {
        super(name)
        this.log = (msg) => {
            console.log(msg)
        }
    }
}

class RequestLogger extends AbstractLogger {
    constructor(name) {
        super(name)
        this.log = (req) => {
            console.log(`[${name}]: ${req.method} on ${req.path} from ${req.ip}`)
        }
    }
}

export { MessageLogger, RequestLogger };