import { type Accessor, createContext, createSignal, type ParentProps, useContext } from "solid-js";

interface SectionContextType {
  refs: Accessor<Map<string, HTMLElement>>;
  addRef: (id: string, ref: HTMLElement) => void;
};

const SectionContext = createContext<SectionContextType>();

export function SectionProvider(props: ParentProps) {
  const [refs, setRefs] = createSignal<Map<string, HTMLElement>>(new Map());

  const value: SectionContextType = {
    refs,
    addRef(id, ref) {
      setRefs(r => new Map([...r, [id, ref]]));
    }
  };

  return (
    <SectionContext.Provider value={value}>
      {props.children}
    </SectionContext.Provider>
  );
}

// biome-ignore lint/style/noNonNullAssertion: We are guaranteed to have a context provider
export function useSection() { return useContext(SectionContext)!; }
