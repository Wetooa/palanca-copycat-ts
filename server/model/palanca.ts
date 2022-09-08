import mongoose from "mongoose";

const PalancaSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "Please provide company name"],
    },
    createdBy: {
      type: String,
      default: "Anon",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Palanca", PalancaSchema);
