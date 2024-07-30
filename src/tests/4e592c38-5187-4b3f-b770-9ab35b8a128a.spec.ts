
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4e592c38-5187-4b3f-b770-9ab35b8a128a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
