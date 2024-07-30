
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a9c66068-d13a-41d3-a8f8-ff3325a621cc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});
