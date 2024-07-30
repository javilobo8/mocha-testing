
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 33738a56-98c9-4d8f-bf9b-506ab8e5a193', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});
