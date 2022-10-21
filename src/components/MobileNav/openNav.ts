const openNav = () => {
  const nav: HTMLElement | null = document.querySelector('#nav');
  const overlay: HTMLElement | null = document.querySelector('#overlay-nav');

  if (nav && overlay) {
    nav.style.width = '75%';
    overlay.style.height = 'auto';
    overlay.style.opacity = '0.1';
  }
}

const closeNav = () => {
  const nav: HTMLElement | null = document.querySelector('#nav');
  const overlay: HTMLElement | null = document.querySelector('#overlay-nav');

  if (nav && overlay) {
    nav.style.width = '0';
    overlay.style.opacity = '0';
  
    // Wait for opacity transition to finish before removing height
    setTimeout(() => {overlay.style.height = '0'}, 500)
  }
}

export default openNav;
export { closeNav };
