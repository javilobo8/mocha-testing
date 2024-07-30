
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f0635b27-ff54-460b-8125-5d84175d1855', () => {
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

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
