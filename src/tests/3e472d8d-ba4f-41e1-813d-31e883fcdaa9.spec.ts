
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3e472d8d-ba4f-41e1-813d-31e883fcdaa9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});
