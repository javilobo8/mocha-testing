
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4086b08f-854a-4db7-95b1-096f0f51a5da', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
