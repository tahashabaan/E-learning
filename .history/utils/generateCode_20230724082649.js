function coupongenerator() {
    let coupon = "";
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < possible.length; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return coupon;
}
 module.exports = coupongenerator;