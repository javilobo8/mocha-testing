
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3a2fcf49-fec6-4f89-b8c2-127be6da79cb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
