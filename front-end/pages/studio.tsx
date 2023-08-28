import { NextPageAuth } from '@/providers/private-route.interface'
import Studio from "@/components/pages/Studio";
import {IFilm} from "@/types/film.interface";
import {GetStaticProps} from "next";
import {FilmService} from "@/services/film.service";


const StudioPage: NextPageAuth<{film: IFilm[]}> = ({film}) => {
	return <Studio films={film}/>
}

StudioPage.isOnlyUser = true

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: film } = await FilmService.getAll()
		return {
			props: {
				film,
			}
		}
	} catch (e) {
		return {
			props: {
				film: [],
			}
		}
	}
}
export default StudioPage
