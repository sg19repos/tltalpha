import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Email", "goutam@trueleaftech.com"),
    createData("Father's Name", "test"),
    createData("Type of ID", "ID1"),
    createData("Phone No.", "987-56-321458"),
    createData("Age Category", "25 - 54 Years"),
    createData("Family Name", "Haldar"),
    createData("Gender", "M"),
    createData("Address", "Beirut"),
    createData("Quiz score", 0)
];

export default function ProfileBottom() {
    const classes = useStyles();

    return (
        <div className="profile-bottom-section">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
