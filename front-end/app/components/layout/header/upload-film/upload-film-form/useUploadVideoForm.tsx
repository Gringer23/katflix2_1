import {SubmitHandler, useForm} from "react-hook-form";
import {IFilmDto} from "@/types/film.interface";
import {filmApi} from "@/store/api/film.api";
import {useState} from "react";
import {IMediaResponse} from "@/services/media/media.interface";

interface IUseUploadVideoForm {
    handleCloseModal: () => void
    filmId: number
}

export const useUploadVideoForm = ({
    handleCloseModal,
    filmId
}: IUseUploadVideoForm) => {
    const {
        register,
        formState: {errors},
        control,
        handleSubmit,
        watch,
        setValue,
        reset
    } = useForm<IFilmDto>({
        mode: 'onChange'
    })

    const [updateVideo, { isSuccess}] = filmApi.useUpdateFilmMutation()

    const onSubmit: SubmitHandler<IFilmDto> = data => {
        updateVideo({ ...data, id: filmId})
            .unwrap()
            .then(() => {
                handleCloseModal()
                reset()
            })
    }

    const videoPath = watch('videoPath');
    const thumbnailPath = watch('thumbnailPath');
    const [fileName, setFileName] = useState('');

    const handleUploadVideo = (value: IMediaResponse) => {
        setValue('videoPath', value.url)
        setValue('name', value.name)
        setFileName(value.name)
    }

    const [isChoosen, setIsChoosen] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false)
    const [percent, setPercent] = useState(0);
    const setProgressPercentage = (val: number) => {
        setPercent(val)
        if(val === 100) setIsUploaded(true)

    }

    return{
        form:{
            register,
            errors,
            control,
            handleSubmit,
            onSubmit
        },
        media: {
            videoPath,
            thumbnailPath,
            fileName,
            handleUploadVideo
        },
        status: {
            isSuccess,
            isChoosen,
            setIsChoosen,
            percent,
            isUploaded,
            setProgressPercentage
        }
    }
}