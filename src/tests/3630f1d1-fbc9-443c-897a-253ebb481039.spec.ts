
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3630f1d1-fbc9-443c-897a-253ebb481039', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
