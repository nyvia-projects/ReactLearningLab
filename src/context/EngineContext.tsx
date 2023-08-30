import { createContext, useState } from "react";
export type KnownEngine = {
  name: string;
  type: string;
};

type EngineContextType = {
  engine: KnownEngine | null;
  setEngine: React.Dispatch<React.SetStateAction<KnownEngine | null>>;
};

type EngineContextProviderProps = {
  children: React.ReactNode;
};

export const EngineContext = createContext({} as EngineContextType);

export const EngineContextProvider = ({
  children,
}: EngineContextProviderProps) => {
  const [engine, setEngine] = useState<KnownEngine | null>(null);
  return (
    <EngineContext.Provider value={{ engine, setEngine }}>
      {children}
    </EngineContext.Provider>
  );
};
