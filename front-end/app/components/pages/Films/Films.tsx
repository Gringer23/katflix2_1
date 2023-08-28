import React, {FC} from 'react'
import {IFilm} from "@/types/film.interface";
import Layout from "@/components/layout/Layout";
import Catalog from "@/components/pages/catalog/Catalog";

const Films:FC<{films: IFilm[]}> = ({films}) => {

    return (
        <Layout title={'Фильмы'}>
            <Catalog newVideo={films} title={'Фильмы'}/>
        </Layout>
    )
}

export default Films
