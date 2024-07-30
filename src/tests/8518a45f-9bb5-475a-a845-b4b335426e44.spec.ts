
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8518a45f-9bb5-475a-a845-b4b335426e44', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});
