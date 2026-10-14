import { describe, it, expect } from 'vitest'
import { tambah, kurang, kali, bagi, isGenap, hitungRataRata } from '../src/fungsi'

describe('Method A: tambah', () => {
  it('kasus normal', () => expect(tambah(2, 3)).toBe(5))
  it('kasus batas (nol)', () => expect(tambah(0, 0)).toBe(0))
  it('bilangan negatif', () => expect(tambah(-2, 5)).toBe(3))
})

describe('Method B: kurang', () => {
  it('kasus normal', () => expect(kurang(5, 3)).toBe(2))
  it('kasus batas (nol)', () => expect(kurang(0, 0)).toBe(0))
  it('hasil negatif', () => expect(kurang(3, 5)).toBe(-2))
})

describe('Method C: kali', () => {
  it('kasus normal', () => expect(kali(4, 3)).toBe(12))
  it('kasus batas (kali nol)', () => expect(kali(5, 0)).toBe(0))
  it('bilangan negatif', () => expect(kali(-2, 3)).toBe(-6))
})

describe('Method D: bagi', () => {
  it('kasus normal', () => expect(bagi(10, 2)).toBe(5))
  it('hasil desimal', () => expect(bagi(1, 2)).toBe(0.5))
  it('kasus salah (bagi nol)', () => {
    expect(() => bagi(5, 0)).toThrow('Tidak bisa dibagi nol')
  })
})

describe('Method E: isGenap', () => {
  it('bilangan genap', () => expect(isGenap(4)).toBe(true))
  it('bilangan ganjil', () => expect(isGenap(7)).toBe(false))
  it('kasus batas (nol)', () => expect(isGenap(0)).toBe(true))
})

describe('Method F: hitungRataRata', () => {
  it('kasus normal', () => expect(hitungRataRata([2, 4, 6])).toBe(4))
  it('satu elemen', () => expect(hitungRataRata([5])).toBe(5))
  it('kasus salah (array kosong)', () => {
    expect(() => hitungRataRata([])).toThrow('Array kosong')
  })
})