
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8e67ddc3-32e7-4bbf-95c3-295fa6213d03', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
