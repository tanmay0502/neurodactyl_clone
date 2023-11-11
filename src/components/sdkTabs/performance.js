import React from 'react';
import "./tab.css"

export default function performance() {
  return (
    <div>
        <div className="featureDetails py-10 ">
            <p>All processing can be performed on CPU or GPU. In terms of cost-efficiency GPU processing outperforms CPU. Neurodactyl SDK automatically utilizes all available resources of CPU or GPU without running parallel threads. You can use batch mode on GPU for detection and extraction, and batch on CPU - for matching. Batch mode accelerates processing and provides better throughput. Consult our specialists to choose optimum batches for your hardware.</p>
        </div>
      <div className="feature">
        <div className="circle">1</div>
        <div className="featureDetails">
          <h3>Fingerprints Detection</h3>
          <p>The SDK detects fingerprints on photo images and scans (250 dpi and higher). The detector returns 2 landmarks and bounding boxes for each detected fingerprint. Number of fingerprints/fingers on an image is not limited. Left/right hand detection based on fingerprint analysis (optional).</p>
        </div>
      </div>

      <div className="feature">
        <div className="circle">2</div>
        <div className="featureDetails">
          <h3>Biometric template extraction</h3>
          <p>The SDK converts an image into compact descriptor, describing unique features of a fingerprint. All templates extracted from photo images and scans are compatible and have standard size - 512 bytes.</p>
        </div>
      </div>

    </div>
  );
};
