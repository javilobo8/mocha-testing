
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 49d54318-4fa5-4f75-9b7f-af069677a1b5', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});
