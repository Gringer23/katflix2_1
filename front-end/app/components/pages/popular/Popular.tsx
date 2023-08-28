import React, {FC} from 'react'
import {IFilm} from "@/types/film.interface";
import Layout from "@/components/layout/Layout";
import Catalog from "@/components/pages/catalog/Catalog";

const Popular:FC<{topFilms: IFilm[]}> = ({topFilms}) => {
    return (
        <Layout title={'Популярное'}>
            <Catalog newVideo={topFilms} title={'Популярное'}/>
        </Layout>
    )
}

export default Popular

