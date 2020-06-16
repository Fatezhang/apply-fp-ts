import * as t from 'io-ts';

// define movie type from http://www.omdbapi.com/
/**
 * {
    "Title": "Wind",
    "Year": "1992",
    "Rated": "PG-13",
    "Released": "11 Sep 1992",
    "Runtime": "126 min",
    "Genre": "Action, Drama, Sport",
    "Director": "Carroll Ballard",
    "Writer": "Jeff Benjamin (story), Roger Vaughan (story), Kimball Livingston (story), Rudy Wurlitzer (screenplay), Mac Gudgeon (screenplay)",
    "Actors": "Matthew Modine, Jennifer Grey, Cliff Robertson, Jack Thompson",
    "Plot": "Will Parker, played by Matthew Modine, loses the Americas Cup, the worlds biggest sailing prize, to the Australians and decides to form his own syndicate to win it back.",
    "Language": "English",
    "Country": "USA, Japan",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTIyYmI0NDktYTdlZS00MTVlLTkyZDItYzVmYzVmMzE3YTJhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "50%"
        },
        {
            "Source": "Metacritic",
            "Value": "57/100"
        }
    ],
    "Metascore": "57",
    "imdbRating": "6.5",
    "imdbVotes": "2,372",
    "imdbID": "tt0105824",
    "Type": "movie",
    "DVD": "11 Mar 2003",
    "BoxOffice": "N/A",
    "Production": "Sony Pictures Home Entertainment",
    "Website": "N/A",
    "Response": "True"
}
 */

export const Movie = t.type({
        Title: t.string,
        imdbRating: t.string
});
export type Movie = t.TypeOf<typeof Movie>;
