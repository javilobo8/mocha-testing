
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 44d7436c-c01f-4699-9a50-dc35889237b4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});
