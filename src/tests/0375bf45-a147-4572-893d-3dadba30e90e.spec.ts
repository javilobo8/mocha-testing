
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0375bf45-a147-4572-893d-3dadba30e90e', () => {
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

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
