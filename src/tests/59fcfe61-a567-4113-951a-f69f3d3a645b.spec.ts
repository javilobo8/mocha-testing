
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 59fcfe61-a567-4113-951a-f69f3d3a645b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
