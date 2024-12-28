import { cn } from './cn';

describe('cn utility function', () => {

  test('combines classes correctly', () => {
    const result = cn('bg-red-500', 'text-white', 'p-4');
    expect(result).toBe('bg-red-500 text-white p-4');
  });

  test('merges conflicting Tailwind classes', () => {
    const result = cn('bg-red-500', 'bg-blue-500', 'text-white');
    expect(result).toBe('bg-blue-500 text-white');
  });

  test('handles conditional classes correctly', () => {

    const result = cn({
      'bg-blue-500': true,
      'text-black': false,
      'p-4': true,
      'text-white': false
    });
    expect(result).toBe('bg-blue-500 p-4');
  });

  test('returns an empty string if no classes are passed', () => {
    const result = cn();
    expect(result).toBe('');
  });

  test('ignores falsy values', () => {
    const result = cn('bg-red-500', null, undefined, false, 'text-white');
    expect(result).toBe('bg-red-500 text-white');
  });

  test('correctly merges overlapping Tailwind classes', () => {
    const result = cn('w-32', 'w-64', 'h-32');
    expect(result).toBe('w-64 h-32');
  });

  test('handles multiple arguments and falsy values', () => {
    const result = cn('bg-red-500', null, 'text-white', undefined, 'h-32');
    expect(result).toBe('bg-red-500 text-white h-32');
  });

});
