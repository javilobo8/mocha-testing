
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0074312f-312c-443c-aab4-fe69232af01b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
