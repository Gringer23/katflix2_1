import { FC } from 'react'

import VideoItem from '@/components/UI/video-item/VideoItem'
import { useSearch } from '@/components/layout/header/search/useSearch'

import styles from './Search.module.scss'
import {useOutside} from "@/hooks/useOutside";

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();
	const { isShow, setIsShow, ref } = useOutside(false);
	return (
		<div className={styles.search_top} ref={ref} onClick={() => setIsShow(!isShow)}>
			<label>
				<input
					type='text'
					placeholder='Я ищу...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<img src='/img/common/search.svg' alt='' />
			</label>
			{isSuccess && isShow && (
				<div className={styles.result}>
					{ data?.length ? (
						data.map(film =>
							<div className={styles.result_film}>
							<VideoItem isSmall item={film} key={film.id} />
							</div>
						)
					) : (
						<div className='text-white'>Ничего не нашлось</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
