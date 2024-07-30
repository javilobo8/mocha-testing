
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f969f976-63f6-42a1-bbf1-80bfd89a41b4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});
