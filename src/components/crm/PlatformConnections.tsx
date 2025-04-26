
import React from 'react';
import { PlatformConnection } from './PlatformConnection';

export const PlatformConnections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PlatformConnection
        name="iHealth-Sync"
        description="Connect to iHealth-Sync platform for patient health monitoring data"
        apiEndpoint="api.ihealth-sync.com/v1"
        isConnected={false}
      />
      <PlatformConnection
        name="Nurse-Sync"
        description="Connect to Nurse-Sync platform for healthcare professional data"
        apiEndpoint="api.nurse-sync.com/v1"
        isConnected={false}
      />
      <PlatformConnection
        name="Medic-Sync"
        description="Connect to Medic-Sync platform for clinical data integration"
        apiEndpoint="api.medic-sync.com/v1"
        isConnected={false}
      />
    </div>
  );
};
