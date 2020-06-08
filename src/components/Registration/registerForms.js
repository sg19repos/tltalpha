import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import "./registrationStyles.css";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

const GreenCheckbox = withStyles({
    root: {
        color: "#389242"[400],
        "&$checked": {
            color: green[600]
        }
    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function RegisterForm() {
    const [state, setState] = React.useState({
        checkedG: false
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    className="registration-input"
                    label="FIRST NAME"
                    id="standard-size-small"
                    size="small"
                    inputProps={{
                        maxLength: 10
                    }}
                    required
                />
                <TextField
                    className="registration-input"
                    label="FAMILY NAME"
                    id="standard-size-small"
                    size="small"
                    inputProps={{
                        maxLength: 10
                    }}
                    required
                />
            </div>
            <div>
                <TextField
                    className="registration-input"
                    label="EMAIL ADDRESS"
                    id="standard-size-small"
                    size="small"
                    type="email"
                    inputProps={{
                        maxLength: 30
                    }}
                    required
                />
            </div>
            <div>
                <TextField
                    className="registration-input"
                    label="PASSWORD"
                    id="standard-size-small"
                    size="small"
                    type="password"
                    inputProps={{
                        maxLength: 10
                    }}
                    required
                />
                <TextField
                    className="registration-input"
                    label="CONFIRM PASSWORD"
                    id="standard-size-small"
                    size="small"
                    type="password"
                    inputProps={{
                        maxLength: 10
                    }}
                    required
                />
                <FormControlLabel
                    className="register-green-checkbox"
                    control={
                        <GreenCheckbox
                            checked={state.checkedG}
                            onChange={handleChange("checkedG")}
                            value="checkedG"
                        />
                    }
                    label="Subscribe to our newsletter"
                />
                <Button className="register-btn" variant="contained">
                    Register
                </Button>
            </div>
        </form>
    );
}
