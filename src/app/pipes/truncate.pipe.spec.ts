import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should truncate text', () => {
    const pipe = new TruncatePipe();
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    expect(pipe.transform(text, 11)).toBe('Lorem ipsum...');
  });
});
