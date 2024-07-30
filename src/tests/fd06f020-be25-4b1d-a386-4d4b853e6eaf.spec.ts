
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fd06f020-be25-4b1d-a386-4d4b853e6eaf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
