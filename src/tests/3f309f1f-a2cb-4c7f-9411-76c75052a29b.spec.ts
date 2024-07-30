
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3f309f1f-a2cb-4c7f-9411-76c75052a29b', () => {
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

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});
