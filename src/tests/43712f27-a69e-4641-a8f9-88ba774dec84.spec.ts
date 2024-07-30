
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 43712f27-a69e-4641-a8f9-88ba774dec84', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
