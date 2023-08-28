import {FC} from "react";
import {useUploadVideoForm} from "@/components/layout/header/upload-film/upload-film-form/useUploadVideoForm";
import SuccessMessage from "@/components/layout/header/upload-film/upload-film-form/SuccessMessage";
import Field from "@/components/UI/field/Field";
import TextArea from "@/components/UI/text-area/TextArea";
import {Controller} from 'react-hook-form';
import {IMediaResponse} from "@/services/media/media.interface";
import UploadField from "@/components/UI/upload-field/UploadField";
import {VideoInformation} from "@/components/layout/header/upload-film/upload-film-form/information/VideoInformation";
import FooterForm from "@/components/layout/header/upload-film/upload-film-form/footer-form/FooterForm";

import styles from '../UploadFilm.module.scss';

const UploadFilmForm: FC<{filmId: number, handleCloseModal: () => void}> = ({filmId, handleCloseModal}) => {
    const { form, status, media} = useUploadVideoForm({
        filmId,
        handleCloseModal
    })

    return (
        <form
            onSubmit={form.handleSubmit(form.onSubmit)}
            className='flex flex-wrap'
        >
            {status.isSuccess && <SuccessMessage/>}
            {status.isChoosen ? (
                <>
                    <div className='w-7/12 pr-6 pt-3'>
                        <Field
                            {...form?.register('name', {
                            required: 'Название обязательно!'
                            })}
                            placeholder='Название'
                            error={form?.errors?.name}
                            />
                        <TextArea
                            {...form?.register("description", {
                                required: 'Описание обязательно!'
                            })}
                            placeholder='Описание'
                            error={form?.errors?.description}
                        />
                        <div className='mt-8'>
                           <Controller
                               control={form.control}
                               name='thumbnailPath'
                               render={(field: {onChange}) => {
                                   <UploadField
                                       folder='films_thumbnail'
                                       onChange={(value: IMediaResponse) => {
                                       field.onChange(value.url)}
                                       }
                                       />
                               }}
                           />
                        </div>
                    </div>
                    <div className={'w-5/12 p-3 pl-10'}>
                        <VideoInformation
                            filmId={filmId}
                            fileName={media.fileName}
                            isUploaded={status.isUploaded}
                            thumbnailPath={media.thumbnailPath}
                        />
                    </div>

                    <FooterForm percent={status.percent} isUploaded={status.isUploaded}/>
                </>
            ): (
                <div className={styles.uploadScreen}>
                            <UploadField
                                title={'Сначала загрузи фильм'}
                                folder={'films_video'}
                                onChange={media.handleUploadVideo}
                                setIsChosen={status.setIsChoosen}
                                setValue={status.setProgressPercentage}
                            />
                </div>
            )}
        </form>
    )
}

export default UploadFilmForm;