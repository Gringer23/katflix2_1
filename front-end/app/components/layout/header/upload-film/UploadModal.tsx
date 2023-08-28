import {FC, Fragment} from "react";
import {IUploadFilm} from "@/components/layout/header/upload-film/uploadFilm.interface";
import {Transition, Dialog} from "@headlessui/react";

import styles from './UploadFilm.module.scss'
import UploadFilmForm from "@/components/layout/header/upload-film/upload-film-form/UploadFilmForm";

const UploadModal: FC<IUploadFilm> = ({ setIsOpen, filmId, isOpen}) => {
    const handleCloseModal = () => setIsOpen(false)
    return(
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={handleCloseModal} className={styles.modal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterForm='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveForm='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className={styles.overlay} aria-hidden='true'/>
                </Transition.Child>

                <div className={styles.wrapper}>
                    <div>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterForm='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveForm='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                            >
                            <Dialog.Panel className={styles.window}>
                                <UploadFilmForm filmId={filmId} handleCloseModal={handleCloseModal}/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

            </Dialog>
        </Transition>
    )
};

export default UploadModal;