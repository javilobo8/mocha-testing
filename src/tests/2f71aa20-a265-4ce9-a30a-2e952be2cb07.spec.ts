
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2f71aa20-a265-4ce9-a30a-2e952be2cb07', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
