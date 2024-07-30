
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c373cb17-9399-4c75-a7d4-dcaddf5f7f39', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});
