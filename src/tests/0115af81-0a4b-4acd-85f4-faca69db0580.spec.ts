
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0115af81-0a4b-4acd-85f4-faca69db0580', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});
