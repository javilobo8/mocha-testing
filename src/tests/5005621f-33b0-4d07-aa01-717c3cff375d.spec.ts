
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5005621f-33b0-4d07-aa01-717c3cff375d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
