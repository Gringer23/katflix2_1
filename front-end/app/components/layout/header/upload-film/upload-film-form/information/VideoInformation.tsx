import {FC} from "react";

import styles from './VideoInformation.module.scss'
import Image from "next/image";
import Link from "next/link";

interface IVideoInformation {
    thumbnailPath?: string;
    filmId: number;
    fileName: string;
    isUploaded: boolean;
}

export const VideoInformation: FC<IVideoInformation> = ({
    filmId,
    thumbnailPath,
    fileName,
    isUploaded
}) => {
    return (
        <div className={styles.info}>
            {!thumbnailPath ? (
                <div className={styles.thumbnail}>
                    {!isUploaded
                    ? 'Идет загрузка фильма...'
                    : 'Нужно загрузить постер'}
                </div>
            ) : (
                <Image
                    src={thumbnailPath}
                    width={344}
                    height={190}
                    alt={''}
                    layout='responsive'
                />
            )}
            <div className={styles.details}>
                <div>
                    <span>Ссылка на фильм</span>
                    <span>
                        <Link href={`/v/${filmId}`}>
                            <span>http://local/v/{filmId}</span>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Имя файла</span>
                    <span>{fileName}</span>
                </div>
            </div>
        </div>
    )
}