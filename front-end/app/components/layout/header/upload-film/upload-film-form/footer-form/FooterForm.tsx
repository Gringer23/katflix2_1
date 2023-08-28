import {FC} from "react";

import {MdCheckCircle, MdUpload} from "react-icons/md";
import Button from "@/components/UI/button/Button";

const FooterForm: FC<{percent: number; isUploaded: boolean}> = ({percent, isUploaded}) => {
    return(
        <div >
            <div>
                <MdUpload/>
                <MdCheckCircle />
                <span>
                    {isUploaded ? 'Фильм загружен' : `Загрузка ${percent}%...`}
                </span>
            </div>
            <div>
                <Button>Сохранить</Button>
            </div>
        </div>

    )
};

export default FooterForm;