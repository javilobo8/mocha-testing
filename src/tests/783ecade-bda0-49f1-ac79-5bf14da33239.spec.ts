
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 783ecade-bda0-49f1-ac79-5bf14da33239', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
