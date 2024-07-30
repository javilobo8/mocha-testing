
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 314b46ce-56e0-4d5c-9170-7f6df90bbdd8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
