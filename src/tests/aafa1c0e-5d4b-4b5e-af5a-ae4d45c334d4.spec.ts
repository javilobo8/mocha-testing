
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - aafa1c0e-5d4b-4b5e-af5a-ae4d45c334d4', () => {
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

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});
