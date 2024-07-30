
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 56612147-9159-4f91-850a-bebbc187c7b7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
