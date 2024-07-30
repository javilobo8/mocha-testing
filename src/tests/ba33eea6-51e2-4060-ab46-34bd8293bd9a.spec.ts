
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ba33eea6-51e2-4060-ab46-34bd8293bd9a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});
