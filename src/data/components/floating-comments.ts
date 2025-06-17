import { ComponentWithCustomization } from '../../types';

export const floatingComments: ComponentWithCustomization = {
  id: 'floating-comments',
  title: 'Floating Comments',
  description: 'Display animated floating customer comments with avatars',
  category: 'Social Proof',
  tags: ['comments', 'reviews', 'social proof', 'testimonials'],
  code: `{% style %}
.floating-comments-wrapper {
  overflow-x: auto;
  padding: 20px 10px;
  -webkit-overflow-scrolling: touch;
}

.floating-comments {
  display: flex;
  gap: 20px;
  padding: 10px;
}

.floating-comment-box {
  flex: 0 0 300px;
  background: white;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  animation: float-animation 4s ease-in-out infinite;
}

.floating-comment-box:nth-child(2) { animation-delay: 1s; }
.floating-comment-box:nth-child(3) { animation-delay: 2s; }
.floating-comment-box:nth-child(4) { animation-delay: 3s; }

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.comment-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-name { font-weight: bold; font-size: 16px; }
.comment-time { color: gray; font-size: 12px; }
.comment-text { font-size: 14px; line-height: 1.5; margin: 10px 0; }
.comment-actions { display: flex; align-items: center; margin: 10px 0; }
.reactions { display: flex; align-items: center; margin-right: 15px; }
.reactions span { font-size: 16px; margin-left: -10px; }
.reactions span:first-child { margin-left: 0; }
.comment-count { font-size: 14px; margin-left: auto; }
.comment-footer {
  border-top: 1px solid #e0e0e0;
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
}

@keyframes float-animation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.floating-comments-wrapper::-webkit-scrollbar { display: none; }
{% endstyle %}

<div class="floating-comments-wrapper">
  <div class="floating-comments">
    <!-- Comment 1 -->
    <div class="floating-comment-box">
      <div class="comment-header">
        <img src="{{ comment1_avatar | default: 'https://randomuser.me/api/portraits/men/1.jpg' }}" alt="{{ comment1_name | default: 'John Doe' }}">
        <div class="comment-meta">
          <div class="comment-name">{{ comment1_name | default: 'John Doe' }}</div>
          <div class="comment-time">{{ comment1_time | default: '5h ago' }}</div>
        </div>
      </div>
      <div class="comment-text">{{ comment1_text | default: 'This product is fantastic! It has really made a positive difference in my daily routine.' }}</div>
      <div class="comment-actions">
        <div class="reactions">
          <span>👍</span>
          <span>❤️</span>
          <span>😮</span>
        </div>
        <div class="comment-count">5 Comments</div>
      </div>
      <div class="comment-footer">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>

    <!-- Comment 2 -->
    <div class="floating-comment-box">
      <div class="comment-header">
        <img src="{{ comment2_avatar | default: 'https://randomuser.me/api/portraits/women/1.jpg' }}" alt="{{ comment2_name | default: 'Jane Smith' }}">
        <div class="comment-meta">
          <div class="comment-name">{{ comment2_name | default: 'Jane Smith' }}</div>
          <div class="comment-time">{{ comment2_time | default: '5h ago' }}</div>
        </div>
      </div>
      <div class="comment-text">{{ comment2_text | default: 'This product has changed my life! I cannot believe how effective it is. 🌟' }}</div>
      <div class="comment-actions">
        <div class="reactions">
          <span>👍</span>
          <span>❤️</span>
          <span>😮</span>
        </div>
        <div class="comment-count">5 Comments</div>
      </div>
      <div class="comment-footer">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>

    <!-- Comment 3 -->
    <div class="floating-comment-box">
      <div class="comment-header">
        <img src="{{ comment3_avatar | default: 'https://randomuser.me/api/portraits/men/2.jpg' }}" alt="{{ comment3_name | default: 'Michael Johnson' }}">
        <div class="comment-meta">
          <div class="comment-name">{{ comment3_name | default: 'Michael Johnson' }}</div>
          <div class="comment-time">{{ comment3_time | default: '5h ago' }}</div>
        </div>
      </div>
      <div class="comment-text">{{ comment3_text | default: 'Absolutely love it! It is a game changer. 🔥' }}</div>
      <div class="comment-actions">
        <div class="reactions">
          <span>👍</span>
          <span>❤️</span>
          <span>😮</span>
        </div>
        <div class="comment-count">5 Comments</div>
      </div>
      <div class="comment-footer">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>

    <!-- Comment 4 -->
    <div class="floating-comment-box">
      <div class="comment-header">
        <img src="{{ comment4_avatar | default: 'https://randomuser.me/api/portraits/women/2.jpg' }}" alt="{{ comment4_name | default: 'Emily Davis' }}">
        <div class="comment-meta">
          <div class="comment-name">{{ comment4_name | default: 'Emily Davis' }}</div>
          <div class="comment-time">{{ comment4_time | default: '5h ago' }}</div>
        </div>
      </div>
      <div class="comment-text">{{ comment4_text | default: 'Highly recommend! Great quality and performance. 👍' }}</div>
      <div class="comment-actions">
        <div class="reactions">
          <span>👍</span>
          <span>❤️</span>
          <span>😮</span>
        </div>
        <div class="comment-count">5 Comments</div>
      </div>
      <div class="comment-footer">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'comment1_avatar',
      label: 'Comment 1 Avatar URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 'comment1_name',
      label: 'Comment 1 Name',
      type: 'text',
      defaultValue: 'John Doe'
    },
    {
      id: 'comment1_time',
      label: 'Comment 1 Time',
      type: 'text',
      defaultValue: '5h ago'
    },
    {
      id: 'comment1_text',
      label: 'Comment 1 Text',
      type: 'text',
      defaultValue: 'This product is fantastic! It has really made a positive difference in my daily routine.'
    },
    {
      id: 'comment2_avatar',
      label: 'Comment 2 Avatar URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 'comment2_name',
      label: 'Comment 2 Name',
      type: 'text',
      defaultValue: 'Jane Smith'
    },
    {
      id: 'comment2_time',
      label: 'Comment 2 Time',
      type: 'text',
      defaultValue: '5h ago'
    },
    {
      id: 'comment2_text',
      label: 'Comment 2 Text',
      type: 'text',
      defaultValue: 'This product has changed my life! I cannot believe how effective it is. 🌟'
    },
    {
      id: 'comment3_avatar',
      label: 'Comment 3 Avatar URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 'comment3_name',
      label: 'Comment 3 Name',
      type: 'text',
      defaultValue: 'Michael Johnson'
    },
    {
      id: 'comment3_time',
      label: 'Comment 3 Time',
      type: 'text',
      defaultValue: '5h ago'
    },
    {
      id: 'comment3_text',
      label: 'Comment 3 Text',
      type: 'text',
      defaultValue: 'Absolutely love it! It is a game changer. 🔥'
    },
    {
      id: 'comment4_avatar',
      label: 'Comment 4 Avatar URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 'comment4_name',
      label: 'Comment 4 Name',
      type: 'text',
      defaultValue: 'Emily Davis'
    },
    {
      id: 'comment4_time',
      label: 'Comment 4 Time',
      type: 'text',
      defaultValue: '5h ago'
    },
    {
      id: 'comment4_text',
      label: 'Comment 4 Text',
      type: 'text',
      defaultValue: 'Highly recommend! Great quality and performance. 👍'
    }
  ]
};