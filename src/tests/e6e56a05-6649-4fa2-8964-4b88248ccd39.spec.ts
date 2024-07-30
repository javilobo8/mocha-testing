
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e6e56a05-6649-4fa2-8964-4b88248ccd39', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
