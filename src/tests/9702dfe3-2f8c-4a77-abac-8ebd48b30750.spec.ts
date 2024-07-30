
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9702dfe3-2f8c-4a77-abac-8ebd48b30750', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
