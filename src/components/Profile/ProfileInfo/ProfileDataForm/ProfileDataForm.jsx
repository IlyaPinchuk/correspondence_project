import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {saveProfile} from "../../Redux/action";


const ProfileData = ({goToEditMode}) => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        dispatch(saveProfile(data));
        goToEditMode();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <button type={"submit"}>save</button>
            </div>
            <div>
                <span>Full name:</span>
                <input type="text" placeholder={'Full name'}  {...register('fullName', {required: true})}/>
            </div>
            <div>
                <span>Looking for a job:</span>
                <input type="checkbox"  {...register('lookingForAJob')}/>
            </div>
            <div>
                <span>Professional sills:</span>
                <input type="text" {...register('lookingForAJobDescription', {required: true})}/>
            </div>
            <div>
                <span>About me:</span>
                <input type="text"  {...register('aboutMe', {required: true})}/>
            </div>
        </form>
    )
};
export default ProfileData;