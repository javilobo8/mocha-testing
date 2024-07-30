
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c327c394-ff20-4061-a3ff-9fdc9bc8dcfd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});
