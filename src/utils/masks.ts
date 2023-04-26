export function toDate(value?: string) {
  if (!value) return value

  value = value.replace(/\D/, '')
  if (value.length > 2) {
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
  }
  if (value.length > 5 && value.length < 8) {
    value = value.replace(/(\d{2})\/(\d{2})(\d+)/, '$1/$2/$3')
  }
  if (value.length >= 8) {
    value = value.replace(/(\d{2})(\d{2})(\d{2,})/, '$1/$2/$3')
  }
  return value
}

export function toTime(value?: string) {
  value = value?.replace(/\D/, '')
  value = value?.replace(/(\d{2})(\d{2})/, '$1:$2')
  return value
}
