
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c08894df-7a19-4fb3-bd31-d0d5bca8e1f9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
