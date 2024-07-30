
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0a6151fd-1a94-4ada-a7c5-fdd3ab9b3797', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
