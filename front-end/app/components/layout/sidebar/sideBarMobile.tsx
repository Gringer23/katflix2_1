import {FC} from "react";
import styles from "@/components/layout/sidebar/SideBarMobile.module.scss";
import Link from "next/link";
import Menu from "@/components/layout/sidebar/menu/Menu";
import {menu} from "@/components/layout/sidebar/menu/menu.data";
import {MdClose} from "react-icons/md";
import ProfileMenu from "@/components/layout/header/profile-menu/ProfileMenu";
import UploadFilm from "@/components/layout/header/upload-film/UploadFilm";
import AuthForm from "@/components/layout/header/authForm/AuthForm";
import {useAuth} from "@/hooks/useAuth";
import {api} from "@/store/api/api";

type Props = {
    isOpen: boolean;
    setIsOpen: any;
}

const SideBarMobile: FC<Props> = ({isOpen, setIsOpen}) => {

    const { user } = useAuth();
    const { data, isLoading } = api.useGetProfileQuery(user, {
        skip: !user
    });
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <aside className={styles.sidebar}>

            <div>
                <div className={styles.sidebar__header}>
                    <Link href='/front-end/app/components/layout/sidebar/sideBarMobile' className={styles.logo}>
                        KATFLIX
                    </Link>
                    <MdClose onClick={handleClick} className={styles.sidebar__header_closeIcon}/>
                </div>

                <Menu title={'Меню'} items={menu} />

                <div className={styles.copy}>© KATFLIX | Онлайн-кинотеатр by Vishnya</div>
                <div className={styles.icons}>
                {user ? (
                    <>
                        <ProfileMenu />
                        {data?.isAdmin === true && <UploadFilm />}
                    </>
                ) : (
                    <AuthForm />
                )}
            </div>
            </div>
        </aside>
    )
}
export default SideBarMobile