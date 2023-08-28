import {GetStaticProps, NextPage} from "next";
import {IFilm} from "@/types/film.interface";
import Popular from "@/components/pages/popular/Popular";
import {FilmService} from "@/services/film.service";

const PopularPage: NextPage<{topFilms: IFilm[]}> = ({topFilms}) => {
    return <Popular topFilms={topFilms}/>
}

export const getStaticProps: GetStaticProps = async () => {
    try{
        const {data: topFilms} = await FilmService.getMostPopular()

        return {
            props: {
                topFilms
            },
            revalidate: 60
        }
    } catch (e){
        return {
            props: {
                topFilms: []
            }
        }
    }
}

export default PopularPage