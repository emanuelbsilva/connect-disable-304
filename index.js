module.exports = function disable304(){
	return function(req, res, next) {
		res.setHeader('Last-Modified', (new Date()).toUTCString());
		next();
	}
}