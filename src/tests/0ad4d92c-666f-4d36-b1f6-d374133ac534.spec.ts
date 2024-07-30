
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0ad4d92c-666f-4d36-b1f6-d374133ac534', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
