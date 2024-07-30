
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - aebdc5cc-818a-42eb-a757-3e308e873a92', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});
