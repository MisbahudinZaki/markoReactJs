import React from "react";

function ModalVideoSection(){
    return(
        <>
            <div className="section p-0">
                <div id="modal-overlay" className="modal-overlay">
                    <span className="my-close">
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    <div className="my-modal">
                        <iframe id="my-video-frame" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalVideoSection;