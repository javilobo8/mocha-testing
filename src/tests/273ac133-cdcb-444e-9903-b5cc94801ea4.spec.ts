
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 273ac133-cdcb-444e-9903-b5cc94801ea4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});
