// server/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'Pending' },
  priority: { type: String, default: 'Medium' },
  deadline: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
