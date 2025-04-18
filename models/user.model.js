import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
     type: String,
     required: true,
     trim: true,
     minLength: 2,
     maxLength: 50,
    },
  
  email: {
     type: String,
     required: [true, "Email is required"],
     unique: true,
     trim: true,
     lowercase: true,
     match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
    },

  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,

  }
  
}, { timestamps: true } );


const User = mongoose.model("User", userSchema);

export default User;