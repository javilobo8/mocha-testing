
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e3d644c1-8542-443e-95af-84d9b36a3917', () => {
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

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
