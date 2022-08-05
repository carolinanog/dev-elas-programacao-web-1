class ProductsDAO {
  constructor (conn) {
    this.db = conn;
  }

  findAll(callback) {
    this.db.all(`SELECT * FROM products`, callback);
  }

  findById(id, callback) {
    this.db.get(`SELECT * FROM products WHERE id = ?`, id, callback);
  }
}

module.exports = (conn) => {
  return new ProductsDAO(conn);
};