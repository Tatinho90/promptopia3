import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    prompt: {
      type: String,
      required: [true, 'Prompt is required.'],
    },
    tag: {
      type: String,
      required: [true, 'Tag is required.'],
    }
  });
  

//this line of code ensures that the new User model is only created if such model doesn't yet exist (else re-use the existing one)
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;