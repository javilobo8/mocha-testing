
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 478f54f9-f1dd-4761-ad57-38b21a45c799', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
