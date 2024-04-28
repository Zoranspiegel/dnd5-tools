export const dwarf: Race = {
  name: {
    esp: 'Enano',
    eng: 'Dwarf'
  },
  description: {
    esp: 'Reinos rebosantes de antiguo esplendor, salas excavadas en las raíces de las montañas, forjas abrasadoras, el resonar de los picos y martillos en las minas, el compromiso con el clan y la tradición, y el odio a los orcos y goblins. Estas son las hebras que todos los enanos comparten.',
    eng: 'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs. These common threads unite all dwarves.'
  },
  traits: [
    {
      name: {
        esp: 'Mejora de Característica',
        eng: 'Ability Score Increase'
      },
      description: {
        esp: 'Tu puntuación de Constitución aumenta en 2.',
        eng: 'Your Constitution score increases by 2.'
      },
      type: ['ability_increase'],
      rules: {
        ability: 'CON',
        value: 2
      }
    },
    {
      name: {
        esp: 'Edad',
        eng: 'Age'
      },
      description: {
        esp: 'Los enanos alcanzan la madurez en la misma proporción que los humanos, pero se les considera jóvenes hasta los 50 años. Viven, de media, unos 350 años.',
        eng: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years."
      },
      type: ['age'],
      rules: {
        min: 50,
        max: 350
      }
    },
    {
      name: {
        esp: 'Tamaño',
        eng: 'Size'
      },
      description: {
        esp: 'Los enanos miden entre 4 y 5 pies de altura y pesan unas 150 libras de media. Eres de tamaño Mediano.',
        eng: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.'
      },
      type: ['size'],
      rules: {
        weight: 150,
        height: {
          min: 4,
          max: 5
        }
      }
    },
    {
      name: {
        esp: 'Velocidad',
        eng: 'Speed'
      },
      description: {
        esp: 'Tu velocidad caminando base es de 25 pies. Esta velocidad no se reduce por llevar armadura pesada.',
        eng: 'Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.'
      },
      type: ['speed'],
      rules: {
        value: 25,
        cancel: 'heavy_armor_speed_penalty'
      }
    },
    {
      name: {
        esp: 'Visión en la Oscuridad',
        eng: 'Darkvision'
      },
      description: {
        esp: 'Acostumbrado a la vida bajo tierra, puedes ver bien en la oscuridad o con poca luz. Eres capaz de percibir hasta 60 pies en luz tenue como si hubiera luz brillante, y esa misma distancia en la oscuridad como si hubiera luz tenue. Eso sí, no puedes distinguir colores en la oscuridad, solo tonos de gris.',
        eng: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      },
      type: ['darkvision'],
      rules: {
        value: 60
      }
    },
    {
      name: {
        esp: 'Resistencia Enana',
        eng: 'Dwarven Resilience'
      },
      description: {
        esp: 'Tienes ventaja en las tiradas de salvación contra veneno y posees resistencia al daño de veneno.',
        eng: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
      },
      type: ['ST_advantage', 'DMG_resistance'],
      rules: {
        ST: 'against_poison',
        DMG: 'poison'
      }
    },
    {
      name: {
        esp: 'Entrenamiento de Combate Enano',
        eng: 'Dwarven Combat Training'
      },
      description: {
        esp: 'Eres competente con hachas de guerra, hachas de mano, martillos de guerra y martillos ligeros',
        eng: 'You have proficiency with the battleaxe, handaxe, light hammer and warhammer.'
      },
      type: ['weapon_proficiency'],
      rules: {
        weapons: 'battleaxe, handaxe, light hammer, warhammer'
      }
    },
    {
      name: {
        esp: 'Competencia con Herramientas',
        eng: 'Tool Proficiency'
      },
      description: {
        esp: 'Eres competente con las herramientas de artesano que elijas de entre las siguientes: herramientas de albañil, herramientas de herrero o suministros de cervecero.',
        eng: "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools."
      },
      type: ['tool_proficiency'],
      rules: {
        tools: "smith's tools, brewer's supplies, mason's tools"
      }
    },
    {
      name: {
        esp: 'Afinidad con la Piedra',
        eng: 'Stonecunning'
      },
      description: {
        esp: 'Cuando hagas una prueba de Inteligencia (Historia) que tenga relación con el origen de un trabajo en piedra, se te considerará competente en la habilidad Historia y añadirás dos veces tu bonificador por competencia a la tirada, en lugar de solo una',
        eng: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
      },
      type: ['circumstantial_skill_proficiency'],
      rules: {
        skill: 'history',
        keywords: 'stonework, masonry'
      }
    },
    {
      name: {
        esp: 'Idiomas',
        eng: 'Languages'
      },
      description: {
        esp: 'Puedes hablar, leer y escribir en Común y Enano. El idioma enano está lleno de consonantes duras y sonidos guturales, y estas peculiaridades se traslucen en la forma que tienen los enanos de pronunciar cualquier otro lenguaje que conozcan.',
        eng: 'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.'
      },
      type: ['languages'],
      rules: {
        languages: 'common, dwarvish'
      }
    }
  ],
  subraces: [
    {
      name: {
        esp: 'Enano de las Colinas',
        eng: 'Hill Dwarf'
      },
      description: {
        esp: 'Como enano de las colinas, posees sentidos agudos, una profunda intuición y una resistencia extraordinaria. Los enanos de oro de Faerûn, habitantes de un poderoso reino sureño, son enanos de las colinas, como también lo son los exiliados Neidar y los corruptos Klar que habitan en Krynn, parte de la ambientación Dragonlance.',
        eng: 'As a hill dwarf, you have keen senses, deep intuition and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.'
      },
      traits: [
        {
          name: {
            esp: 'Mejora de Característica',
            eng: 'Ability Score Increase'
          },
          description: {
            esp: 'Tu puntuación de Sabiduría aumenta en 1',
            eng: 'Your Wisdom score increases by 1.'
          },
          type: ['ability_increase'],
          rules: {
            ability: 'WIS',
            value: 1
          }
        },
        {
          name: {
            esp: 'Aguante Enano',
            eng: 'Dwarven Toughness'
          },
          description: {
            esp: 'Tus puntos de golpe máximos se incrementan en 1, y aumentarán en 1 más cada vez que subas un nivel.',
            eng: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
          },
          type: ['HP_increase'],
          rules: {
            value: 1
          }
        }
      ]
    },
    {
      name: {
        esp: 'Enano de las Montañas',
        eng: 'Mountain Dwarf'
      },
      description: {
        esp: 'Como enano de las montañas, eres fuerte y robusto, acostumbrado a la difícil vida en un terreno agreste. Probablemente seas alto (para ser un enano) y tiendas a tonos de piel más claros. Los enanos escudo del norte de Faerûn, así como los clanes Hylar, el dominante, y Daewar, especialmente noble, ambos de la ambientación Dragonlance, son enanos de las montañas.',
        eng: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves."
      },
      traits: [
        {
          name: {
            esp: 'Mejora de Característica',
            eng: 'Ability Score Increase'
          },
          description: {
            esp: 'Tu puntuación de Fuerza aumenta en 2.',
            eng: 'Your Strength score increases by 2.'
          },
          type: ['ability_increase'],
          rules: {
            ability: 'STR',
            value: 2
          }
        },
        {
          name: {
            esp: 'Entrenamiento con Armadura Enana',
            eng: 'Dwarven Armor Training'
          },
          description: {
            esp: 'Eres competente con armaduras ligeras y medias.',
            eng: 'You have proficiency with light and medium armor.'
          },
          type: ['armor_proficiency'],
          rules: {
            armors: 'light armor, medium armor'
          }
        }
      ]
    }
  ]
};

const races: Race[] = [dwarf];

export default races;
