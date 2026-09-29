(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.case-card')];
  const count = document.getElementById('case-count');
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    buttons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = selected !== 'all' && selected !== card.dataset.category; });
    if (count) count.textContent = `${cards.filter(card => !card.hidden).length} 个已落地案例`;
  }));
})();
