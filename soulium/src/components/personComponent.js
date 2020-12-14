import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
    square: {
      backgroundColor: red[50],
      height: "50px",
      width: "50px",
      textAlign: "center",
      fontSize: "14px",
      color: red[300],
      margin: "auto"
    }
  }));

export default function personComponent() {
    
    let url ="https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    let classes = styles();


    return (
        <div
            style={{
            height: "230px",
            width: "250px",
            backgroundImage: `url(${url})`,
            backgroundSize:"100%"
            }}
            className="mx-auto mt-2 border border-dark rounded text-white"
        >
            <div className="jumbotron w-100 text-center">
                <p className="mx-auto my-5 w-100">15.06.1939 - 21.08.2011</p>
                <br />
                <p className="w-100 mb-2 mx-auto">
                    <strong>Some name</strong>
                </p>
                <br />
                <Avatar variant="square" className={classes.square}>
                    <p className="m-auto">
                    <strong>68 Y old</strong>
                    </p>
                </Avatar>
            </div>
        </div>
    )
}
