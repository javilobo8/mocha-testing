
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b6f187fe-a6f7-4fa6-b0d4-ca04239dc024', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
