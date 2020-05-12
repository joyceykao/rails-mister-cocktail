import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["it's after 5pm somewhere..."],
    typeSpeed: 200,
    loop: true
  });
}

export { loadDynamicBannerText };
