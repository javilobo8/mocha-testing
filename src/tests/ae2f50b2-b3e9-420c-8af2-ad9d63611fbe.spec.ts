
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ae2f50b2-b3e9-420c-8af2-ad9d63611fbe', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
