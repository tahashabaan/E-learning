function coupongenerator() {
    var coupon = "";
    var possible = “abcdefghijklmnopqrstuvwxyz0123456789”;
    for (var i = 0; i < possible.length; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return coupon;
}
 module.exports = coupongenerator;