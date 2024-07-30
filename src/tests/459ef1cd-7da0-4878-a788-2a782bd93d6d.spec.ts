
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 459ef1cd-7da0-4878-a788-2a782bd93d6d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
