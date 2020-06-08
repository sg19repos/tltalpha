import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./loginStyles.css";

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

export default function LoginForm() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedG: false
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    className="login-input"
                    label="EMAIL ADDRESS"
                    id="standard-size-small"
                    size="small"
                    type="email"
                    inputProps={{
                        maxLength: 30
                    }}
                />
                <TextField
                    className="login-input"
                    label="PASSWORD"
                    id="standard-size-small"
                    size="small"
                    type="password"
                    inputProps={{
                        maxLength: 10
                    }}
                />
                <FormControlLabel
                    className="login-green-checkbox"
                    control={
                        <GreenCheckbox
                            checked={state.checkedG}
                            onChange={handleChange("checkedG")}
                            value="checkedG"
                        />
                    }
                    label="Keep me logged in"
                />
                <Button className="login-btn" variant="contained">
                    <Link
                        to="/Dashboard"
                        style={{ textDecoration: "none", color: "#fff" }}
                    >
                        Login
                    </Link>
                </Button>
                <a className="forgot-password" href="SignIn">
                    Forgot your password?
                </a>
            </div>
        </form>
    );
}
