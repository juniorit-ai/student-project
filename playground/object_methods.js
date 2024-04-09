let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    summary: function() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book.summary());