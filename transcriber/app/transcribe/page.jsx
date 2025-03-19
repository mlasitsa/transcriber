"use client"

import React, { useEffect } from "react";
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload"; 

const Transcribe = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]); 

  const handleFileUploadChange = (newFiles) => {
    setUploadedFiles(newFiles);
  };

  useEffect(() => {
    console.log(uploadedFiles)
  },[uploadedFiles])

  return (
    <div className="p-10">
      <h2 className="text-lg font-semibold mb-4">File Upload Component</h2>

      <FileUpload onChange={handleFileUploadChange} /> 
      
      <div className="mt-4">
        <h3 className="text-md font-medium">Uploaded Files:</h3>
        <ul>
          {uploadedFiles.length >= 1 ? (
              <li key={uploadedFiles.length}>
                <span>{uploadedFiles[0].name}</span> - <span>{(uploadedFiles[0].size / (1024 * 1024)).toFixed(2)} MB</span>
              </li>
            
          ) : (
            <p>No file uploaded yet.</p>
          )}
        </ul>
      </div>
    </div>
  ) 
}

export default Transcribe




