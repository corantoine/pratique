/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} _res 
 */
export function accesslogMiddleware(req, _res, next) {
    const datetime = new Date().toISOString()
    console.log(`${datetime} - [${req.method}] ${req.path} - from ${req.ip}`)
    //next() veut dire qu'on continue l'appel
    next()
}