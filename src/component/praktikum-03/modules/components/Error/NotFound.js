import { Link } from "react-router-dom";
import React, { Component } from 'react'


export default function NotFound() {
    return (
        <div className="container">
            <div className="bg-white m-auto">
                <h1>Error 404</h1>
                <div className="d-flex">
                    <div className="col">
                        <h2>Oops... The page you searching for is not found :( </h2>
                        <p className="fs-3">Make sure you type correctly</p>
                        Click <Link to="/home">here</Link> to access the home page.
                    </div>
                </div>
            </div>
        </div>
    )
}