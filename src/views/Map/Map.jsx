import React, { useContext, useRef, useEffect, useState } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Redirect } from 'react-router'
import { AuthContext } from '../../context/authContext'
import './Map.css'

import Button from '../../components/Button/Button'

const Karte = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWVvbnl1b25taWxsZXIiLCJhIjoiY2phMTIybmNsMjFjeTMzbGdpcGdiM3J6ayJ9.FmtdgLWmMf4vgsagMsk-JQ'
});

const Map = () => {
    const { user, logout } = useContext(AuthContext);
    console.log("something", user);

    return ( 
        <>
            <div className="topnav">
                <Button text="Leave note" />
                <h3>Explore</h3>
                <Button onClick={logout} text="Logout"/>
            </div>
            <div id="map">
                <Karte style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{ height: '100%', width: '100%', borderRadius: '20px' }}>
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[31.00, 51.3233379650232]} zoom={20} />
                    </Layer>
                </Karte>;
            </div>
        </>
    )
}

export default Map
