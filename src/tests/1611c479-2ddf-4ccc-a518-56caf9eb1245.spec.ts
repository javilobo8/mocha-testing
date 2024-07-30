
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1611c479-2ddf-4ccc-a518-56caf9eb1245', () => {
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

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});
