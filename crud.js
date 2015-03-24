var pg = require('pg');

function add() {
	
}

function dump() {
	pg.connect(process.env.DATABASE_URL, function (err, client, done) {
		client.query('TABLE results;', function (err, result) {
			done();
			if (err) {
				console.error(err);
				return "Error " + err;
			} else {
				return result.rows;
			}
		});
	});
}

module.exports = {
	add : add,
	dump : dump
};
