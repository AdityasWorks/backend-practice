import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Subscription Name is required"],
    trim: true,
    minLength: 2,
    maxLength: 100,
  },

  price:{
    type: Number,
    required: [true, "Price is required"],
    minLength: [0, "price must be higher than 0"],
  },

  currency:{
    type: String,
    enum:["INR", "USD"],
  },
  
  frequency:{
    type: String,
    enum:["daily","weekly","monthly", "yearly"],
  },

  category:{
    type: String,
    enum:["fitness","health","nutrition", "wellness"],
    required: [true, "Category is required"],
  },

  paymentMethod:{
    type: String,
    required: true,
    trim:true,
  },

  status:{
    type: Boolean,
    enum: ["active", "cancelled", "expired"],
    default: "active",
  },

  startDate:{
    type: date,
    required: true,
    validate:{
      validator: (value) => value <= new Date(),
      message: "Start date must be in the past"
    }
  },

  renewalDate:{
    type: date,
    validate:{
      validator: function (value) {
        return value > this.startDate;
      },
      message: "Renewal date must be in the Future"
    }
  },

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,

  }

}, { timestamps : true });

subscriptionSchema.pre("save", function (next) {

  if(!this.renewalDate){
    const renewalPeriod = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    }


    this.renewalDate = new Date(this.startDate);

    this.renewalDate.setDate(this.startDate + renewalPeriod[this.frequency]);

  }

  
  if(this.renewalDate < new Date()){
    this.status = "expired";
  }

  next();
  
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;