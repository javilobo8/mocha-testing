
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4976f237-07fe-465a-8df5-27abf1b39654', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
