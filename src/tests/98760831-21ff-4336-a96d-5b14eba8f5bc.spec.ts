
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 98760831-21ff-4336-a96d-5b14eba8f5bc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});
