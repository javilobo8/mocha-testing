
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5df5a0a9-f787-474a-83a0-fbb911bac587', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
