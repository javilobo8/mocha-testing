
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0ad1b557-321f-4a63-8c21-5df7e51bd56d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});
