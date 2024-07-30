
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 275878aa-d72a-4531-a587-fcd77bf203fc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
