
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 82610bef-17d7-42fc-bfdc-4fc4a7592dba', () => {
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

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});
