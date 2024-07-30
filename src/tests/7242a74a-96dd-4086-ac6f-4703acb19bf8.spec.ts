
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7242a74a-96dd-4086-ac6f-4703acb19bf8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
