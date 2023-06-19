import Team from '../js/app';
import Character from '../js/character';

test('Добавление персонажа', () => {
  const test = new Character('Berny');
  const team = new Team();
  team.add(test);
  expect(team.members).toEqual(new Set([{name:'Berny'}]));
});

test('Add same character', () => {
  const test = new Character('Berny');
  const team = new Team();
  team.add(test);
  expect(() => team.add(test)).toThrow(`Персонаж ${test.name} уже в команде`);
});

test('Добавление нескольких персонажей', () => {
  const test = new Character('Berny');
  const test1 = new Character('Eddy');
  const test2 = new Character('Rob');
  const team = new Team();
  team.addAll(test, test1, test2);
  expect(team.members).toEqual(new Set([
    {name: 'Berny'},
    {name: 'Eddy'},
    {name: 'Rob'},
  ]));
});

test('Конвертация в массив', () => {
   const test = new Character('Berny');
   const test1 = new Character('Eddy');
   const test2 = new Character('Rob');
   const team = new Team();
   team.addAll(test, test1, test2);
  expect(team.toArray()).toEqual([
    {name: 'Berny'},
    {name: 'Eddy'},
    {name: 'Rob'},
  ]);
});
