
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5a653773-0731-4568-b62b-91eea8642814', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
