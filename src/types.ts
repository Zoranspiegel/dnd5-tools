/* eslint-disable @typescript-eslint/no-unused-vars */
interface Trait {
  name: {
    esp: string;
    eng: string;
  };
  description: {
    esp: string;
    eng: string;
  };
  type: string[];
  rules: {
    speed?: number;
    weight?: number;
    height?: {
      min: number;
      max: number;
    };
    ability?: string;
    skill?: string;
    ST?: string;
    DMG?: string;
    min?: number;
    max?: number;
    value?: number;
    cancel?: string;
    weapons?: string;
    armors?: string;
    tools?: string;
    languages?: string;
    keywords?: string;
  };
}

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
