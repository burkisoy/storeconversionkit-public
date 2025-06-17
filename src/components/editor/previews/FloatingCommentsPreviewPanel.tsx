import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const FloatingCommentsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div class="floating-comments-wrapper" style="overflow-x: auto; padding: 20px 10px;">
        <div class="floating-comments" style="display: flex; gap: 20px; padding: 10px;">
          <!-- Comment 1 -->
          <div class="floating-comment-box" style="
            flex: 0 0 300px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            animation: float-animation 4s ease-in-out infinite;
          ">
            <div class="comment-header" style="display: flex; align-items: center; margin-bottom: 10px;">
              <img 
                src="${customValues.comment1_avatar || 'https://randomuser.me/api/portraits/men/1.jpg'}"
                alt="${customValues.comment1_name || 'John Doe'}"
                style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;"
              >
              <div>
                <div style="font-weight: bold; font-size: 16px;">${customValues.comment1_name || 'John Doe'}</div>
                <div style="color: gray; font-size: 12px;">${customValues.comment1_time || '5h ago'}</div>
              </div>
            </div>
            <div style="font-size: 14px; line-height: 1.5; margin: 10px 0;">
              ${customValues.comment1_text || 'This product is fantastic! It has really made a positive difference in my daily routine.'}
            </div>
            <div style="display: flex; align-items: center; margin: 10px 0;">
              <div style="display: flex; align-items: center; margin-right: 15px;">
                <span style="font-size: 16px;">👍</span>
                <span style="font-size: 16px; margin-left: -10px;">❤️</span>
                <span style="font-size: 16px; margin-left: -10px;">😮</span>
              </div>
              <div style="font-size: 14px; margin-left: auto;">5 Comments</div>
            </div>
            <div style="
              border-top: 1px solid #e0e0e0;
              margin-top: 10px;
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              color: gray;
            ">
              <div>Like</div>
              <div>Comment</div>
              <div>Share</div>
            </div>
          </div>

          <!-- Comment 2 -->
          <div class="floating-comment-box" style="
            flex: 0 0 300px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            animation: float-animation 4s ease-in-out infinite;
            animation-delay: 1s;
          ">
            <div class="comment-header" style="display: flex; align-items: center; margin-bottom: 10px;">
              <img 
                src="${customValues.comment2_avatar || 'https://randomuser.me/api/portraits/women/1.jpg'}"
                alt="${customValues.comment2_name || 'Jane Smith'}"
                style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;"
              >
              <div>
                <div style="font-weight: bold; font-size: 16px;">${customValues.comment2_name || 'Jane Smith'}</div>
                <div style="color: gray; font-size: 12px;">${customValues.comment2_time || '5h ago'}</div>
              </div>
            </div>
            <div style="font-size: 14px; line-height: 1.5; margin: 10px 0;">
              ${customValues.comment2_text || 'This product has changed my life! I can\'t believe how effective it is. 🌟'}
            </div>
            <div style="display: flex; align-items: center; margin: 10px 0;">
              <div style="display: flex; align-items: center; margin-right: 15px;">
                <span style="font-size: 16px;">👍</span>
                <span style="font-size: 16px; margin-left: -10px;">❤️</span>
                <span style="font-size: 16px; margin-left: -10px;">😮</span>
              </div>
              <div style="font-size: 14px; margin-left: auto;">5 Comments</div>
            </div>
            <div style="
              border-top: 1px solid #e0e0e0;
              margin-top: 10px;
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              color: gray;
            ">
              <div>Like</div>
              <div>Comment</div>
              <div>Share</div>
            </div>
          </div>

          <!-- Comment 3 -->
          <div class="floating-comment-box" style="
            flex: 0 0 300px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            animation: float-animation 4s ease-in-out infinite;
            animation-delay: 2s;
          ">
            <div class="comment-header" style="display: flex; align-items: center; margin-bottom: 10px;">
              <img 
                src="${customValues.comment3_avatar || 'https://randomuser.me/api/portraits/men/2.jpg'}"
                alt="${customValues.comment3_name || 'Michael Johnson'}"
                style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;"
              >
              <div>
                <div style="font-weight: bold; font-size: 16px;">${customValues.comment3_name || 'Michael Johnson'}</div>
                <div style="color: gray; font-size: 12px;">${customValues.comment3_time || '5h ago'}</div>
              </div>
            </div>
            <div style="font-size: 14px; line-height: 1.5; margin: 10px 0;">
              ${customValues.comment3_text || 'Absolutely love it! It\'s a game changer. 🔥'}
            </div>
            <div style="display: flex; align-items: center; margin: 10px 0;">
              <div style="display: flex; align-items: center; margin-right: 15px;">
                <span style="font-size: 16px;">👍</span>
                <span style="font-size: 16px; margin-left: -10px;">❤️</span>
                <span style="font-size: 16px; margin-left: -10px;">😮</span>
              </div>
              <div style="font-size: 14px; margin-left: auto;">5 Comments</div>
            </div>
            <div style="
              border-top: 1px solid #e0e0e0;
              margin-top: 10px;
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              color: gray;
            ">
              <div>Like</div>
              <div>Comment</div>
              <div>Share</div>
            </div>
          </div>

          <!-- Comment 4 -->
          <div class="floating-comment-box" style="
            flex: 0 0 300px;
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            animation: float-animation 4s ease-in-out infinite;
            animation-delay: 3s;
          ">
            <div class="comment-header" style="display: flex; align-items: center; margin-bottom: 10px;">
              <img 
                src="${customValues.comment4_avatar || 'https://randomuser.me/api/portraits/women/2.jpg'}"
                alt="${customValues.comment4_name || 'Emily Davis'}"
                style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;"
              >
              <div>
                <div style="font-weight: bold; font-size: 16px;">${customValues.comment4_name || 'Emily Davis'}</div>
                <div style="color: gray; font-size: 12px;">${customValues.comment4_time || '5h ago'}</div>
              </div>
            </div>
            <div style="font-size: 14px; line-height: 1.5; margin: 10px 0;">
              ${customValues.comment4_text || 'Highly recommend! Great quality and performance. 👍'}
            </div>
            <div style="display: flex; align-items: center; margin: 10px 0;">
              <div style="display: flex; align-items: center; margin-right: 15px;">
                <span style="font-size: 16px;">👍</span>
                <span style="font-size: 16px; margin-left: -10px;">❤️</span>
                <span style="font-size: 16px; margin-left: -10px;">😮</span>
              </div>
              <div style="font-size: 14px; margin-left: auto;">5 Comments</div>
            </div>
            <div style="
              border-top: 1px solid #e0e0e0;
              margin-top: 10px;
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              color: gray;
            ">
              <div>Like</div>
              <div>Comment</div>
              <div>Share</div>
            </div>
          </div>
        </div>
      </div>

      <style>
        @keyframes float-animation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default FloatingCommentsPreviewPanel;