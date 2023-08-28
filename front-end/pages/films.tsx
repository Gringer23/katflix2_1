import {GetStaticProps, NextPage} from "next";
import {IFilm} from "@/types/film.interface";
import {FilmService} from "@/services/film.service";
import Films from "@/components/pages/Films/Films";

const FilmsPage: NextPage<{films: IFilm[]}> = ({films}) => {
    return <Films films={films}/>
}

export const getStaticProps: GetStaticProps = async () => {
    try{
        const {data: Films} = await FilmService.getAll()
        const films = Films.filter(film =>
        film.type === 'film'
        )
        return {
            props: {
                films
            }
        }
    } catch (e){
        return {
            props: {
                films: []
            }
        }
    }
}

export default FilmsPage