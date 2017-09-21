const getPrescriptions = (db) => {
  return db('prescriptions')
    .select('*')
}

module.exports = {
  getPrescriptions
}
