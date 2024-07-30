
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 215f4cd7-79fd-4fe7-be6b-960793defb46', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});
