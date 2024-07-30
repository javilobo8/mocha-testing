
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 30aaae0e-7192-4d4b-8153-788212e51e47', () => {
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

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
