import { Application } from '../src/index';

test('Invoke', async () => {
  const app = new Application();

  const res = await app.invoke();

  expect(res).toBe('Hello');
});

test('Invoke Alt', async () => {
  const app = new Application();

  const res = await app.invoke(true);

  expect(res).toBe('Good-Bye');
});

test('Invoke Confused', async () => {
  const app = new Application();

  const res = await app.invoke(true, true);

  expect(res).toBe('huh?');
});