import React, {FC, useEffect} from "react";
import logo from "../cat-logo.svg";
import {Link} from "react-router-dom";
import {getCategories} from "../helpers/api";
import {useDispatch} from "react-redux";
import {setCategories} from '../store'

interface HomepageProps {

}

const Homepage: FC<HomepageProps> = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getCategories().then(res => {
            // @ts-ignore
            dispatch(setCategories(res.data))
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Let start find your pretty cat from list of cats</p>

                <Link
                    to={'/CatsPage'}
                >
                    Click and start finding!
                </Link>
            </header>
        </div>
    )
}
export default Homepage;