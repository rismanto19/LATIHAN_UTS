let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemaPRD = new mongoose.Schema({
  nama: String,
  deskripsi: {
    type: String,
    require: true,
  },
  harga: {
    type: Number,
    require: true,
  },
  stok: {
    type: Number,
    require: true,
  },
  kategori_id: {
    type: Object,
  },
  aktif: Boolean,
});

//create Model from Schema
mongoose.model("Produk", schemaPRD);