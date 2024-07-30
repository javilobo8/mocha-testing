
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1b7910b5-aae0-49c2-8c59-b6acc1ffc333', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
