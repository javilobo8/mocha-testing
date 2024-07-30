
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6dff86e7-318b-404c-89f6-9c24ffb1780f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
