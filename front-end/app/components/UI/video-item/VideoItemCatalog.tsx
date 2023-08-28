import {FC} from "react";

import styles from './VideoItemCatalog.module.scss'
import Link from "next/link";
import {IVideoItem} from "@/components/UI/video-item/videoItem.interface";
import {BiTrash} from "react-icons/bi";

const APP = 'http://localhost:3000'
const VideoItemCatalog:FC<IVideoItem> = ({removeHandler, item, isUpdateLink}) => {

    return(
          <>
          <div className={styles.film}>
              {
                  !!removeHandler && (
                      <button
                      className={'absolute bottom-3 right-3 z-10'}
                      onClick={() => removeHandler(item.id)}
                      >
                          <BiTrash className={'text-lg text-red-700'}/>
                      </button>
                  )
              }
              <Link href={`/v/${item?.id}`}>
              <div className={styles.thumbnail}>
                  {item?.thumbnailPath && (
                      <div
                          style={{
                              backgroundImage: `url(${APP + item?.thumbnailPath})`
                          }}
                          className={styles.bg_image}
                      />
                  )}
                  <div className={styles.information}>
                      <img src={item?.namePoster} alt={item?.name} width='125' />
                  </div>
              </div>
              </Link>
          </div>
          </>
        )

}

export default VideoItemCatalog