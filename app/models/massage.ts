import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
  role: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.Message ||
  mongoose.model<IMessage>('Message', MessageSchema);
