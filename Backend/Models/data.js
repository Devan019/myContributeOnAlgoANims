const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : String,
    emailId : String,
    password : String,

    details : {
        country : {
            type : String,
            default : "NA"
        },
        contactNo : {
            type : Number,
            default : -9999999,
        }

    },
    accounts : {
        github : {
            type : String,
            default : "NA"
        },
        linkedlin : {
            type : String,
            default : "NA"
        },
        discord : {
            type : String,
            default : "NA"
        }
    },
    userNames : {
        leetcode : {
             type : String,
            default : "NA"
        },
        codechef : {
             type : String,
            default : "NA"
        },
        gfg : {
             type : String,
            default : "NA"
        }
    }

})

const User = mongoose.model("User" , UserSchema);

module.exports = User;


