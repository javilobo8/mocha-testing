
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 83b11ca6-b433-47f0-8f1e-ff3dcbb93a27', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
