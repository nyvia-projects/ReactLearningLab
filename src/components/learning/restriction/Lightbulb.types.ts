type LightbulbBaseType = {
  color: string;
};

type LightbulbOff = LightbulbBaseType & {
  isOff: boolean;
  isLow?: never;
  isHigh?: never;
};

type LightbulbLow = LightbulbBaseType & {
  isLow: boolean;
  isOff?: never;
  isHigh?: never;
};

type LightbulbHigh = LightbulbBaseType & {
  isHigh: boolean;
  isLow?: never;
  isOff?: never;
};

export type LightbulbProps = LightbulbOff | LightbulbLow | LightbulbHigh;
