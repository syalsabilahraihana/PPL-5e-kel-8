// Method A
export function tambah(a: number, b: number): number {
  return a + b
}

// Method B
export function kurang(a: number, b: number): number {
  return a - b
}

// Method C
export function kali(a: number, b: number): number {
  return a * b
}

// Method D
export function bagi(a: number, b: number): number {
  if (b === 0) throw new Error('Tidak bisa dibagi nol')
  return a / b
}

// Method E
export function isGenap(n: number): boolean {
  return n % 2 === 0
}

// Method F
export function hitungRataRata(arr: number[]): number {
  if (arr.length === 0) throw new Error('Array kosong')
  return arr.reduce((total, x) => total + x, 0) / arr.length
}