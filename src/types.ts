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

// DAMAGE

type dmg = 'fire' | 'poison';

// CONDITIONS

type condition = 'sleep';

// CANCELLING

type cancel = 'heavy_armor_speed_penalty';

// SAVING_THROWS
type againstCondition = 'against_charm' | 'against_poison';

type st = againstCondition;
