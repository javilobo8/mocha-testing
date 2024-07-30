
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c443a11b-ca9a-4f1f-9cd3-b3ea3f3721b9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
