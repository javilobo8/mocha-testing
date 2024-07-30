
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8002425e-722f-4699-8b34-294ac8309f59', () => {
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

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});
