
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 94ab15a2-0e8f-4390-8b55-0c397c70808d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
