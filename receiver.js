var fs = require('fs');

module.exports = {
	handle : function (data) {
		fs.appendFile(__dirname + "/public/data.json", "\n" + data, function (err) {
			if (err) {
				return console.log(err);
			}
		});
	}
};
