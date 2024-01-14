import React from 'react'

type Book = {
    id: number,
    name: string,
    type: string,
    available: boolean;
}
async function getBook() {
    const response = await fetch("https://simple-books-api.glitch.me/books");
    const data = response.json();
    return data;
}

export default async function staticPage() {
   const books = await getBook();

  return (
    <div>
        <h1>Static page</h1>
        {books.map((book: Book) => 
            <ul key={book.id}>
                <li>
                    {book.name} - {book.type}
                </li> 
            </ul>

        )}
    </div>

  )

}
 