
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3d5f61a0-2cc4-4d76-bcc6-ef81851ac534', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
