
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0201dd9f-4add-4fdf-a5f0-9517c3d7e057', () => {
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

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});
