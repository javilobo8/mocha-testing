
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a6a585c-a524-4a09-92b6-484af05c3efe', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
