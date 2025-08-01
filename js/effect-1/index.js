import { TextAnimator } from './text-animator.js';

const init = () => {
  document.querySelectorAll('.list__item').forEach(item => {
    const cols = Array.from(item.querySelectorAll('.hover-effect'));
    const animators = cols.map(col => new TextAnimator(col));

    // Trigger animation once on load
    animators.forEach(animator => animator.animate());

    // Then trigger on hover
    item.addEventListener('mouseenter', () => {
      animators.forEach(animator => animator.animate());
    });
  });

  // Same for all links
  document.querySelectorAll('a.hover-effect').forEach(item => {
    const animator = new TextAnimator(item);

    // Trigger on load
    animator.animate();

    // Then trigger on hover
    item.addEventListener('mouseenter', () => {
      animator.animate();
    });
  });
};

init();
