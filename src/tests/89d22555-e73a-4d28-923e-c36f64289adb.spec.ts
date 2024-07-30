
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 89d22555-e73a-4d28-923e-c36f64289adb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
