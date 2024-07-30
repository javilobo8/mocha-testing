
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6e6b17d7-55b3-4b06-9f71-eeddad007894', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});
