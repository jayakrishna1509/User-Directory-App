import React, { useState } from 'react';
import '../styles/usercard.css';

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="user-card">
      <div className="user-header">
        <p className="user-name"><strong>👤 Name:</strong> {user.name}</p>
      </div>
      
      <div className="user-content">
        <p className="user-email"><strong>📧 Email:</strong> {user.email}</p>
        <p className="user-city">
          <strong>🏙 City:</strong> {user.address?.city || 'N/A'}
        </p>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`toggle-details-btn ${showDetails ? 'active' : ''}`}
      >
        {showDetails ? 'Hide Details ⬆️' : 'View Details ⬇️'}
      </button>

      {showDetails && (
        <div className="user-details">
          <p className="detail-item">
            <strong>📞 Phone:</strong> {user.phone || 'N/A'}
          </p>
          <p className="detail-item">
            <strong>🌐 Website:</strong>{' '}
            {user.website ? (
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            ) : (
              'N/A'
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
