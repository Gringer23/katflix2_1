import {FC, useState} from 'react'

import IconsRight from '@/components/layout/header/icons-right/iconsRight'
import Search from '@/components/layout/header/search/Search'

import styles from './Header.module.scss'
import {FiMenu} from "react-icons/fi";
import SideBarMobile from "@/components/layout/sidebar/sideBarMobile";

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles.header}>
			<FiMenu className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
			{
				isOpen && <SideBarMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
			}
			<Search />
			<IconsRight />

		</header>
	)
}
export default Header
