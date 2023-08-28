import {FC} from "react";
import {PulseLoader} from "react-spinners";
import Layout from "@/components/layout/Layout";
import {api} from "@/store/api/api";
import style from './Favorite.module.scss';
import VideoItemCatalog from "@/components/UI/video-item/VideoItemCatalog";


const Favorite:FC = () => {
    const { data, isLoading } = api.useGetProfileQuery(
       null
    )

    if (isLoading)
        return (
            <PulseLoader
                loading={isLoading}
                color={'#c62e21'}
                style={{ position: 'absolute', top: '40%', left: '48%' }}
            />
        )

    return(
        <Layout title={'Избранное'}>
            <div className={style.favorite}>
                <div className={style.top_block}>
                <h2>Избранное</h2>
                </div>
                <div className={style.catalog}>
                    {
                        data?.favorite.length !== 0 ?
                            data?.favorite.map(({ favoriteFilm }) =>
                                <VideoItemCatalog item={favoriteFilm} key={favoriteFilm.id}/>
                            )
                            : <span className={style.notFav}>Вы пока ничего не добавили в избранное...</span>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Favorite;