
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e38ea25a-45a7-44e5-aafa-fe3e076ca682', () => {
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

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});
