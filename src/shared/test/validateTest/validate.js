const validate = (value) => {
  if (value < 0 || value > 100) return false
  return true
}

module.exports = validate
