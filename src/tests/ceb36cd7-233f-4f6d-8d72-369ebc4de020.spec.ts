
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ceb36cd7-233f-4f6d-8d72-369ebc4de020', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
