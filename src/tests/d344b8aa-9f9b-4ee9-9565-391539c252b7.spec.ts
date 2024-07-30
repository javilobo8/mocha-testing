
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d344b8aa-9f9b-4ee9-9565-391539c252b7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});
