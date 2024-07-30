
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 00bdd35c-91a1-4379-a7e5-448c384307da', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});
