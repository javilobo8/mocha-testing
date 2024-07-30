
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5650a5d8-ac0d-4784-9f3e-fb354a6effe5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
