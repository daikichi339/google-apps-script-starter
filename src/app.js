import Test from './module/test';

global.test = () => {
  const test = new Test();
  test.init();
};
