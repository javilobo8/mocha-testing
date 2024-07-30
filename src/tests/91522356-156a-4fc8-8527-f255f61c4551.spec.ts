
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 91522356-156a-4fc8-8527-f255f61c4551', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
