
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6ada9869-b2bf-4917-9aaa-525e604bb0c7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});
