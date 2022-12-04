import {sum, sub} from './calculator';

describe('Calculator - Unit tests', () => {
    test('should return 10 when sum two values', () => {
        const result = sum(6, 6);

        expect(result).toBe(12);
    });

    test('should return 2 when subtract two values', () => {
        const result = sub(10, 8);

        expect(result).toBe(2);
    });
  });