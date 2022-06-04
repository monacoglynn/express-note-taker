const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    const yellow = '\x1b[33m%s\x1b[0m';
    switch (req.method) {
        case 'GET': {
            console.info(`${fgCyan}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${yellow}${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`${yellow}${req.method} request to ${req.path}`);
        }
        default:
            console.info(`${yellow}${req.method} request to ${req.path}`);
    }
    next();
}

exports.clog = clog