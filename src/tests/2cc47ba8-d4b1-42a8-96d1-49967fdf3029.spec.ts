
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2cc47ba8-d4b1-42a8-96d1-49967fdf3029', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
