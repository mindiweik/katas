export class PaginationHelper {
  private collection: unknown[]
  private itemsPerPage: number

  constructor(collection: unknown[], itemsPerPage: number) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
  }

  itemCount() {
    return this.collection.length
  }

  pageCount() {
    return this.collection.length === 0 ? 0 : Math.ceil(this.collection.length / this.itemsPerPage)
  }

  pageItemCount(pageIndex: number) {
    let items = 0
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1
    } else if (pageIndex === this.pageCount() - 1) {
      items = this.collection.length % this.itemsPerPage
    }
    return items === 0 ? this.itemsPerPage : items
  }

  pageIndex(itemIndex: number) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1
    } else {
      return Math.floor(itemIndex / this.itemsPerPage)
    }
  }
}