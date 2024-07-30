
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a3228a96-0200-43e5-9973-62b1a4c54b88', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
