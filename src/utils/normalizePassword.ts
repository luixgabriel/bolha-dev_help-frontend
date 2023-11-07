export default function normalizePassword(password?: string) {
  if (password) return '*'.repeat(password.length)
  return password
}
