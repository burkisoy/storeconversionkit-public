import React from 'react';

const ItemsLeftBadgePreview = () => {
  return (
    <div className="unique-body-abc123">
      <div className="unique-badge-def456">
        <span>
          <div className="unique-flame-icon-ghi789">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF4500" d="M32 2C19 15 9 26 9 38c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14s-14 6-14 14c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14S18 22 18 30c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14z"/>
            </svg>
          </div>
          8 items left at this price
        </span>
      </div>

      <div className="unique-badge-def456">
        <span>
          <div className="unique-clock-icon-jkl012">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#b22222" strokeWidth="4" fill="none"/>
              <line x1="32" y1="32" x2="32" y2="12" stroke="#b22222" strokeWidth="4"/>
              <line x1="32" y1="32" x2="44" y2="32" stroke="#b22222" strokeWidth="4"/>
            </svg>
          </div>
          Limited stock available!
        </span>
      </div>

      <style>
        {`
          .unique-body-abc123 {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin: 0;
            gap: 10px;
            transform: scale(0.8);
          }

          .unique-badge-def456 {
            display: inline-flex;
            align-items: center;
            background-color: #ffdede;
            color: #b22222;
            padding: 3px 5px;
            border-radius: 5px;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            position: relative;
          }

          .unique-flame-icon-ghi789,
          .unique-clock-icon-jkl012 {
            margin-right: 4px;
            display: inline-block;
            position: relative;
            vertical-align: middle;
          }

          .unique-flame-icon-ghi789 svg,
          .unique-clock-icon-jkl012 svg {
            width: 12px;
            height: 12px;
          }

          .unique-flame-icon-ghi789 svg {
            animation: unique-flame-animation-mno345 2s infinite;
          }

          .unique-clock-icon-jkl012 svg {
            animation: unique-clock-animation-pqr678 2s infinite;
          }

          @keyframes unique-flame-animation-mno345 {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @keyframes unique-clock-animation-pqr678 {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(360deg); }
          }

          .unique-badge-def456 span {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default ItemsLeftBadgePreview;