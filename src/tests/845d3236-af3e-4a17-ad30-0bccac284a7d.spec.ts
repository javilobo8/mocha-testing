
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 845d3236-af3e-4a17-ad30-0bccac284a7d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});
