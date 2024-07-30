
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - acadd4a6-c821-46f5-8f4d-9bf388024e18', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
