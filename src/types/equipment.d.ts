type weapon =
  | 'dagger'
  | 'shortsword'
  | 'longsword'
  | 'rapier'
  | 'handaxe'
  | 'battleaxe'
  | 'light_hammer'
  | 'warhammer'
  | 'shortbow'
  | 'longbow'
  | 'hand_crossbow'
  | 'light_crossbow'
  | 'darts'
  | 'sling'
  | 'quarterstaff';

type armor = 'light_armor' | 'medium_armor' | 'heavy_armor';

type tool = 'smiths_tools' | 'brewers_supplies' | 'masons_tools';

interface Equipment {
  weapons?: weapon[];
  armors?: armor[];
  tools?: tool[];
}
