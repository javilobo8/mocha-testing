
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 61121017-0ea1-4f12-ae0a-296ab327711e', () => {
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

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});
