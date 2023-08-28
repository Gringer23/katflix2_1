import {Dispatch, SetStateAction} from "react";

export interface IUploadFilm {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    filmId: number
}