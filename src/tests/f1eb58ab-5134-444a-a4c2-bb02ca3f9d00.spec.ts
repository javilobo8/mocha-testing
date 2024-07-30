
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f1eb58ab-5134-444a-a4c2-bb02ca3f9d00', () => {
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

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});
