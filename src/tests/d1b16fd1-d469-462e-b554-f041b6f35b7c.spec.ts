
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d1b16fd1-d469-462e-b554-f041b6f35b7c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
