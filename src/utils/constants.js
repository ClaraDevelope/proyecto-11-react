import md5 from 'md5'
export const timestamp = new Date().getTime().toString()
export const publicKey = '74219a07ea52c00d2eef82d8435af279'
export const privateKey = '03ab7cc64503787f65959108c3fb44b16da8620c'
const generateHash = (timestamp, publicKey, privateKey) => {
  const hash = md5(timestamp + privateKey + publicKey)
  return hash
}

export const hash = generateHash(timestamp, publicKey, privateKey)
