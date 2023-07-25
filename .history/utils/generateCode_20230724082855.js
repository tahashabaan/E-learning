function coupongenerator(req, res, next) {
    let coupon = "";
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < possible.length; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    req.body.code = coupon;
}
 module.exports = coupongenerator;