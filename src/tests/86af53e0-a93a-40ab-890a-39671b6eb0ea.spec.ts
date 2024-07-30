
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 86af53e0-a93a-40ab-890a-39671b6eb0ea', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
