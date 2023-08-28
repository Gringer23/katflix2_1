import {FC} from 'react'

import styles from './Catalog.module.scss'
import {IFilm} from "@/types/film.interface";
import VideoItemCatalog from "@/components/UI/video-item/VideoItemCatalog";

const Catalog: FC<{newVideo: IFilm[], title?: string, isUpdateLink?: boolean, removeHandler?: (filmId: number) => void}> = ({newVideo, title, isUpdateLink, removeHandler}) => {
	return (
		<div className={styles.recommended}>
			<div className={styles.top_block}>
				<h2>{title}</h2>
			</div>

			<div className={styles.catalog}>
				{
					newVideo.map(video => (
						<VideoItemCatalog item={video} key={video.id} removeHandler={removeHandler}/>
					))
				}
			</div>
		</div>
	)

}
export default Catalog
