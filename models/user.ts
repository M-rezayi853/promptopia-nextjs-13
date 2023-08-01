import { Model, Schema, model, models, Document } from 'mongoose'

export interface UserModelSchema extends Document {
  email: string
  username: string
  image: string
}

const UserSchema = new Schema<UserModelSchema>(
  {
    email: {
      type: String,
      required: [true, 'Email is required!'],
      // unique: [true, 'Email already exists!'],
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
      ],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = models?.User || model('User', UserSchema)

export default User as Model<UserModelSchema>
