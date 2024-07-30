
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e33a4136-16ff-4fc2-8209-6fae84d7a435', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
