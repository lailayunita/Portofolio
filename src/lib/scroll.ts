export const handleScroll = (section: string) => {
  const element = document.getElementById(section);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.scrollY; // Target posisi elemen
  const startPosition = window.scrollY; // Posisi scroll saat ini
  const distance = targetPosition - startPosition; // Jarak scroll
  const duration = 1000; // Durasi dalam milidetik
  let startTime: number | null = null;

  // Fungsi easing untuk efek smooth scroll
  const easeInOutQuad = (
    time: number,
    start: number,
    change: number,
    duration: number
  ): number => {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  };

  // Animasi scrolling
  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
