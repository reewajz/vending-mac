import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  cost: Number,
  type: String,
  insertedDate: Number,
});
