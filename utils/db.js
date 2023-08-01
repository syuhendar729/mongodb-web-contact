/* === Koneksi ke database mongoDB menggunakan Mongoose === */

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testingwebapp', {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex: true,
});




