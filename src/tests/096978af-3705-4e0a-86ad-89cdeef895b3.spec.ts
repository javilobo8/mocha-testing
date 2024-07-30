
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 096978af-3705-4e0a-86ad-89cdeef895b3', () => {
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

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});
