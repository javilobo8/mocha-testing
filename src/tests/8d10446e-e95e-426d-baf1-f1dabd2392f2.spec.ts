
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8d10446e-e95e-426d-baf1-f1dabd2392f2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
