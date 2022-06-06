import React, { Fragment } from 'react';
import Link from 'next/link';

const LogoImage = ({ logo, logoImage }) => {
    return (
        <Fragment>
            <Link href={'/'} >
                <a>
                    <img src={logoImage ? logoImage : '/assets/images/icon/logo.png'} alt="" className="img-fluid" />
                </a>
            </Link>
        </Fragment>
    )
}

export default LogoImage;