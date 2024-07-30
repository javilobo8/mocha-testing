
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e7467cf8-57cb-42f5-b92b-bcc8e825dc65', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
