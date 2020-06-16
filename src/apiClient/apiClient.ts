import axios, { AxiosResponse } from 'axios';
import * as t from 'io-ts';
import { Errors } from 'io-ts';
import { Movie } from './movie';
import * as TE from 'fp-ts/lib/TaskEither';
import { flow, pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';

const axiosGetMovie = (name: string): Promise<AxiosResponse> => {
    return axios.get(`http://www.omdbapi.com/?t=${name}&apikey=c6de08a3`)
}

const errorsHandler = (errors: Errors): Error => {
    return new Error('error happend');
}

const decodeWith = <T>(decoder: t.Decoder<unknown, T>) => {
    return flow(
        decoder.decode,
        E.mapLeft(errorsHandler)
    )
};

export const getMovie = (name: string): TE.TaskEither<Error, Movie> => {
    // hint: use axiosGetMovie and Movie.decode
    // hint: TE.tryCatch
    return pipe(
        TE.tryCatch<Error, AxiosResponse>(
            () => axiosGetMovie(name), e => new Error(String(e))),
        TE.map(resp => resp.data)

    );
};
