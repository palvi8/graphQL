const data = {
    authors: [
        {id: "1", name: "name1", bookIds:["101", "102"]},
        {id: "2", name: "name2", bookIds:["103"]}
    ],
    books: [
        {id: "101", title: "Book1", publishedYear: "2000", authorId: "1"},
        {id: "102", title: "Book2", publishedYear: "2001", authorId: "2"},
        {id: "103", title: "Book3", publishedYear: "2002", authorId: "1"}
    ]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(author => author.id === parent.authorId)
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id))
        }
    },
    Query: {
        books: () => {
            return data.books
        },
        authors: () => {
            return data.authors
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const newRecord = {...args, id: data.books.length+1};
            data.books.push(newRecord);
            return newRecord
        }
    }
}