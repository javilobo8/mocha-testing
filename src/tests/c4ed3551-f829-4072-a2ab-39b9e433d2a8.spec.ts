
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c4ed3551-f829-4072-a2ab-39b9e433d2a8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});
