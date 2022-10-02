const Books = [
    {
        id: 1,
        ISBN: '0743273567',
        title: 'LongTime',
        published: '2010',
        author: 'Leslie Chibundu',
        pages: '35',
        publisher: 'Times of England',
        genres: 'Comic relief',
        reviews: [
        ]
    }, 
    {
        id: 2,
        ISBN: '0743273892',
        title: 'LongTime',
        published: '2010',
        author: 'Leslie Chibundu',
        pages: '35',
        publisher: 'Times of England',
        genres: 'Comic relief',
    }
]

const Reviews = [
    {
        bookId: 1,
        author: 'Van-helsing ghol',
        content: 'Not Very good a book it is aye!!',
        date: `${new Date()}`                
    },
    {
        bookId: 1,
        author: 'Dan ghol',
        content: 'Not Very good a book it is aye!!',
        date: `${new Date()}`                    
    },
    {
        bookId: 2,
        author: 'Stan ghol',
        content: 'Not Very good a book it is aye!!',
        date: `${new Date()}`                
    },
    {
        bookId: 1,
        author: 'Van gholly',
        content: 'Not Very good a book it is aye!!',
        date: `${new Date()}`                    
    }
]

const resolvers = {
    Query: {
        books: () => Books,
        book: (_: any, {isbn}: {isbn: string}) => Books.find(book => book?.ISBN === isbn),
    },
    Book: {
        reviews: (_: any, { limit }: {limit: number}) => {
            if(limit > 0){
                return Reviews.filter(ele => _?.id === ele.bookId).slice(0, limit)
            }
            return Reviews.filter(ele => _?.id === ele.bookId);
        }
    }
}


export default resolvers