
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2f1779cc-ff82-4bae-b241-12d199374326', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
