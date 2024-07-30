
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 11839232-5280-43f8-942d-d05cb8d1bfec', () => {
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

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
