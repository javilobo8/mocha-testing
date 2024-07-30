
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ee4eb9ff-94a3-4624-bded-d480051d17bf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});
