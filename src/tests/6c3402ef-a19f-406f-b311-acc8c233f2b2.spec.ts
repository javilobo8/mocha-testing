
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6c3402ef-a19f-406f-b311-acc8c233f2b2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
