import mongoose from 'mongoose';

export interface MongooseRace extends Race, mongoose.Document {}

const schemaProps = {
  name: {
    esp: {
      type: String,
      required: true
    },
    eng: {
      type: String,
      required: true
    }
  },
  description: {
    esp: {
      type: String,
      required: true
    },
    eng: {
      type: String,
      required: true
    }
  },
  traits: [
    {
      type: {
        type: [String],
        required: true
      },
      rules: {
        speed: Number,
        weight: Number,
        height: {
          min: Number,
          max: Number
        },
        ability: String,
        skill: String,
        ST: String,
        DMG: String,
        min: Number,
        max: Number,
        value: Number,
        cancel: String,
        weapons: String,
        armors: String,
        tools: String,
        languages: String,
        keywords: String
      }
    }
  ]
};

const SubraceSchema: mongoose.Schema = new mongoose.Schema<MongooseRace>(
  schemaProps,
  { versionKey: false, timestamps: false }
);

const RaceSchema: mongoose.Schema = new mongoose.Schema<MongooseRace>(
  {
    ...schemaProps,
    subraces: {
      type: [SubraceSchema],
      required: true
    }
  },
  { versionKey: false, timestamps: false }
);

const Race =
  mongoose.models.Race || mongoose.model<MongooseRace>('Race', RaceSchema);

export default Race;
