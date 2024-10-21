import { DefaultDatePipe } from './default-date.pipe';

describe('DefaultDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultDatePipe();
    expect(pipe).toBeTruthy();
  });
});
