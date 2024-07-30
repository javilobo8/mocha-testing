
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 57083ced-da95-47b9-846f-1207b127e530', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});
