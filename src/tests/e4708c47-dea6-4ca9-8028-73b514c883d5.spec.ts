
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e4708c47-dea6-4ca9-8028-73b514c883d5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
