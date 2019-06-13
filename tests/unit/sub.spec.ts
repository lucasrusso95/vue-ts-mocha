import { expect } from 'chai';
import { sub } from '@/services/sub';

describe('sub.spec.ts', () => {
  it('should return 2', () => {
    expect(sub(3, 1)).to.equal(2);
  });
});
