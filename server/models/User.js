const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    credit: Number,
    role: {
        type: String,
        enum: ["User", "Artist"],
        default: 'User'
    },
    profileImg: String,  
    obras:[{type:Schema.Types.ObjectId, ref:"ObraMaestra"}]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;