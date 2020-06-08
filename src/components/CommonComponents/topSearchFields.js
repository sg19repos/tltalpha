import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import "./topSearchStyles.css";

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 12,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    }
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function TopSearchFields() {
    const classes = useStyles();
    const [appliance, setAppliance] = React.useState("");
    const [retailer, setRetailer] = React.useState("");
    const handleChange = event => {
        console.log(event.target.value)
        // setAge(event.target.value);
    };
    const handleRetailerChange = event => {
        setRetailer(event.target.value);
    };
    const handleApplianceChange = event => {
        setAppliance(event.target.value)
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">
                    By Retailer
                </InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={retailer}
                    onChange={handleRetailerChange}
                    input={<BootstrapInput />}
                >
                    <option value="">By Retailer</option>
                    <option value="Abed Tahan">Abed Tahan</option>
                    <option value="Aghasarkissian">Aghasarkissian</option>
                    <option value="Bey Tech">Bey Tech</option>
                    <option value="Khoury Home">Khoury Home</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">
                    By Appliance
                </InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={appliance}
                    onChange={handleApplianceChange}
                    input={<BootstrapInput />}
                >
                    <option value="">By Appliance</option>
                    <option value="Refrigerator-Freezer">Refrigerator-Freezer</option>
                    <option value="Washer-Dryer">Washer-Dryer</option>
                    <option value="Oven">Oven</option>
                    <option value="Dishwasher">Dishwasher</option>
                    <option value="Air Conditioning">Air Conditioning</option>
                </NativeSelect>
            </FormControl>
            {/* <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-textbox">
                    Search
                </InputLabel>
                <BootstrapInput id="demo-customized-textbox" />
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                >
                    <SearchIcon className="searchIcon" />
                </IconButton>
            </FormControl> */}
        </div>
    );
}
