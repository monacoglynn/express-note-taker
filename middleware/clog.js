const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    const yellow = '\x1b[33m';
    const red = '\x1b[31m'
    const magenta = '\x1b[35m'
    switch (req.method) {
        case 'GET': {
            console.info(`${fgCyan}${req.method} request to ${req.path}\n`);
            break;
        }
        case 'POST': {
            console.info(`${yellow}${req.method} request to ${req.path}\n`);
            break;
        }
        case 'DELETE': {
            console.info(`${red}${req.method} request to ${req.path}\n`);
            break;
        }
        default:
            console.info(`${magenta}${req.method} request to ${req.path}\n`);
    }
    next();
}

exports.clog = clog