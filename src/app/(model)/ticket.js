import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    description: { type: String, required: true },
    urgency: { type: Number, required: true },
    status: { type: String, default: "Not Started" },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);
