
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b656fa27-5a2d-4d20-8ecd-a57fc7d31ce3', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
