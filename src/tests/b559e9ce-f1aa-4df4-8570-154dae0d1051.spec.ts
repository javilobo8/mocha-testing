
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b559e9ce-f1aa-4df4-8570-154dae0d1051', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
