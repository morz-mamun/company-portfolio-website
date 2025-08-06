// Function to start the count animation
export const startCounting = (
  end: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
) => {
  return new Promise<void>((resolve) => {
    let current = 0;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= end) {
        clearInterval(timer);
        resolve();
      }
    }, stepTime);
  });
};
