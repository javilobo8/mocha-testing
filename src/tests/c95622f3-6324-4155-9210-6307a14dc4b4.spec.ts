
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c95622f3-6324-4155-9210-6307a14dc4b4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
