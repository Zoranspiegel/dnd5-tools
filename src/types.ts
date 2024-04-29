/* eslint-disable @typescript-eslint/no-unused-vars */

// ABILITIES

type ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA' | 'ALL';

// SKILLS

type strSkill = 'athletics';

type dexSkill = 'acrobatics' | 'sleight_of_hand' | 'stealth';

type intSkill = 'arcana' | 'history' | 'investigation' | 'nature' | 'religion';

type wisSkill =
  | 'animal_handling'
  | 'insight'
  | 'medicine'
  | 'perception'
  | 'survival';

type chaSkill = 'deception' | 'intimidation' | 'performance' | 'persuasion';

type skill = strSkill | dexSkill | intSkill | wisSkill | chaSkill;

// MAGIC
type cantrip = 'dancing_lights';

type spell = 'faerie_fire' | 'darkness';

// DAMAGE

type dmg = 'fire' | 'poison';

// CONDITIONS

type condition = 'sleep';

// CANCELLING

type cancel = 'heavy_armor_speed_penalty';

// SAVING_THROWS
type againstCondition = 'against_charm' | 'against_poison';

type st = againstCondition;

// EQUIPMENT

type weapon =
  | 'longsword'
  | 'shortsword'
  | 'shortbow'
  | 'longbow'
  | 'battleaxe'
  | 'handaxe'
  | 'light_hammer'
  | 'warhammer'
  | 'rapier'
  | 'hand_crossbow';

type armor = 'light_armor' | 'medium_armor' | 'heavy_armor';

type tool = 'smiths_tools' | 'brewers_supplies' | 'masons_tools';

// TRAITS

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

// EQUIPMENT

interface Equipment {
  weapons?: weapon[];
  armors?: armor[];
  tools?: tool[];
}

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
      items: weapon[]
    };
    armors?: {
      items: armor[]
    };
    tools?: {
      items: tool[]
    };
    languages?: {
      items: string[]
    };
    keywords?: string;
    cantrip?: cantrip | 'any';
    spell?: spell;
    lvl?: number;
  };
}

// RACES

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
