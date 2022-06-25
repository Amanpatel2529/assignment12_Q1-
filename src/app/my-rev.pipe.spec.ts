import { MyRevPipe } from './my-rev.pipe';

describe('MyRevPipe', () => {
  it('create an instance', () => {
    const pipe = new MyRevPipe();
    expect(pipe).toBeTruthy();
  });
});
