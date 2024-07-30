
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e94d8fed-92f1-46dc-a2c5-7d8cffddd968', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
