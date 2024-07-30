
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bacf1d94-67fc-4df2-8434-9b4f575c5728', () => {
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

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
