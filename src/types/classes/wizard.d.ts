type ArcaneTraditionFeature = Omit<ClassFeature, 'rules.arcane_tradition' | 'reference'> & { reference: arcaneTraditionRef };

type wizardFeatureRef =
  | 'arcane_recovery'
  | 'ability_score_improvement'
  | 'arcane_tradition'
  | 'spell_mastery'
  | 'signature_spells';

type arcaneTraditionRef =
  | abjurationTraditionRef
  | conjurationTraditionRef
  | divinationTraditionRef
  | enchantmentTraditionRef
  | evocationTraditionRef
  | illusionTraditionRef
  | necromancyTraditionRef
  | transmutationTraditionRef;

type abjurationTraditionRef =
  | 'arcane_ward'
  | 'projected_ward'
  | 'improved_abjuration'
  | 'spell_resistance';

type conjurationTraditionRef =
  | 'minor_conjuration'
  | 'benign_transposition'
  | 'focused_conjuration'
  | 'durable_summons';

type divinationTraditionRef =
  | 'portent'
  | 'expert_divination'
  | 'the_third_eye'
  | 'greater_portent';

type enchantmentTraditionRef =
  | 'hypnotic_gaze'
  | 'instinctive_charm'
  | 'split_enchantment'
  | 'alter_memories';

type evocationTraditionRef =
  | 'sculpt_spells'
  | 'potent_cantrip'
  | 'empowered_evocation'
  | 'overchannel';

type illusionTraditionRef =
  | 'improved_minor_illusion'
  | 'malleable_illusions'
  | 'illusory_self'
  | 'illusory_reality';

type necromancyTraditionRef =
  | 'grim_harvest'
  | 'undead_thralls'
  | 'inured_to_undeath'
  | 'command_undead';

type transmutationTraditionRef =
  | 'minor_alchemy'
  | 'transmuters_stone'
  | 'shapechanger'
  | 'master_transmuter';
