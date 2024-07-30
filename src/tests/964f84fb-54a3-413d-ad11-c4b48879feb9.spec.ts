
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 964f84fb-54a3-413d-ad11-c4b48879feb9', () => {
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

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});
