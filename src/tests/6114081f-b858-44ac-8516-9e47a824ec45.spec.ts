
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6114081f-b858-44ac-8516-9e47a824ec45', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
