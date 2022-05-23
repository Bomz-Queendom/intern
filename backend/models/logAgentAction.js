const mongoose = require('mongoose');

const logAgentActionSchema = new mongoose.Schema({
    agentId: mongoose.ObjectId,
    action: String,
    actionDate: Date
});

const logAgentActionModels = mongoose.model('logAgentAction', logAgentActionSchema);

module.exports = logAgentActionModels;