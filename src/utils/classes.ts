export const barbarian = {};

export const bard = {};

export const cleric = {};

export const druid = {};

export const fighter = {};

export const monk = {};

export const paladin = {};

export const ranger = {};

export const rogue = {};

export const sorcerer = {};

export const warlock = {};

export const wizard: DnDClass = {
  name: {
    esp: 'Mago',
    eng: 'Wizard'
  },
  description: {
    esp: 'Los magos son los supremos usuarios de la magia, Si algo define a esta clase es la gran cantidad de conjuros que puede lanzar. Tirando del sutil tejido mágico que permea el cosmos, lanzan conjuros de fuego explosivo, relámpagos súbitos, engaños sutiles y control mental. Su magia les permite conjurar elementales desde otros planos de existencia, vislumbrar el futuro o alzar enemigos fallecidos en forma de zombis. Sus conjuros más poderosos les permiten transmutar una sustancia en otra, invocar meteoros para que caigan desde el cielo o abrir portales a otros mundos.',
    eng: 'Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.'
  },
  hit_dice: '1d6',
  proficiencies: {
    skills: {
      number: 2,
      list: [
        'arcana',
        'history',
        'insight',
        'investigation',
        'medicine',
        'religion'
      ]
    },
    ST: ['INT', 'WIS'],
    weapons: ['dagger', 'quarterstaff', 'darts', 'sling', 'light_crossbow'],
    armors: [],
    tools: []
  },
  equipment: [
    ['quarterstaff', 'dagger'],
    ['component_pouch', 'arcane_focus'],
    ['scholars_pack', 'explorers_pack'],
    ['spellbook']
  ],
  spellcasting: {
    ability: 'INT',
    spells: {
      cantrips: [
        'acid_splash',
        'blade_ward',
        'chill_touch',
        'dancing_lights',
        'fire_bolt',
        'friends',
        'light',
        'mage_hand',
        'mending',
        'message',
        'minor_ilusion',
        'poison_spray',
        'prestidigitation',
        'ray_of_frost',
        'shocking_grasp',
        'true_strike'
      ],
      lv1: [
        'alarm',
        'burning_hands',
        'charm_person',
        'chromatic_orb',
        'color_spray',
        'comprehend_languages',
        'detect_magic',
        'disguise_self',
        'expeditious_retreat',
        'false_life',
        'feather_fall',
        'find_familiar',
        'fog_cloud',
        'grease',
        'identify',
        'illusory_script',
        'jump',
        'longstrider',
        'mage_armor',
        'magic_missile',
        'protection_from_evil_and_good',
        'ray_of_sickness',
        'shield',
        'silent_image',
        'sleep',
        'tashas_hideous_laughter',
        'tensers_floating_disk',
        'thunderwave',
        'unseen_servant',
        'witch_bolt'
      ],
      lv2: [
        'alter_self',
        'arcane_lock',
        'blindness_deafness',
        'blur',
        'cloud_of_daggers',
        'continual_flame',
        'crown_of_madness',
        'darkness',
        'darkvision',
        'detect_thoughts',
        'enlarge_reduce',
        'flaming_sphere',
        'gentle_repose',
        'gust_of_wind',
        'hold_person',
        'invisibility',
        'knock',
        'levitate',
        'locate_object',
        'magic_mouth',
        'magic_weapon',
        'melfs_acid_arrow',
        'mirror_image',
        'misty_step',
        'nystuls_magic_aura',
        'phantasmal_force',
        'ray_of_enfeeblement',
        'rope_trick',
        'scorching_ray',
        'see_invisibility',
        'shatter',
        'spider_climb',
        'suggestion',
        'web'
      ],
      lv3: [
        'animate_dead',
        'bestow_curse',
        'blink',
        'clairvoyance',
        'counterspell',
        'dispel_magic',
        'fear',
        'feign_death',
        'fireball',
        'fly',
        'gaseous_form',
        'glyph_of_warding',
        'haste',
        'hypnotic_pattern',
        'leomunds_tiny_hut',
        'lightning_bolt',
        'magic_circle',
        'major_image',
        'nondetection',
        'phantom_steed',
        'protection_from_energy',
        'remove_curse',
        'sending',
        'sleet_storm',
        'slow',
        'stinking_cloud',
        'tongues',
        'vampiric_touch',
        'water_breathing'
      ],
      lv4: [
        'arcane_eye',
        'banishment',
        'blight',
        'confusion',
        'conjure_minor_elementals',
        'control_water',
        'dimension_door',
        'evards_black_tentacles',
        'fabricate',
        'fire_shield',
        'greater_invisibility',
        'hallucinatory_terrain',
        'ice_storm',
        'leomunds_secret_chest',
        'locate_creature',
        'mordenkainens_faithful_hound',
        'mordenkainens_private_sanctum',
        'otilukes_resilient_sphere',
        'phantasmal_killer',
        'polymorph',
        'stone_shape',
        'stoneskin',
        'wall_of_fire'
      ],
      lv5: [
        'animate_objects',
        'bigbys_hand',
        'cloudkill',
        'cone_of_cold',
        'conjure_elemental',
        'contact_other_plane',
        'creation',
        'dominate_person',
        'dream',
        'geas',
        'hold_monster',
        'legend_lore',
        'mislead',
        'modify_memory',
        'passwall',
        'planar_binding',
        'rarys_telepathic_bond',
        'scrying',
        'seeming',
        'telekinesis',
        'teleportation_circle',
        'wall_of_force',
        'wall_of_stone'
      ],
      lv6: [
        'arcane_gate',
        'chain_lightning',
        'circle_of_death',
        'contingency',
        'create_undead',
        'disintegrate',
        'drawmijs_instant_summons',
        'eyebite',
        'flesh_to_stone',
        'globe_of_invulnerability',
        'guards_and_wards',
        'magic_jar',
        'mass_suggestion',
        'move_earth',
        'otilukes_freezing_sphere',
        'ottos_irresistible_dance',
        'programmed_illusion',
        'sunbeam',
        'true_seeing',
        'wall_of_ice'
      ],
      lv7: [
        'delayed_blast_fireball',
        'etherealness',
        'finger_of_death',
        'forcecage',
        'mirage_arcane',
        'mordenkainens_magnificent_mansion',
        'mordenkainens_sword',
        'plane_shift',
        'prismatic_spray',
        'project_image',
        'reverse_gravity',
        'sequester',
        'simulacrum',
        'symbol',
        'teleport'
      ],
      lv8: [
        'antimagic_field',
        'antipathy_sympathy',
        'clone',
        'control_weather',
        'demiplane',
        'dominate_monster',
        'feeblemind',
        'incendiary_cloud',
        'maze',
        'mind_blank',
        'power_word_stun',
        'sunburst',
        'telepathy'
      ],
      lv9: [
        'astral_projection',
        'foresight',
        'gate',
        'imprisonment',
        'meteor_swarm',
        'power_word_kill',
        'prismatic_wall',
        'shapechange',
        'time_stop',
        'true_polymorph',
        'weird',
        'wish'
      ]
    }
  },
  lv1: {
    proficiency_bonus: 2,
    new_cantrips: 3,
    new_spells: 6,
    spell_slots: {
      lv1: 2
    },
    features: [
      {
        name: {
          esp: 'Recuperación Arcana',
          eng: 'Arcane Recovery'
        },
        description: {
          esp: 'Has aprendido a recuperar parte de tu energía arcana estudiando tu libro de conjuros. Una vez por día, cuando hagas un descanso breve, puedes recuperar espacios de conjuro. Los espacios de conjuro pueden tener un nivel combinado igual o menor que la mitad de tu nivel de mago (redondeando hacia arriba) y ninguno de los espacios puede ser de nivel 6 o más. Si, por ejemplo, eres un mago de nivel 4, puedes recuperar hasta un valor de dos niveles en espacios de conjuro: un espacio de nivel 2 o dos de nivel 1.',
          eng: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1 st-level spell slots."
        },
        reference: 'arcane_recovery',
        rules: {
          value: 1
        }
      }
    ]
  },
  lv2: {
    proficiency_bonus: 2,
    new_spells: 2,
    spell_slots: {
      lv1: 3
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 1
        }
      },
      {
        name: {
          esp: 'Tradición Arcana',
          eng: 'Arcane Tradition'
        },
        description: {
          esp: 'Cuando llegas a nivel 2 escoges una tradición arcana, que moldea tu práctica de la magia a través de la óptica de una de las ocho escuelas: Abjuración, Conjuración, Encantamiento, Evocación, Ilusionismo, Nigromancia y Transmutación.\nEsta elección te proporciona ciertos rasgos cuando alcanzas los niveles 2, 6, 10 y 14.',
          eng: 'When you reach 2nd level, you choose a n arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation.\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level.'
        },
        reference: 'arcane_tradition',
        rules: {
          arcane_tradition: {
            abjuration: {
              name: {
                esp: 'Salvaguarda Arcana',
                eng: 'Arcane Ward'
              },
              description: {
                esp: 'A partir de nivel 2, puedes tejer una protección mágica a tu alrededor. Cuando lanzas un conjuro de abjuración de nivel 1 o superiores, puedes aprovechar una de las hebras mágicas del conjuro para tejer una salvaguarda sobre ti mismo, que durará hasta que termines un descanso largo. Esta salvaguarda tiene tantos puntos de golpe máximos como dos veces tu nivel de mago + tu modificador por Inteligencia. Cada vez que fueras a sufrir daño, será ella la que lo reciba en tu lugar. Si este daño reduce los puntos de golpe de la salvaguarda a 0, recibirás el daño restante.\nLa salvaguarda no podrá absorber daño mientras tenga 0 puntos de golpe, pero su magia permanecerá activa. Cada vez que lances un conjuro de abjuración de nivel 1 o superiores, la salvaguarda recuperará tantos puntos de golpe como la mitad del nivel del conjuro.\nUna vez creada la salvaguarda, deberás terminar un descanso largo para poder volver a formarla de nuevo.',
                eng: "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has a hit point maximum equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.\nWhile the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.\nOnce you create the ward, you can't create it again until you finish a long rest."
              },
              reference: 'arcane_ward'
            },
            conjuration: {
              name: {
                esp: 'Conjuración Menor',
                eng: 'Minor Conjuration'
              },
              description: {
                esp: 'A partir de nivel 2, cuando escoges esta escuela, puedes utilizar tu acción para conjurar un objeto inanimado en tu propia mano o en el suelo, en un espacio desocupado que puedas ver a 10 pies o menos de ti. El objeto no puede medir más de 3 pies en cualquiera de sus lados ni pesar más de 10 libras, y debe tener la forma de un objeto no mágico que hayas visto antes. Este objeto es claramente mágico, pues emite luz tenue en un radio de 5 pies y desaparecerá tras 1 hora, cuando uses este rasgo de nuevo, o si causa o recibe cualquier cantidad de daño.',
                eng: 'Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.\nThe object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage.'
              },
              reference: 'minor_conjuration'
            },
            divination: {
              name: {
                esp: 'Presagio',
                eng: 'Portent'
              },
              description: {
                esp: 'A partir de nivel 2, cuando eliges esta escuela, empiezas a vislumbrar retazos del futuro en los límites de tu percepción. Después de terminar un descanso largo, tira 2d20 y apunta los dos resultados obtenidos. Puedes sustituir cualquier tirada de ataque, tirada de salvación o prueba de característica que vayá is a realizar o tú o una criatura que puedas ver por el número de una de las dos tiradas de presagio. Debes indicar que haces esto antes de que se lleve a cabo la tirada y solo puedes sustituir una tirada de esta forma una vez por turno.\nCada tirada de presagio solo puede emplearse una vez. Perderás todas las tiradas de presagio que no hayas utilizado cuando finalices un descanso largo.',
                eng: 'Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.\nEach foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.'
              },
              reference: 'portent'
            },
            enchantment: {
              name: {
                esp: 'Mirada Hipnótica',
                eng: 'Hypnotic Gaze'
              },
              description: {
                esp: 'A partir de nivel 2, cuando escoges esta escuela, tus suaves palabras y fascinante mirada te permiten embelesar a otra criatura. Como acción, elige a una criatura que puedas ver a 5 pies o menos de ti. Si el objetivo puede verte u oírte, deberá hacer una tirada de salvación de Sabiduría con la misma CD que las tiradas de salvación de tus conjuros de mago. Si falla, estará hechizado por ti hasta el final de tu siguiente turno. La criatura hechizada queda incapacitada y está claramente afectada. Además, su velocidad baja a 0.\nEn cada uno de los turnos subsiguientes, podrás utilizar tu acción para mantener este efecto, alargando su duración hasta el final de tu siguiente turno. Sin embargo, el efecto terminará si te mueves a más de 5 pies de distancia de la criatura, si esta dejar de poder verte u oírte o si la criatura recibe daño.\nUna vez finaliza el efecto, o si la criatura tiene éxito en su tirada de salvación inicial contra él, no podrás volver a usar este rasgo contra dicha criatura hasta que termines un descanso largo.',
                eng: "Starting a t 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.\nOn subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.\nOnce the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
              },
              reference: 'hypnotic_gaze'
            },
            evocation: {
              name: {
                esp: 'Esculpir Conjuros',
                eng: 'Sculpt Spells'
              },
              description: {
                esp: 'A partir de nivel 2 puedes crear espacios de relativa seguridad en el interior de los efectos generados por tus conjuros de evocación. Cuando lanzas un conjuro de evocación que afecta a otras criaturas que puedes ver, puedes elegir a tantas de estas criaturas como 1 + el nivel del conjuro. Las criaturas elegidas tienen éxito automáticamente en sus tiradas de salvación contra el conjuro, y no reciben daño alguno si normalmente recibirían la mitad de daño del mismo al superar una tirada de salvación.',
                eng: "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
              },
              reference: 'sculpt_spells'
            },
            illusion: {
              name: {
                esp: 'Ilusión Menor Mejorada',
                eng: 'Improved Minor Illusion'
              },
              description: {
                esp: 'A nivel 2, cuando escoges esta escuela, aprendes el truco ilusión menor. Si ya lo conocías, puedes adquirir otro truco de mago a tu elección en su lugar. En cualquiera de los dos casos, este truco no cuenta contra tu límite de trucos conocidos.\nAdemás, cuando lanzas ilusión menor puedes crear tanto un sonido como una imagen en el mismo lanzamiento.',
                eng: "When you choose this school at 2nd level, you learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard can trip of your choice. The cantrip doesn't count against your number of cantrips known.\nWhen you cast minor illusion, you can create both a sound and an image with a single casting of the spell."
              },
              reference: 'improved_minor_illusion'
            },
            necromancy: {
              name: {
                esp: 'Cosecha Siniestra',
                eng: 'Grim Harvest'
              },
              description: {
                esp: 'A nivel 2 obtienes la capacidad de segar la energía vital de las criaturas que mates con tus conjuros. Una vez por turno, cuando mates a al menos una criatura mediante un conjuro de nivel 1 o superiores, recuperarás tantos puntos de golpe como dos veces el nivel del conjuro, o tres veces si este pertenece a la escuela de nigromancia. No obtendrás este beneficio al matar autómatas o muertos vivientes.',
                eng: "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead."
              },
              reference: 'grim_harvest'
            },
            transmutation: {
              name: {
                esp: 'Alquimia Menor',
                eng: 'Minor Alchemy'
              },
              description: {
                esp: 'A partir de nivel 2, cuando escoges esta escuela, eres capaz de alterar temporalmente las propiedades físicas de un objeto no mágico, cambiando la sustancia de la que está hecho por otra. Puedes llevar a cabo un procedimiento alquímico especial sobre un objeto hecho por completo de madera, piedra (pero no piedras preciosas), hierro, cobre o plata, transformándolo enteramente en otro cualquiera de los materiales nombrados. Por cada 10 minutos que inviertas en este proceso podrás transformar 1 pie cúbico de material. Después de 1 hora, o cuando pierdas la concentración (como si te estuvieras concentrando en un conjuro), el objeto volverá a estar hecho de la sustancia original.',
                eng: 'Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.'
              },
              reference: 'minor_alchemy'
            }
          }
        }
      }
    ]
  },
  lv3: {
    proficiency_bonus: 2,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 2
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 2
        }
      }
    ]
  },
  lv4: {
    proficiency_bonus: 2,
    new_cantrips: 1,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 2
        }
      },
      {
        name: {
          esp: 'Mejora de Característica',
          eng: 'Ability Score Improvement'
        },
        description: {
          esp: 'Cuando alcanzas el nivel 4 y de nuevo en los niveles 8, 12, 16 y 19, puedes aumentar una puntuación de característica de tu elección en 2 o dos puntuaciones de característica en 1. Como siempre, no puedes aumentar una puntuación de característica por encima de 20 usando este rasgo.',
          eng: "When you reach 4th level, and again a t 8th, 1 2th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        },
        reference: 'ability_score_improvement',
        rules: {
          value: 2,
          max: 20
        }
      }
    ]
  },
  lv5: {
    proficiency_bonus: 3,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 2
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 3
        }
      }
    ]
  },
  lv6: {
    proficiency_bonus: 3,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 3
        }
      },
      {
        reference: 'arcane_tradition',
        rules: {
          arcane_tradition: {
            abjuration: {
              name: {
                esp: 'Salvaguarda Proyectada',
                eng: 'Projected Ward'
              },
              description: {
                esp: 'A partir de nivel 6, cuando una criatura que puedas ver a 30 pies o menos de ti fuera a recibir daño, podrás utilizar tu reacción para hacer que tu Salvaguarda Arcana absorba dicho daño. Si este daño reduce los puntos de golpe de la salvaguarda a 0, la criatura original recibirá el daño restante.',
                eng: 'Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.'
              },
              reference: 'projected_ward'
            },
            conjuration: {
              name: {
                esp: 'Trasposición Benigna',
                eng: 'Benign Transposition'
              },
              description: {
                esp: 'A partir de nivel 6 puedes usar tu acción para teletransportarte hasta 30 pies a un espacio desocupado que puedas ver. Alternativamente, puedes elegir un espacio dentro del alcance que esté ocupado por una criatura Pequeña o Mediana. Si es una criatura voluntaria, ambos os teletransportaréis, intercambiando vuestras posiciones. Una vez utilizado este rasgo, deberás terminar un descanso largo o lanzar un conjuro de conjuración de nivel 1 o superiores para poder volver a usarlo otra vez.',
                eng: "Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.\nOnce you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
              },
              reference: 'benign_transposition'
            },
            divination: {
              name: {
                esp: 'Adivino Avezado',
                eng: 'Expert Divination'
              },
              description: {
                esp: 'A partir de nivel 6, lanzar conjuros de adivinación te resulta tan fácil que solo requiere una pequeña parte de tus esfuerzos. Cuando lanzas un conjuro de adivinación de nivel 2 o más empleando un espacio de conjuro, recuperas otro espacio de conjuro ya gastado. El espacio recobrado debe ser de nivel inferior al del conjuro lanzado, y en ningún caso superior a 5.',
                eng: "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
              },
              reference: 'expert_divination'
            },
            enchantment: {
              name: {
                esp: 'Encantamiento Instintivo',
                eng: 'Instinctive Charm'
              },
              description: {
                esp: 'A partir de nivel 6, cuando una criatura que puedas ver a 30 pies o menos de ti haga una tirada de ataque que te tenga como objetivo, podrás emplear tu reacción para redirigir el ataque. Para hacer esto es necesario que haya otra criatura dentro del alcance del ataque. El atacante deberá realizar una tirada de salvación de Sabiduría con la misma CD que las tiradas de salvación de tus conjuros de mago. Si la falla, debe elegir como objetivo de su ataque a la criatura más cercana a él, sin contaros ni a ti ni al propio atacante. En caso de que hubiera varias criaturas a la misma distancia, el atacante elige a cuál ataca. Si el atacante tiene éxito en su tirada de salvación, no podrás volver a usar este rasgo sobre él hasta que termines un descanso largo.\nDebes decidir utilizar este rasgo antes de saber si el ataque impacta o no. Las criaturas que no puedan ser hechizadas no se ven afectadas por este efecto.',
                eng: "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest.\nYou must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect."
              },
              reference: 'instinctive_charm'
            },
            evocation: {
              name: {
                esp: 'Truco Potente',
                eng: 'Potent Cantrip'
              },
              description: {
                esp: 'A partir de nivel 6, tus trucos que causan daño pueden afectar incluso a aquellas criaturas que han evitado la peor parte del efecto. Cuando una criatura supere una tirada de salvación contra uno de tus trucos, aun así recibirá la mitad del daño del truco (si es que causa alguno), pero no sufrirá ningún otro de sus efectos.',
                eng: "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
              },
              reference: 'potent_cantrip'
            },
            illusion: {
              name: {
                esp: 'Ilusiones Maleables',
                eng: 'Malleable Illusions'
              },
              description: {
                esp: 'A partir de nivel 6, cuando lanzas un conjuro de ilusionismo cuya duración sea de al menos 1 minuto, puedes utilizar tu acción para cambiar la naturaleza de la ilusión (dentro de los parámetros normales del conjuro), siempre y cuando estés viéndola.',
                eng: "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
              },
              reference: 'malleable_illusions'
            },
            necromancy: {
              name: {
                esp: 'Siervos Muertos Vivientes',
                eng: 'Undead Thralls'
              },
              description: {
                esp: 'A nivel 6 añades el conjuro animar a los muertos a tu libro de conjuros, si es que no figuraba ya en él. Cuando lanzas animar a los muertos, puedes elegir como objetivo a un cadáver o pila de huesos adicional, formando así a otro zombi o esqueleto, lo que corresponda. Además, siempre que crees un muerto viviente mediante un conjuro de nigromancia, este disfrutará de los siguientes beneficios:\n• Los puntos de golpe máximos de la criatura aumentan en una cantidad igual a tu nivel de mago.\n• La criatura sumará tu bonificador por competencia a las tiradas de daño con armas.',
                eng: "At 6th level, you add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits:\n• The creature's hit point maximum is increased by an amount equal to your wizard level.\n• The creature adds your proficiency bonus to its weapon damage rolls."
              },
              reference: 'undead_thralls'
            },
            transmutation: {
              name: {
                esp: 'Piedra de Transmutador',
                eng: "Transmutation's Stone"
              },
              description: {
                esp: 'A partir de nivel 6 puedes invertir 8 horas en crear una piedra de transmutador que almacena magia de esta escuela. Puedes beneficiarte t ú mismo de los poderes de la piedra o dársela a otra criatura. Mientras mantenga la piedra en su posesión, el portador disfrutará de un beneficio a tu elección, que escogerás de entre las siguientes opciones cuando crees la piedra:\n• Visión en la oscuridad hasta un alcance de 60 pies.\n• Un incremento de 10 pies en la velocidad de la criatura, siempre y cuando esta no esté cargada.\n• Competencia en las tiradas de salvación de Constitución.\n• Resistencia a daño de ácido, frío, fuego, relámpago o trueno (tú eliges cuál cuando escoges este beneficio).\nCada vez que lances un conjuro de transmutación de nivel 1 o superiores podrás cambiar el efecto de tu piedra, siempre y cuando la lleves contigo.\nSi creas una piedra de transmutador nueva, la anterior dejará de existir.',
                eng: "Starting a t 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:\n• Darkvision out to a range of 60 feet\n• An increase to speed of 10 feet while the creature is unencumbered\n• Proficiency in Constitution saving throws\n• Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)\nEach time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.\nIf you create a new transmuter's stone, the previous one ceases to function."
              },
              reference: 'transmuters_stone'
            }
          }
        }
      }
    ]
  },
  lv7: {
    proficiency_bonus: 3,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 4
        }
      }
    ]
  },
  lv8: {
    proficiency_bonus: 3,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 2
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 4
        }
      },
      {
        reference: 'ability_score_improvement'
      }
    ]
  },
  lv9: {
    proficiency_bonus: 4,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 5
        }
      }
    ]
  },
  lv10: {
    proficiency_bonus: 5,
    new_cantrips: 1,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 5
        }
      },
      {
        reference: 'arcane_tradition',
        rules: {
          arcane_tradition: {
            abjuration: {
              name: {
                esp: 'Abjuración Mejorada',
                eng: 'Improved Abjuration'
              },
              description: {
                esp: 'partir de nivel 10, cuando lanzas un conjuro de abjuración que te exige hacer una prueba de característica como parte del lanzamiento del mismo (como es el caso de contrahechizo o disipar magia), podrás añadir tu bonificador por competencia a la prueba.',
                eng: 'Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.'
              },
              reference: 'improved_abjuration'
            },
            conjuration: {
              name: {
                esp: 'Conjuración Concentrada',
                eng: 'Focused Conjuration'
              },
              description: {
                esp: 'A partir de nivel 10, recibir daño no te hará perder la concentración en tus conjuros de conjuración.',
                eng: "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage."
              },
              reference: 'focused_conjuration'
            },
            divination: {
              name: {
                esp: 'El Tercer Ojo',
                eng: 'The Third Eye'
              },
              description: {
                esp: 'A partir de nivel 10 puedes usar tu acción para aumentar tus poderes de percepción. Cuando hagas esto, escoge uno de los beneficios que aparecen a continuación, que permanecerá activo hasta que quedes incapacitado o finalices un descanso corto o largo. Para poder volver a utilizar este rasgo tendrás que terminar un descanso, corto o largo:\n• Obtienes visión en la oscuridad con un alcance de 60 pies.\n• Puedes ver en el Plano Etéreo a 60 pies de distancia.\n• Puedes leer cualquier idioma.\n• Puedes ver las criaturas y objetos invisibles que estén en tu línea de visión y a 10 pies o meños de ti.',
                eng: "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest:\n• You gain darkvision out to a range of 60 feet.\n• You can see into the Ethereal Plane within 60 feet of you.\n• You can read any language.\n• You can see invisible creatures and objects within 10 feet of you that are within line of sight."
              },
              reference: 'the_third_eye'
            },
            enchantment: {
              name: {
                esp: 'Duplicar Encantamiento',
                eng: 'Split Enchantment'
              },
              description: {
                esp: 'A partir de nivel 10, cuando lanzas un conjuro de encantamiento de nivel 1 o más cuyo objetivo sea una única criatura, puedes hacer que también tenga como objetivo a una segunda.',
                eng: 'Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.'
              },
              reference: 'split_enchantment'
            },
            evocation: {
              name: {
                esp: 'Evocación Potenciada',
                eng: 'Empowered Evocation'
              },
              description: {
                esp: 'A partir de nivel 10 puedes añadir tu modificador por Inteligencia a una de las tiradas de daño de cualquier conjuro de evocación de mago que lances.',
                eng: 'Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.'
              },
              reference: 'empowered_evocation'
            },
            illusion: {
              name: {
                esp: 'Yo Ilusorio',
                eng: 'Illusory Self'
              },
              description: {
                esp: 'A partir de nivel 10, puedes crear un duplicado ilusorio de ti mismo instantáneamente, casi como una reacción instintiva al peligro. Cuando una criatura haga una tirada de ataque contra ti, puedes utilizar tu reacción para interponer tu doble falso entre el atacante y tú. Como consecuencia, el ataque fallará automáticamente y la ilusión se disipará.\nUna vez empleado este rasgo, deberás terminar un descanso corto o largo para poder volver a usarlo otra vez.',
                eng: "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.\nOnce you use this feature, you can't use it again until you finish a short or long rest."
              },
              reference: 'illusory_self'
            },
            necromancy: {
              name: {
                esp: 'Habituado a la Muerte en Vida',
                eng: 'Inured to Undeath'
              },
              description: {
                esp: 'A partir de nivel 10, posees resistencia al daño necrótico y tus puntos de golpe máximos no pueden ser reducidos. Has pasado tanto tiempo tratando con los muertos vivientes y a las fuerzas que los animan, que te has acostumbrado a sus peores efectos.',
                eng: "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
              },
              reference: 'inured_to_undeath'
            },
            transmutation: {
              name: {
                esp: 'Cambiar de Forma',
                eng: 'Shapechanger'
              },
              description: {
                esp: 'A nivel 10 añades el conjuro polimorfar a tu libro de conjuros, si es que no figuraba ya en él. Además, puedes lanzar polimorfar sin gastar un espacio de conjuros, pero solo cuando el objetivo seas tú mismo y te transformes en una bestia cuyo valor de desafío sea de como mucho 1.\nUna vez hayas lanzado polimorfar de esta forma, no podrás volver a realizarlo de nuevo hasta que finalices un descanso corto o largo. Con todo, seguirás pudiendo lanzarlo de forma normal, utilizando un espacio de conjuro.',
                eng: "At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.\nOnce you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
              },
              reference: 'shapechanger'
            }
          }
        }
      }
    ]
  },
  lv11: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 6
        }
      }
    ]
  },
  lv12: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 6
        }
      },
      {
        reference: 'ability_score_improvement'
      }
    ]
  },
  lv13: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1,
      lv7: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 7
        }
      }
    ]
  },
  lv14: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1,
      lv7: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 7
        }
      },
      {
        reference: 'arcane_tradition',
        rules: {
          arcane_tradition: {
            abjuration: {
              name: {
                esp: 'Resistencia a Conjuros',
                eng: 'Spell Resistance'
              },
              description: {
                esp: 'A partir de nivel 14 posees ventaja en las tiradas de salvación contra conjuros.\nAdemás, tienes resistencia al daño causado por conjuros.',
                eng: 'Starting at 14th level, you have advantage on saving throws against spells.\nFurthermore, you have resistance against the damage of spells.'
              },
              reference: 'spell_resistance'
            },
            conjuration: {
              name: {
                esp: 'Invocaciones Duraderas',
                eng: 'Durable Summons'
              },
              description: {
                esp: 'A partir de nivel 14, cualquier criatura que invoques o crees con un conjuro de conjuración poseerá 30 puntos de golpe temporales.',
                eng: 'Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.'
              },
              reference: 'durable_summons'
            },
            divination: {
              name: {
                esp: 'Presagio Mayor',
                eng: 'Greater Portent'
              },
              description: {
                esp: 'A partir de nivel 14, las visiones de tus sueños se intensifican, dibujando en tu mente una imagen más clara de lo que está por acontecer. Puedes tirar tres d20 cuando uses tu rasgo Presagio en lugar de dos.',
                eng: 'Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.'
              },
              reference: 'greater_portent'
            },
            enchantment: {
              name: {
                esp: 'Modificar Recuerdos',
                eng: 'Alter Memories'
              },
              description: {
                esp: 'A nivel 14 obtienes la capacidad de provocar que una criatura no sea consciente de tu influencia mágica sobre ella. Cuando lanzas un conjuro de encantamiento para hechizar a una o más criaturas, puedes alterar el entendimiento de una de ellas para que no sea consciente de que ha sido hechizada.\nAdemás, una única vez antes de que el conjuro termine, puedes usar tu acción para intentar que la criatura escogida olvide parte del tiempo que ha pasado hechizada. La criatura deberá realizar una tirada de salvación de Inteligencia con la misma CD que las tiradas de salvación de tus conjuros de mago. Si falla , perderá los recuerdos correspondientes a 1 + tu modificador por Carisma horas (mínimo 1 hora). Puedes hacer que la criatura olvide menos tiempo, y el periodo olvidado nunca puede exceder la duración del conjuro de encantamiento.',
                eng: "A t 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.\nAdditionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
              },
              reference: 'alter_memories'
            },
            evocation: {
              name: {
                esp: 'Sobrecanalizar',
                eng: 'Overchannel'
              },
              description: {
                esp: 'A partir de nivel 14 puedes aumentar el poder de tus conjuros más sencillos. Cuando lanzas un conjuro de mago de niveles entre 1 y 5 que causa daño, este inflige el daño máximo posible.\nLa primera vez que hagas esto no sufrirás ningún efecto negativo, pero si usas este rasgo de nuevo sin haber finalizado un descanso largo antes, recibirás, inmediatamente después de lanzar el conjuro, 2d12 de daño necrótico por cada nivel del mismo. Cada vez que utilices este rasgo otra vez sin haber terminado un descanso largo, el daño necrótico por cada nivel del conjuro aumenta en 1d12. Este daño ignora cualquier resistencia e inmunidad.',
                eng: 'Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.\nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12 . This damage ignores resistance and immunity.'
              },
              reference: 'overchannel'
            },
            illusion: {
              name: {
                esp: 'Realidad Ilusoria',
                eng: 'Illusory Reality'
              },
              description: {
                esp: 'A nivel 14 has logrado aprender el secreto de cómo tejer magia de sombras en tus ilusiones, dotándolas así de una pseudorealidad. Cuando lanzas un conjuro de ilusión de nivel 1 o superior, puedes elegir un objeto inanimado y no mágico que forme parte de la ilusión para hacerlo real. Puedes realizar esto mientras el conjuro esté activo, como una acción adicional durante tu turno. El objeto conserva su realidad durante 1 minuto. Podrías, por ejemplo, crear la ilusión de un puente que cruza un abismo y darle consistencia el tiempo suficiente como para que tus aliados puedan cruzarlo.\nEl objeto no puede causar daño o dañar de forma directa a nadie.',
                eng: "By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semireality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.\nThe object can't deal damage or otherwise directly harm anyone."
              },
              reference: 'illusory_reality'
            },
            necromancy: {
              name: {
                esp: 'Controlar Muertos Vivientes',
                eng: 'Command Undead'
              },
              description: {
                esp: 'A partir de nivel 14, puedes utilizar tu magia para someter a los muertos vivientes, incluso aquellos creados por otros magos, a tu control. Como acción, puedes elegir un muerto viviente que puedas ver a 60 pies o menos de ti. La criatura deberá hacer una tirada de salvación de Carisma con la misma CD que las tiradas de salvación de tus conjuros de mago. Si tiene éxito, no podrás volver a usar este rasgo sobre ella. Si falla, se volverá amistosa hacia ti y obedecerá tus órdenes hasta que vuelvas a utilizar este rasgo.\nEs más difícil controlar muertos vivientes inteligentes mediante este poder: si el objetivo tiene Inteligencia 8 o más, disfrutará de ventaja en la tirada de salvación. Además, si posee Inteligencia 12 o más y falla la tirada de salvación, podrá repetirla al final de cada hora hasta tener éxito y así liberarse.',
                eng: "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.\nIntelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
              },
              reference: 'command_undead'
            },
            transmutation: {
              name: {
                esp: 'Maestro Transmutador',
                eng: 'Master Transmuter'
              },
              description: {
                esp: 'A partir de nivel 14, puedes emplear tu acción para consumir todas las reservas de magia de transmutación almacenadas en tu piedra de transmutador de una sola vez. Cuando hagas esto, elige uno de los efectos que aparecen a continuación. Tu piedra de transmutador será destruida y no podrás volver a fabricar una hasta que termines un descanso largo:\n• Puedes transmutar un objeto no mágico cuyo tamaño sea de, como mucho, un cubo de 5 pies, en otro objeto no mágico de tamaño similar y una masa igual o inferior a la del original. Debes pasar 10 minutos manipulando el objeto para poder transformarlo.\n• Eliminas todas las maldiciones, enfermedades y venenos que estén afectando a una criatura que toques con la piedra de transmutador. Además, esta criatura también recupera todos sus puntos de golpe.\n• Puedes lanzar el conjuro alzara los muertos sobre una criatura que toques con la piedra de transmutador. No es necesario que gastes un espacio de conjuro ni que alzara los muertos figure en tu libro de conjuros.\n• Tras tocar con la piedra de transmutador a una criatura voluntaria, su edad aparente se reduce en 3d10 años, hasta un mínimo de 13. Sin embargo, este efecto no prolonga la esperanza de vida de la criatura.',
                eng: "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest:\n• You can transmute one nonmagical object no larger than a 5-foot cube into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.\n• You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.\n• You cast the raise dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.\n• You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan."
              },
              reference: 'master_transmuter'
            }
          }
        }
      }
    ]
  },
  lv15: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1,
      lv7: 1,
      lv8: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 8
        }
      }
    ]
  },
  lv16: {
    proficiency_bonus: 5,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1,
      lv7: 1,
      lv8: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 8
        }
      },
      {
        reference: 'ability_score_improvement'
      }
    ]
  },
  lv17: {
    proficiency_bonus: 6,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 2,
      lv6: 1,
      lv7: 1,
      lv8: 1,
      lv9: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 9
        }
      }
    ]
  },
  lv18: {
    proficiency_bonus: 6,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 3,
      lv6: 1,
      lv7: 1,
      lv8: 1,
      lv9: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 9
        }
      },
      {
        name: {
          esp: 'Maestría Sobre Conjuros',
          eng: 'Spell Mastery'
        },
        description: {
          esp: 'A nivel 18 has alcanzado tal maestría sobre ciertos conjuros que puedes lanzarlos a voluntad. Escoge un conjuro de mago de nivel 1 y otro de nivel 2 que figuren en tu libro de conjuros. Puedes lanzar estos conjuros a su nivel más bajo a voluntad, sin necesidad de gastar un espacio de conjuro. Eso sí, debes tener estos conjuros preparados. Si quieres lanzar cualquiera de los dos conjuros a un nivel superior deberás gastar un espacio de conjuro de forma normal.\nTras estudiar durante 8 horas podrás intercambiar uno o ambos conjuros por otros del mismo nivel.',
          eng: 'At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.'
        },
        reference: 'spell_mastery'
      }
    ]
  },
  lv19: {
    proficiency_bonus: 6,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 3,
      lv6: 2,
      lv7: 1,
      lv8: 1,
      lv9: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 10
        }
      },
      {
        reference: 'ability_score_improvement'
      }
    ]
  },
  lv20: {
    proficiency_bonus: 6,
    new_spells: 2,
    spell_slots: {
      lv1: 4,
      lv2: 3,
      lv3: 3,
      lv4: 3,
      lv5: 3,
      lv6: 2,
      lv7: 2,
      lv8: 1,
      lv9: 1
    },
    features: [
      {
        reference: 'arcane_recovery',
        rules: {
          value: 10
        }
      },
      {
        name: {
          esp: 'Conjuros Característicos',
          eng: 'Signature Spells'
        },
        description: {
          esp: 'Cuando asciendes a nivel 20 dominas por completo dos poderosos conjuros, que podrás lanzar sin apenas esfuerzo. Escoge dos conjuros de mago de nivel 3 que figuren en tu libro de conjuros como conjuros característicos. Siempre tendrás estos conjuros preparados, no contarán para el total de conjuros que puedes preparar y podrás lanzarlos a nivel 3 sin tener que invertir un espacio de conjuro. Una vez lances cada uno de ellos, no podrás volver a hacerlo hasta que finalices un descanso corto o largo. Si quieres lanzar cualquiera de los dos conjuros a un nivel superior, deberás gastar un espacio de conjuro de forma normal.',
          eng: "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal."
        },
        reference: 'signature_spells'
      }
    ]
  }
};
