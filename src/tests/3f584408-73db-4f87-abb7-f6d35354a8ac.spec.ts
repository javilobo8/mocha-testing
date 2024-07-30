
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3f584408-73db-4f87-abb7-f6d35354a8ac', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
