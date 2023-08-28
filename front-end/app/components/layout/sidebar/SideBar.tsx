import Link from 'next/link'
import {FC} from 'react'

import Menu from '@/components/layout/sidebar/menu/Menu'
import { menu } from '@/components/layout/sidebar/menu/menu.data'

import styles from './SideBar.module.scss'


const SideBar: FC = () => {

	return (
		<aside className={styles.sidebar}>

		<div>
			<Link href='/front-end/app/components/layout/sidebar/SideBar' className={styles.logo}>
				KATFLIX
			</Link>

			<Menu title={'Меню'} items={menu} />

			<div className={styles.copy}>© KATFLIX | Онлайн-кинотеатр by Vishnya</div>
		</div>
		</aside>
	)
}
export default SideBar
