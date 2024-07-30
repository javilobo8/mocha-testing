
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2e12d7e0-7eeb-4345-8317-c2181ed27108', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
