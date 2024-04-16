import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function nameFormatter(name: string) {
  if (name.length > 15) {
    return name.substring(0, 15).concat('...')
  }

  return name
}
