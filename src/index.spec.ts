import {printHelloWorld} from './index';

it('should print hello world', () => {
  jest.spyOn(global.console, 'log')
  printHelloWorld();
  expect(console.log).toHaveBeenCalledWith('Hello world')
  printHelloWorld('Test hello');
  expect(console.log).toHaveBeenCalledWith('Test hello')
});
