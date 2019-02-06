export default function characterInfo(characterArr) {
  const icons = {
    Bowman: 'U+1F620',
    Swordsman: 'U+1F621',
    Magician: 'U+1F9D0',
    Daemon: 'U+1F47F',
    Undead: 'U+1F480',
    Zombie: 'U+1F9DF',
    attack: 'U+2694',
    defence: 'U+1F6E1',
    health: 'U+2764',
  };

  Object.keys(icons).forEach((key) => {
    icons[key] = String.fromCodePoint(icons[key].replace('U+', '0x'));
  });

  const typeIcon = icons[characterArr.type];
  const {
    level,
    attack,
    defence,
    health,
    name,
  } = characterArr;

  return `${typeIcon} ${name[0]}(${level}) ${icons.attack}${attack} ${icons.defence}${defence} ${icons.health}${health}`;
}
