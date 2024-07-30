
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c273fc1f-fafe-4103-8493-eeb28d0b62f1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
