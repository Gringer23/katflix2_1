import React, {FC} from 'react'
import {filmApi} from "@/store/api/film.api";
import Layout from "@/components/layout/Layout";
import Catalog from "@/components/pages/catalog/Catalog";

import {IFilm} from "@/types/film.interface";
import {api} from "@/store/api/api";
import {PulseLoader} from "react-spinners";

const Studio:FC<{films: IFilm[]}> = ({films}) => {
    const { isLoading } = api.useGetProfileQuery(
        null
    );
    const [removeFilm] = filmApi.useDeleteFilmMutation();

    return (
        <Layout title={'Студия создания фильмов'}>
            <div>
                {
                    isLoading ? (
                        <PulseLoader
                            loading={isLoading}
                            color={'#c62e21'}
                            style={{ position: 'absolute', top: '40%', left: '48%' }}
                        />
                        ):
                    films?.length ?
                        <Catalog newVideo={films} removeHandler={removeFilm} isUpdateLink/> :
                        <div>Видео не найдено</div>
                }
            </div>
        </Layout>
    )
}

export default Studio
