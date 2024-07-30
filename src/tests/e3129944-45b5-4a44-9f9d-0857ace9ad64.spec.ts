
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e3129944-45b5-4a44-9f9d-0857ace9ad64', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});
