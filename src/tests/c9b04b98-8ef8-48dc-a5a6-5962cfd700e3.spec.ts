
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c9b04b98-8ef8-48dc-a5a6-5962cfd700e3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
