
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - dec0b3d6-1db2-412a-bb3d-8d4325fe4466', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});
