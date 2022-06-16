import classes from "./ProfileStatus.module.scss";
import Input from "../../../common/Input/Input";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../Redux/action";


const ProfileStatus = (props) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status);
    }, [props.status])

    const deactivateMode = () => {
        setEditMode(false);
        dispatch(updateStatus(status));
    }

    return (
        <div>
            {!editMode &&
                <div className={classes.AboutMe}>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <Input value={status} onChange={e => setStatus(e.currentTarget.value)} onBlur={deactivateMode} />
                </div>
            }
        </div>
    )
}
export default ProfileStatus;