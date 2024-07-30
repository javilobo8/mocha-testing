
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 25973725-d4a8-4ef1-b724-836337028200', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
