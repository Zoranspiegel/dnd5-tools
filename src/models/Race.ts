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
      type: {
        type: [String],
        required: true
      },
      rules: {
        speed: Number,
        size: String,
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
        weapons: {
          type: {
            items: [String]
          },
          required: false
        },
        armors: {
          type: {
            items: [String]
          },
          required: false
        },
        tools: {
          type: {
            items: [String]
          },
          required: false
        },
        languages: {
          type: {
            items: [String]
          },
          required: false
        },
        cantrip: String,
        spell: String,
        lvl: Number,
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
