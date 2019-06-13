import { expect } from 'chai';
import { sum } from '@/services/sum';

describe('sum.spec.ts', () => {
  it('should return 4', () => {
    expect(sum(3, 1)).to.equal(4);
  });
});
