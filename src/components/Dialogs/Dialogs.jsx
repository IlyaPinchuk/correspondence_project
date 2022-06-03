import React from "react";
import classes from "./Dialogs.module.scss";
import DialogsItems from "./DialogItems/DialogsItems";
import Massage from "./Massage/Massage";

const Dialogs = () => {
    return (
        <div className={classes.wrapperDialogs}>
            <div className={classes.dialog}>
            <div className={classes.dialogs}>
              <DialogsItems name='Jack'/>
              <DialogsItems name='Helen'/>
              <DialogsItems name='Olga'/>
              <DialogsItems name='Yacubovich'/>
              <DialogsItems name='Obivan K'/>
            </div>
            <div className={classes.massages}>
                <Massage massage='Hi'/>
                <Massage massage='GG,WP'/>
                <Massage massage='How are you'/>
                <Massage massage='U a crazy'/>
                <Massage massage='Whats up man?'/>
            </div>
            </div>
        </div>
    )
}
export default Dialogs