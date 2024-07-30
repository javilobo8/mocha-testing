
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4342bfb3-bc04-4145-a580-87c242b1ea6b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
