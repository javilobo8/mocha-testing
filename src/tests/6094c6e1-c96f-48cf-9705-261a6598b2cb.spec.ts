
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6094c6e1-c96f-48cf-9705-261a6598b2cb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
