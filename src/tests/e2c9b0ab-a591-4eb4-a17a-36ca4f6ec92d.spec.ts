
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e2c9b0ab-a591-4eb4-a17a-36ca4f6ec92d', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
