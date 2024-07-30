
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 97fe3934-bdad-4c01-a645-43c9503dca12', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
