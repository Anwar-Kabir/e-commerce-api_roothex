const {Schema, model} = require("mongoose");
const uuid = require("uuid");

const productStyleSchema = new Schema ({
    styleid: {type: String, default: uuid.v1}, 
    title:{type: String, required: true},
    price:{type: String, required: true},
    images:{type: Array, required: true, default:[]}
},
{ versionKey: false }
);

const productStyleModel = model("ProductStyle", productStyleSchema);

module.exports = productStyleModel; 