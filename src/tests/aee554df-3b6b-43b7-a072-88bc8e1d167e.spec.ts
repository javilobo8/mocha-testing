
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - aee554df-3b6b-43b7-a072-88bc8e1d167e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
