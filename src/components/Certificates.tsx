import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Certificates(){
    return(
        <div className="container overflow-hidden text-center">
            <div className="row gy-5">
                <div className="col-6">
                    <div className="p-3">
                        Tu będzie jeden certyfikat
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3">
                        A tutaj kolejny
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3">
                        I tu jeszcze jeden
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3">
                        ale dopiero jak się nauczę obsługiwać bibliotekę react-pdf
                    </div>
                </div>
            </div>
        </div>
    )
}
