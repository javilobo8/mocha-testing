
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5269e173-7de5-48aa-afa3-f678cdc0525b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
