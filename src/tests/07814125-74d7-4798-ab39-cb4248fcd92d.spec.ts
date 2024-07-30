
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 07814125-74d7-4798-ab39-cb4248fcd92d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});
