
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a159e8af-835c-4bc6-afe2-ea65fc17ac33', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});
