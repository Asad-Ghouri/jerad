'use client';
import React, { useState, useRef } from 'react';

const AnalyzerMain = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log("File selected:", file.name);
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div style={{backgroundColor: 'white', margin: 40}}>
            <div className="row-5mo">
                <div className="col-65b">
                    <div> <b> Upload your CV (résumé)</b> </div>
                    <div className="noC-nw6"> {selectedFile ? selectedFile.name : 'NO CVS UPLOADED YET'} </div>

                    <p className="text-3aq">To get the most out of our platform, uploading your CV is important. Here's why:<br/> </p>
                    <ul>
                        <li><b>Automate your applications</b> by having your CV automatically attached to emails sent to companies.</li>
                        <li><b>Apply directly</b> to online forms effortlessly.</li>
                        <li><b>Get better job matches</b> tailored to your experience and skills.</li>
                    </ul>
                    <p></p>
                </div>
            </div>
            <div className="row-5mo">
                <div className="col-65b">
                    <div className="box-hk9 row-5mo">
                        <div className="col-65b style-fdNep" id="style-fdNep"> Drop your file here, or upload one from your device. </div>
                        <button type="button" className="btn-cfz btn-rpr btn-72z theme--9oj fa-9yx" onClick={handleClick}>
                            <span className="content-y44">Select a PDF or Word file</span>
                        </button>
                    </div>
                    <input type="file" id="cvU-67e" name="cvUpload" className="style-hkeR2" onChange={handleFileSelect} ref={fileInputRef} style={{ display: 'none' }} />
                </div>
            </div>
            <div className="container-vyb"></div>
        </div>
    );
};

export default AnalyzerMain;
