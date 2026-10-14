import { describe, it, expect } from 'vitest'
import { tambah, kurang, kali } from '../src/fungsi'

describe('PPL-3: Method A (tambah) lanjutan', () => {
  it('bilangan desimal', () => expect(tambah(0.5, 0.25)).toBe(0.75))
  it('bilangan besar', () => expect(tambah(1000000, 2000000)).toBe(3000000))
  it('dua negatif', () => expect(tambah(-3, -4)).toBe(-7))
})

describe('PPL-4: Method B (kurang) lanjutan', () => {
  it('bilangan desimal', () => expect(kurang(1.5, 0.5)).toBe(1))
  it('bilangan besar', () => expect(kurang(5000000, 2000000)).toBe(3000000))
  it('dua negatif', () => expect(kurang(-3, -4)).toBe(1))
})

describe('PPL-5: Method C (kali) lanjutan', () => {
  it('bilangan desimal', () => expect(kali(0.5, 4)).toBe(2))
  it('bilangan besar', () => expect(kali(1000, 1000)).toBe(1000000))
  it('dua negatif', () => expect(kali(-3, -4)).toBe(12))
})