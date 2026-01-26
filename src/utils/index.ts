interface CounterType {
  setCounters: React.Dispatch<
    React.SetStateAction<{
      stores: number;
      brands: number;
      jobs: number;
    }>
  >;
}

const animateCounters = ({ setCounters }: CounterType) => {
  const duration = 8000;
  const targets = { stores: 40, brands: 4, jobs: 600 };
  const steps = 60;
  const increment = {
    stores: targets.stores / steps,
    brands: targets.brands / steps,
    jobs: targets.jobs / steps,
  };

  let current = 0;
  const timer = setInterval(() => {
    current++;
    setCounters({
      stores: Math.min(Math.floor(increment.stores * current), targets.stores),
      brands: Math.min(Math.floor(increment.brands * current), targets.brands),
      jobs: Math.min(Math.floor(increment.jobs * current), targets.jobs),
    });

    if (current >= steps) clearInterval(timer);
  }, duration / steps);
};

export { animateCounters };
