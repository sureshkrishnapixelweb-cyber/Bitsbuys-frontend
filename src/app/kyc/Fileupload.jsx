import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState({ file1: null, file2: null });

    const handleDrop = (e, field) => {
        e.preventDefault();

        const file = e.dataTransfer.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedFiles((prevFiles) => ({
                    ...prevFiles,
                    [field]: { file, preview: reader.result },
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e, field) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedFiles((prevFiles) => ({
                    ...prevFiles,
                    [field]: { file, preview: reader.result },
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Col lg="6">
                <div className='form-group'>
                    <Form.Label>ID Front Document</Form.Label>
                    <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                        <label htmlFor="fileInput1" style={{ cursor: 'pointer' }}>
                            <p>Click or drag and drop a file here</p>
                            <input
                                type="file"
                                id="fileInput1"
                                onChange={(e) => handleFileInputChange(e, 'file1')}
                                style={{ display: 'none' }}
                            />
                        </label>
                        {selectedFiles.file1 && (
                            <div>
                                <p>{selectedFiles.file1.file.name}</p>
                                <img
                                    src={selectedFiles.file1.preview}
                                    alt="File 1 Preview"
                                    style={{ maxWidth: '100%', maxHeight: '140px' }}
                                />
                            </div>
                        )}
                    </div>
                    <p className="t-red m-0"><small>(Maximum file upload size: 10M)</small></p>
                </div>
            </Col>
            <Col lg="6">
                <div className='form-group'>
                    <Form.Label>ID Back Document</Form.Label>
                    <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file2')} onDragOver={handleDragOver}>
                        <label htmlFor="fileInput2" style={{ cursor: 'pointer' }}>
                            <p>Click or drag and drop a file here</p>
                            <input
                                type="file"
                                id="fileInput2"
                                onChange={(e) => handleFileInputChange(e, 'file2')}
                                style={{ display: 'none' }}
                            />
                        </label>
                        {selectedFiles.file2 && (
                            <div>
                                <p>{selectedFiles.file2.file.name}</p>
                                <img
                                    src={selectedFiles.file2.preview}
                                    alt="File 2 Preview"
                                    style={{ maxWidth: '100%', maxHeight: '140px' }}
                                />
                            </div>
                        )}
                    </div>
                    <p className="t-red m-0"><small>(Maximum file upload size: 10M)</small></p>
                </div>
            </Col>
        </>
    );
};

export default FileUpload;
