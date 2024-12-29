export const getTokenFromUrl = () => {
  if (!window.location.hash) {
    return {}
  }
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: { [key: string]: string }, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}
