
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e92cb14e-ea64-4712-a50c-c3c153c3374d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
