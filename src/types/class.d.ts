interface DnDClass {
  name: {
    esp: string;
    eng: string;
  };
  description: {
    esp: string;
    eng: string;
  };
  hit_dice: '1d6' | '1d8' | '1d10' | '1d12';
  proficiencies: {
    skills: {
      number: number;
      list: skill[];
    };
    ST: ability[];
    armors: armor[];
    weapons: weapon[];
    tools: tool[];
  };
  equipment: string[][];
  spellcasting?: {
    ability: ability;
    spells: {
      cantrips: cantrip[];
      lv1?: spell1[];
      lv2?: spell2[];
      lv3?: spell3[];
      lv4?: spell4[];
      lv5?: spell5[];
      lv6?: spell6[];
      lv7?: spell7[];
      lv8?: spell8[];
      lv9?: spell9[];
    };
  };
  lv1: ClassLvl;
  lv2: ClassLvl;
  lv3: ClassLvl;
  lv4: ClassLvl;
  lv5: ClassLvl;
  lv6: ClassLvl;
  lv7: ClassLvl;
  lv8: ClassLvl;
  lv9: ClassLvl;
  lv10: ClassLvl;
  lv11: ClassLvl;
  lv12: ClassLvl;
  lv13: ClassLvl;
  lv14: ClassLvl;
  lv15: ClassLvl;
  lv16: ClassLvl;
  lv17: ClassLvl;
  lv18: ClassLvl;
  lv19: ClassLvl;
  lv20: ClassLvl;
}

interface ClassLvl {
  proficiency_bonus: number;
  new_cantrips?: number;
  new_spells?: number;
  spell_slots?: {
    lv1: number;
    lv2?: number;
    lv3?: number;
    lv4?: number;
    lv5?: number;
    lv6?: number;
    lv7?: number;
    lv8?: number;
    lv9?: number;
  };
  features: ClassFeature[];
}

interface ClassFeature {
  name?: {
    esp: string;
    eng: string;
  };
  description?: {
    esp: string;
    eng: string;
  };
  reference: classFeatureRef;
  rules?: {
    value?: number;
    max?: number;
    arcane_tradition?: {
      abjuration: ArcaneTraditionFeature;
      conjuration: ArcaneTraditionFeature;
      divination: ArcaneTraditionFeature;
      enchantment: ArcaneTraditionFeature;
      evocation: ArcaneTraditionFeature;
      illusion: ArcaneTraditionFeature;
      necromancy: ArcaneTraditionFeature;
      transmutation: ArcaneTraditionFeature;
    };
  };
}

type classFeatureRef = wizardFeatureRef;
