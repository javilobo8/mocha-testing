
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cd880264-6564-4811-8120-dd7accde4637', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
