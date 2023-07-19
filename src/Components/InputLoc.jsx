import { useState } from 'react'
import './inputLoc.css'
import { Link } from 'react-router-dom'

export default function InputLoc() {
    const [Location, setLocation] = useState("")
    const handelOnChange = (e) => {
        e.preventDefault();
        // console.log(Location)
        setLocation(
            e.target.value
        )
    }
    // let p = `/weather/${Location}`
    return (
        <>
            <h1><em>Welcome</em></h1>
            <h2>Check Today Weather of {Location}</h2>

            <div className="input__container input__container--variant">
                <div className="shadow__input shadow__input--variant" />
                <input
                    onChange={handelOnChange}
                    type="location"
                    name="text"
                    className="input__search input__search--variant"
                    placeholder="Enter Your Location..."
                />

                <Link to={`/weather/${Location}`}>
                    <button className="input__button__shadow input__button__shadow--variant" type='submit' >
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            height="1.5em"
                            width="13em"
                        >
                            <path
                                d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                                fillRule="evenodd"
                                fill="#FFF"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </>
    )
}
