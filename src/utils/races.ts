export const dwarf: Race = {
  name: {
    esp: 'Enano',
    eng: 'Dwarf'
  },
  description: {
    esp: 'Reinos rebosantes de antiguo esplendor, salas excavadas en las raíces de las montañas, forjas abrasadoras, el resonar de los picos y martillos en las minas, el compromiso con el clan y la tradición, y el odio a los orcos y goblins. Estas son las hebras que todos los enanos comparten.\nAtrevidos y robustos, los enanos son conocidos por su habilidad como guerreros, mineros y trabajadores de la piedra y los metales. Aunque están bastante por debajo de los 5 pies de altura, los enanos son tan anchos y compactos que pueden pesar tanto como un humano a pesar de medir un par de pies menos que ellos. Su valentía y aguante también pueden compararse fácilmente con los de la gente alta.\nLa piel de los enanos varía en color desde un marrón profundo hasta un tono más pálido y sonrosado. No obstante, las tonalidades más comunes son el marrón claro y un moreno intenso. parecidos a los colores de la tierra. Su cabello, que llevan largo, pero con peinados sencillos, suele ser negro, gris o marrón, aunque los enanos más pálidos a veces son pelirrojos. Los enanos de género masculino tienen sus barbas en alta estima, y las cuidan y adornan.',
    eng: 'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs. These common threads unite all dwarves.\nBold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any ofthe larger folk.\nDwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.'
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
        size: 'medium',
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
        weapons: {
          items: ['battleaxe', 'handaxe', 'light_hammer', 'warhammer']
        }
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
        tools: {
          items: ['smiths_tools', 'brewers_supplies', 'masons_tools']
        }
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
        languages: {
          items: ['common', 'dwarvish']
        }
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
            armors: {
              items: ['light_armor', 'medium_armor']
            }
          }
        }
      ]
    }
  ]
};

export const elf: Race = {
  name: {
    esp: 'Elfo',
    eng: 'Elf'
  },

  description: {
    esp: 'Los elfos son un pueblo de gracia ultraterrena, que viven en el mundo, pero no forman completamente parte de él. Habitan en lugares de belleza etérea, en medio de ancianos bosques o en torres plateadas que brillan con una luz feérica. Son espacios en los que una suave música flota en el ambiente y la brisa trae una dulce fragancia. Los elfos aman la naturaleza y la magia, el arte y la artesanía, la música y la poesía.\nDebido a su sobrenatural elegancia y rasgos delicados, los elfos parecen arrebatadoramente bellos a ojos tanto de humanos como de miembros de muchas otras razas. Son, de media, ligeramente más bajos que los humanos, midiendo entre poco menos de 5 pies y algo más de 6 pies de altura. Son más estilizados que los humanos, con pesos que oscilan entre las 100 y 145 libras. Varones y hembras poseen más o menos la misma altura, y aquellos son solo ligeramente más pesados que estas.\nLa gama de tonos de piel, cabello y ojos de los elfos incluye el habitual en los humanos, aunque su piel también puede ser de color cobre, bronce e incluso un azul casi blanco; su pelo verde o azul; y sus ojos estanques de oro y plata. Los elfos carecen por completo de vello corporal o facial. Prefieren las ropas elegantes en colores vivos y disfrutan de joyería sencilla pero hermosa.',
    eng: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.\nWith their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females.\nElves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.'
  },
  traits: [
    {
      name: {
        esp: 'Mejora de Característica',
        eng: 'Ability Score Increase'
      },
      description: {
        esp: 'Tu puntuación de Destreza aumenta en 2.',
        eng: 'Your Dexterity score increases by 2.'
      },
      type: ['ability_increase'],
      rules: {
        ability: 'DEX',
        value: 2
      }
    },
    {
      name: {
        esp: 'Edad',
        eng: 'Age'
      },
      description: {
        esp: 'Aunque los elfos alcanzan la madurez aproximadamente en la misma proporción que los humanos, la concepción de la mayoría de edad de los elfos va más allá del crecimiento e incluye la experiencia vital. Los elfos suelen llegar a la edad adulta y recibir su nuevo nombre tras unos 100 años y pueden llegar a vivir hasta 750.',
        eng: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.'
      },
      type: ['age'],
      rules: {
        min: 100,
        max: 750
      }
    },
    {
      name: {
        esp: 'Tamaño',
        eng: 'Size'
      },
      description: {
        esp: 'Los elfos miden entre poco menos de 5 pies y algo más de 6 pies de altura y son esbeltos. Eres de tamaño Mediano.',
        eng: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.'
      },
      type: ['size'],
      rules: {
        size: 'medium',
        height: {
          min: 5,
          max: 6
        }
      }
    },
    {
      name: {
        esp: 'Velocidad',
        eng: 'Speed'
      },
      description: {
        esp: 'Tu velocidad caminando base es de 30 pies.',
        eng: 'Your base walking speed is 30 feet.'
      },
      type: ['speed'],
      rules: {
        value: 30
      }
    },
    {
      name: {
        esp: 'Visión en la Oscuridad',
        eng: 'Darkvision'
      },
      description: {
        esp: 'Acostumbrado a la penumbra de los bosques y el cielo nocturno, puedes ver bien en la oscuridad o con poca luz. Hasta a un máximo de 60 pies, eres capaz de ver con luz tenue como si hubiera luz brillante y en la oscuridad como si hubiera luz tenue. Eso sí, no puedes distinguir colores en la oscuridad, solo tonos de gris.',
        eng: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      type: ['darkvision'],
      rules: {
        value: 60
      }
    },
    {
      name: {
        esp: 'Sentidos Agudos',
        eng: 'Keen Senses'
      },
      description: {
        esp: 'Eres competente en la habilidad Percepción.',
        eng: 'You have proficiency in the Perception skill.'
      },
      type: ['skill_proficiency'],
      rules: {
        skill: 'perception'
      }
    },
    {
      name: {
        esp: 'Linaje Feérico',
        eng: 'Fey Ancestry'
      },
      description: {
        esp: 'Tienes ventaja en las tiradas de salvación para evitar ser hechizado y la magia no puede dormirte.',
        eng: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      type: ['ST_advantage', 'condition_immunity'],
      rules: {
        ST: 'against_charm',
        condition: 'sleep'
      }
    },
    {
      name: {
        esp: 'Trance',
        eng: 'Trance'
      },
      description: {
        esp: 'Los elfos no necesitan dormir. Meditan profundamente, en un estado semiconsciente, durante 4 horas al día. La palabra en común para referirse a esta meditación es "trance". Mientras meditas, experimentas algo parecido a sueños, que en realidad son ejercicios mentales que se han vuelto automáticos tras años de práctica. Este trance es suficiente para obtener los mismos beneficios que un humano recibe de 8 horas de sueño.',
        eng: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
      },
      type: ['lore'],
      rules: {}
    },
    {
      name: {
        esp: 'Idiomas',
        eng: 'Languages'
      },
      description: {
        esp: 'Puedes hablar, leer y escribir en común y elfo. El idioma elfo es fluido, con entonaciones sutiles y una gramática compleja. La literatura élfica es rica y variada, y sus canciones y poemas son famosos entre el resto de razas. Muchos bardos aprenden este idioma para poder añadir baladas élficas a sus repertorios.',
        eng: 'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.'
      },
      type: ['languages'],
      rules: {
        languages: {
          items: ['common', 'elvish']
        }
      }
    }
  ],
  subraces: [
    {
      name: {
        esp: 'Alto Elfo',
        eng: 'High Elf'
      },
      description: {
        esp: 'Como alto elfo, posees una mente aguda y un dominio de, como mínimo, los rudimentos de la magia. Hay dos tipos de altos elfos: Los primeros son orgullosos y retraídos, pues se creen superiores a las razas no élficas e incluso a otros elfos. Los segundos, aunque poco, se dejan ver y son más amables, siendo habitual encontrarlos junto a humanos e individuos de otras razas.\nLos elfos solares, también conocidos como elfos dorados o elfos del amanecer, tienen la piel de color bronce y el cabello cobrizo, negro o rubio dorado, y sus ojos son dorados, plateados o negros. Los elfos lunares, igualmente llamados elfos plateados o elfos grises, son mucho más pálidos, con la piel como el alabastro o, a veces, tonos azules. Suelen tener el cabello de color blanco plateado, negro o azul, aunque los tonos rubios, morenos o rojizos no son raros. Sus ojos son verdes o azules con motas doradas.',
        eng: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. There are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type are more common and more friendly, and often encountered among humans and other races.\nThe sun elves, also called gold elves or sunrise elves, have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. The moon elves, also called silver elves or gray elves, are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.'
      },
      traits: [
        {
          name: {
            esp: 'Mejora de Característica',
            eng: 'Ability Score Increase'
          },
          description: {
            esp: 'Tu puntuación de Inteligencia aumenta en l.',
            eng: 'Your Intelligence score increases by 1.'
          },
          type: ['ability_increase'],
          rules: {
            ability: 'INT'
          }
        },
        {
          name: {
            esp: 'Entrenamiento con Armas Élficas',
            eng: 'Elf Weapon Training'
          },
          description: {
            esp: 'Eres competente con espadas cortas, espadas largas, arcos cortos y arcos largos.',
            eng: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },
          type: ['weapon_proficiency'],
          rules: {
            weapons: {
              items: ['longsword', 'shortsword', 'shortbow', 'longbow']
            }
          }
        },
        {
          name: {
            esp: 'Truco',
            eng: 'Cantrip'
          },
          description: {
            esp: 'Conoces un truco de tu elección escogido de entre los de la lista de conjuros de mago. La Inteligencia es tu aptitud mágica para lanzarlo.',
            eng: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
          },
          type: ['cantrip'],
          rules: {
            cantrip: 'any'
          }
        },
        {
          name: {
            esp: 'Idioma Adicional',
            eng: 'Extra Language'
          },
          description: {
            esp: 'Puedes hablar, leer y escribir un idioma adicional de tu elección.',
            eng: 'You can speak, read, and write one extra language of your choice.'
          },
          type: ['languages'],
          rules: {
            languages: {
              items: ['any']
            },
            value: 1
          }
        }
      ]
    },
    {
      name: {
        esp: 'Elfo de los Bosques',
        eng: 'Wood Elf'
      },
      description: {
        esp: 'Como elfo de los bosques , posees sentidos agudos y una buena intuición. Además, tus veloces pies te permiten desplazarte rápida y sigilosamente a través de los bosques que son tu hogar.\nLa piel de los elfos del bosque suele tener un tono cobrizo, a veces con trazas de verde. Sus cabellos tienden a los tonos marrones y negros, aunque ocasionalmente son rubios o del color del cobre. Sus ojos son de color verde, marrón o avellana.',
        eng: 'As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.\nWood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.'
      },
      traits: [
        {
          name: {
            esp: 'Mejora de Característica',
            eng: 'Ability Score Increase'
          },
          description: {
            esp: 'Tu puntuación de Sabiduría aumenta en 1.',
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
            esp: 'Entrenamiento con Armas Élficas',
            eng: 'Elf Weapon Training'
          },
          description: {
            esp: 'Eres competente con espadas cortas, espadas largas, arcos cortos y arcos largos.',
            eng: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },
          type: ['weapon_proficiency'],
          rules: {
            weapons: {
              items: ['longsword', 'shortsword', 'shortbow', 'longbow']
            }
          }
        },
        {
          name: {
            esp: 'Pies Veloces',
            eng: 'Fleet of Foot'
          },
          description: {
            esp: 'Tu velocidad caminando base aumenta a 35 pies.',
            eng: 'Your base walking speed increases to 35 feet.'
          },
          type: ['speed'],
          rules: {
            value: 35
          }
        },
        {
          name: {
            esp: 'Máscara de la Naturaleza',
            eng: 'Mask of the Wild'
          },
          description: {
            esp: 'Puedes intentar esconderte incluso cuando estés en un lugar solo ligeramente oscuro, siempre que lo que te tape sea follaje, una lluvia fuerte, nieve que cae, niebla o cualquier otro fenómeno natural.',
            eng: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
          },
          type: ['lore'],
          rules: {}
        }
      ]
    },
    {
      name: {
        esp: 'Elfo Oscuro (Drow)',
        eng: 'Dark Elf (Drow)'
      },
      description: {
        esp: 'Descendientes de una subraza de elfos más antigua, los drows fueron expulsados del mundo de la superficie por seguir a la diosa Lolth en la senda del mal. Han construido su propia civilicación en las profundidades del Underdark (La Infraoscuridad) tomando como modelo el camino de Lolth.\nTambién llamados elfos oscuros, los drows poseen un tono de piel que recuerda el carbón o la obsidiana, en contraste con cabellos blancos o de un rubio pálido. Suelen tener los ojos muy claros, tan pálidos que a veces se confunden con el blanco, tonos lilas, plateados, rojos o azules. Tienden a ser más pequeños y delgados que el resto de elfos.',
        eng: 'Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth.\nAlso called dark elves, the drow have skin that resembles charcoal or obsidian, as well as stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves.'
      },
      traits: [
        {
          name: {
            esp: 'Mejora de Característica',
            eng: 'Ability Score Increase'
          },
          description: {
            esp: 'Tu puntuación de Carisma aumenta en 1.',
            eng: 'Your Charisma score increases by 1.'
          },
          type: ['ability_increase'],
          rules: {
            ability: 'CHA',
            value: 1
          }
        },
        {
          name: {
            esp: 'Visión en la Oscuridad Superior',
            eng: 'Superior Darkvision'
          },
          description: {
            esp: 'Tu Visión en la Oscuridad posee un radio de 120 pies.',
            eng: 'Your darkvision has a radius of 120 feet.'
          },
          type: ['darkvision'],
          rules: {
            value: 120
          }
        },
        {
          name: {
            esp: 'Sensibilidad a la Luz Solar',
            eng: 'Sunlight Sensitivity'
          },
          description: {
            esp: 'Tienes desventaja en las tiradas de ataque y las pruebas de Sabiduría (Percepción) que dependan de la vista realizadas cuando tú, el objetivo de tu ataque o lo que sea que intentas percibir esté bajo la luz solar directa.',
            eng: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.'
          },
          type: ['lore'],
          rules: {}
        },
        {
          name: {
            esp: 'Magia Drow',
            eng: 'Drow Magic'
          },
          description: {
            esp: 'Conoces el truco luces danzantes. Cuando llegas a nivel 3, puedes lanzar el conjuro fuego feérico una vez usando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. Cuando alcanzas nivel 5, eres capaz de lanzar el conjuro oscuridad una vez empleando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. El Carisma es tu aptitud mágica para estos conjuros.',
            eng: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
          },
          type: ['cantrip'],
          rules: {
            cantrip: 'dancing_lights'
          }
        },
        {
          name: {
            esp: 'Magia Drow',
            eng: 'Drow Magic'
          },
          description: {
            esp: 'Conoces el truco luces danzantes. Cuando llegas a nivel 3, puedes lanzar el conjuro fuego feérico una vez usando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. Cuando alcanzas nivel 5, eres capaz de lanzar el conjuro oscuridad una vez empleando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. El Carisma es tu aptitud mágica para estos conjuros.',
            eng: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
          },
          type: ['spell'],
          rules: {
            spell: 'faerie_fire',
            lvl: 3
          }
        },
        {
          name: {
            esp: 'Magia Drow',
            eng: 'Drow Magic'
          },
          description: {
            esp: 'Conoces el truco luces danzantes. Cuando llegas a nivel 3, puedes lanzar el conjuro fuego feérico una vez usando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. Cuando alcanzas nivel 5, eres capaz de lanzar el conjuro oscuridad una vez empleando este atributo y recuperas la capacidad para hacerlo tras realizar un descanso largo. El Carisma es tu aptitud mágica para estos conjuros.',
            eng: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
          },
          type: ['spell'],
          rules: {
            spell: 'darkness',
            lvl: 5
          }
        },
        {
          name: {
            esp: 'Entrenamiento con Armas Drows',
            eng: 'Drow Weapon Training'
          },
          description: {
            esp: 'Eres competente con estoques, espadas cortas y ballestas de mano.',
            eng: 'You have proficiency with rapiers, shortswords, and hand crossbows.'
          },
          type: ['weapon_proficiency'],
          rules: {
            weapons: {
              items: ['rapier', 'shortsword', 'hand_crossbow']
            }
          }
        }
      ]
    }
  ]
};

export const human: Race = {
  name: {
    esp: 'Humano',
    eng: 'Human'
  },
  description: {
    esp: 'En los registros de la mayoría de los mundos, los humanos son la más joven de las razas comunes. Han llegado comparativamente tarde al mundo y sus vidas son más cortas que las de enanos, elfos y dragones. Y quizá sea precisamente por estas cortas vidas por lo que los humanos aspiran a conseguir tanto como sean capaces en los años que se les han concedido. O puede que sientan que tienen que demostrar su valía a las razas antiguas, y por eso construyen poderosos imperios, anclados en los cimientos del comercio y la conquista. Sea cual fuere su motivación, los humanos son los innovadores, los triunfadores y los pioneros del mundo.\nLos humanos son el pueblo más flexible y ambicioso de entre las razas comunes. Poseen una amplia variedad de gustos, códigos morales y costumbres, repartidos por las numerosas tierras en las que habitan. Cuando se asientan en algún lugar, lo hacen para quedarse. Construyen ciudades que perviven durante eras y grandes reinos que pueden durar siglos. Un individuo concreto tiene una existencia corta, pero sus naciones o culturas preservan tradiciones cuyos orígenes se remontant mucho más allá de la memoria de cualquier humano.\nViven por completo en el presente, una filosofía ideal para la vida del aventurero, aunque también planean para el futuro, aspirando a dejar un legado que les sobreviva. Tanto individualmente como en grupo, los humanos son adaptables y oportunistas, capaces de estar atentos a cambios en la política y las dinámicas sociales.',
    eng: "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.\nHumans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human's memory.\nThey live fully in the present-making them well suited to the adventuring life-but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics."
  },
  traits: [
    {
      name: {
        esp: 'Mejora de Característica',
        eng: 'Ability Score Increase'
      },
      description: {
        esp: 'Todas tus puntuaciones de característica aumentan en 1.',
        eng: 'Your ability scores each increase by 1.'
      },
      type: ['ability_increase'],
      rules: {
        ability: 'ALL',
        value: 1
      }
    },
    {
      name: {
        esp: 'Edad',
        eng: 'Age'
      },
      description: {
        esp: 'Alcanzan la madurez poco antes de los veinte años y viven menos de un siglo',
        eng: 'Humans reach adulthood in their late teens and live less than a century.'
      },
      type: ['age'],
      rules: {
        min: 18,
        max: 100
      }
    },
    {
      name: {
        esp: 'Tamaño',
        eng: 'Size'
      },
      description: {
        esp: 'La altura y la complexión de los humanos varían enormemente de un individuo a otro, midiendo entre un poco menos de 5 pies y algo más de 6 pies de altura. Independientemente de cuál sea tu altura concreta, tu tamaño es Mediano',
        eng: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium'
      },
      type: ['size'],
      rules: {
        height: {
          min: 5,
          max: 6
        }
      }
    },
    {
      name: {
        esp: 'Velocidad',
        eng: 'Speed'
      },
      description: {
        esp: 'Tu velocidad caminando base es de 30 pies.',
        eng: 'Your base walking speed is 30 feet.'
      },
      type: ['speed'],
      rules: {
        value: 30
      }
    },
    {
      name: {
        esp: 'Idiomas',
        eng: 'Languages'
      },
      description: {
        esp: 'Puedes hablar, leer y escribir común y un idioma adicional de tu elección.',
        eng: 'You can speak, read, and write Common and one extra language of your choice.'
      },
      type: ['languages'],
      rules: {
        languages: {
          items: ['common', 'any']
        },
        value: 1
      }
    }
  ],
  subraces: []
};

const races: Race[] = [dwarf, elf, human];

export default races;
