import * as mongoose from 'mongoose';

export const VendingMachineSchema = new mongoose.Schema({
  totalCoins: String,
});
