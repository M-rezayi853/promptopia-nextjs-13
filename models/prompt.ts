import { Schema, model, models, Model, Document, ObjectId } from 'mongoose'

export interface PromptModelSchema extends Document {
  creator: ObjectId
  prompt: string
  tag: string
}

const PromptSchema = new Schema<PromptModelSchema>(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    prompt: {
      type: String,
      required: [true, 'Prompt is required!'],
    },
    tag: {
      type: String,
      required: [true, 'Tag is required!'],
    },
  },
  {
    timestamps: true,
  }
)

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt as Model<PromptModelSchema>
