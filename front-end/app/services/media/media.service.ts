import {axiosClassic} from "../../api/axios";
import {IMediaResponse} from "@/services/media/media.interface";

export const MediaService = {
    async upload(media: FormData, folder?: string, setValue?: (val: number) => void){
        return axiosClassic.post<IMediaResponse>('/media', media, {
            params: {folder},
            headers: { 'Content-Type': 'multipart/form-data'},
            onUploadProgress: progressEvent => {
                if(setValue){
                    // @ts-ignore
                    const progress = (progressEvent.loaded / progressEvent.total) * 100
                    setValue(Math.ceil(progress))
                }
            }
        })
    }
}