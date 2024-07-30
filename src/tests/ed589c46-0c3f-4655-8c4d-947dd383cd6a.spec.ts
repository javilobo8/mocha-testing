
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ed589c46-0c3f-4655-8c4d-947dd383cd6a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
