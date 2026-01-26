export interface HmPropsTp {
  statsRef: React.RefObject<HTMLElement> | null;
  counters: { stores: number; brands: number; jobs: number };
}
