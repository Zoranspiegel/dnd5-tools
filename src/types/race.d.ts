interface Race {
  name: {
    esp: string;
    eng: string;
  };
  description: {
    esp: string;
    eng: string;
  };
  traits: Trait[];
  subraces?: Race[];
}

type Subrace = Omit<Race, 'subraces'>;

interface Trait {
  name: {
    esp: string;
    eng: string;
  };
  description: {
    esp: string;
    eng: string;
  };
  type: traitType[];
  rules: {
    speed?: number;
    size?: 'small' | 'medium';
    weight?: number;
    height?: {
      min: number;
      max: number;
    };
    ability?: ability;
    skill?: skill;
    ST?: st;
    DMG?: dmg;
    condition?: condition;
    min?: number;
    max?: number;
    value?: number;
    cancel?: cancel;
    weapons?: {
      items: weapon[];
    };
    armors?: {
      items: armor[];
    };
    tools?: {
      items: tool[];
    };
    languages?: {
      items: string[];
    };
    keywords?: string;
    cantrip?: cantrip | 'any';
    spell?: spell;
    lvl?: number;
  };
}

type traitType =
  | 'ability_increase'
  | 'age'
  | 'size'
  | 'speed'
  | 'darkvision'
  | 'skill_proficiency'
  | 'ST_advantage'
  | 'condition_immunity'
  | 'lore'
  | 'languages'
  | 'DMG_resistance'
  | 'weapon_proficiency'
  | 'tool_proficiency'
  | 'circumstantial_skill_proficiency'
  | 'HP_increase'
  | 'armor_proficiency'
  | 'cantrip'
  | 'spell';
