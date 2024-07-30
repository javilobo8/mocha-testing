
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0f134279-a669-4591-b2c6-f114203e420e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
