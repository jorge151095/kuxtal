import React from 'react';

const social_links=[
  {link: 'https://www.facebook.com/KuxtalAgenciaPublicitaria', target: '_blank', icon: 'fab fa-facebook-f'},
  {link: 'https://instagram.com/kuxtalagenciapublicitaria?igshid=YmMyMTA2M2Y=', target: '_blank', icon: 'fab fa-instagram'},
  {link: 'https://www.tiktok.com/@kuxtalagenciapubl?_t=8ZnQYZe6OLW&_r=1', target: '_blank', icon: 'fab fa-tiktok'}
]

const hero_socials = [
  { num: 1,link:'https://www.facebook.com/KuxtalAgenciaPublicitaria',target: '_blank', icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook' },
  { num: 3,link:'https://instagram.com/kuxtalagenciapublicitaria?igshid=YmMyMTA2M2Y=',target: '_blank',icon: 'fab fa-instagram social-icon-3', title: 'Instagram' },
  { num: 2,link:'https://www.tiktok.com/@kuxtalagenciapubl?_t=8ZnQYZe6OLW&_r=1',target: '_blank',icon:'fab fa-tiktok social-icon-2', title: 'Tiktok' },
]

export const HeroSocials = ({hide_title=false}) => {
  return (
    <>{hero_socials.map((l, i) => <a key={i} href={l.link} className={`social-icon-${l.num}`}
    target={l.target ? l.target:''}><i className={l.icon}></i>{hide_title?'':l.title}</a>)}</>
  );
};

const SocialLinks = () => {
  return (
    <>{social_links.map((l, i) => <a key={i} href={l.link}
    target={l.target ? l.target:''}><i className={l.icon}></i></a>)}</>
  );
};

export default SocialLinks;