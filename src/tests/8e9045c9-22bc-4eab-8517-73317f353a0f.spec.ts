
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8e9045c9-22bc-4eab-8517-73317f353a0f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
