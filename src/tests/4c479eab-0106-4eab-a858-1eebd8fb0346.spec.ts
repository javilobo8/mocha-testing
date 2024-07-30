
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4c479eab-0106-4eab-a858-1eebd8fb0346', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
