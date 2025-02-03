const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];

// 1. sort by movies by rating

const sortByRating = movies.sort((a,b) => b.rating - a.rating)
console.log("Movies by highest Rating:",sortByRating)

// 2. find move by title
const findMovie = (title) => {
    const movie = movies.find(movie => movie.title === title );
    return movie ? movie : `movie ${title} is not found`
}

console.log(findMovie('Titanic'))

// 3. movies having rating greater than 8 

const highRatedMovie = movies.filter(movie => movie.rating > 8);
console.log(`Movies with rating greater then 8:`,highRatedMovie); 

// 4. list all the movie title

const movieTitle = movies.map(movie => movie.title)
console.log(`All movie title: ${movieTitle}\n`)

// 5. Count Movies in a Specific Genre

const countMovie = (genre) => {
    return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()).length;
};

console.log(`Number of Sci-Fi movies: ${countMovie('Sci-Fi')}\n`);

// 6. Check if All Movies Are Rated Above 7

const moviesAbove7 = movies.every(movie => movie.rating > 7)
console.log(`All movies rated above 7: ${moviesAbove7}\n`)

// 7. Get Movies Released After 2000

const movieAfter2000 = movies.filter(movie => movie.releaseYear > 2000);
console.log(`Movies released After 2000\n`, movieAfter2000)