
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 468c0ebc-d6d2-468a-9c93-8e60781ea880', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});
