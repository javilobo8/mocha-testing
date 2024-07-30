
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e6f0b13a-2443-427e-a5d1-a53cc97982cd', () => {
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

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
