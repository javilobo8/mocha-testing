
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3dd508c5-e931-4549-a3e2-a9188756b553', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
