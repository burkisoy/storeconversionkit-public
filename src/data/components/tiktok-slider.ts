import { ComponentWithCustomization } from '../../types';

export const tiktokSlider: ComponentWithCustomization = {
  id: 'tiktok-slider',
  title: 'TikTok Video Slider',
  description: 'Display TikTok videos in a beautiful scrollable slider with gradient borders',
  category: 'Social Proof',
  tags: ['tiktok', 'video', 'slider', 'social proof'],
  code: `<div class="slider-containerv8">
  <div class="sliderv8">
    <!-- Video 1 -->
    <div class="slidev8">
      <div class="with-borderv8">
        <video class="tiktok-videov8" autoplay muted loop>
          <source src="{{ video_1_url | default: 'https://cdn.shopify.com/videos/c/o/v/49f49e5ff92f404b89bdedd6fc371077.mp4' }}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="pause-buttonv8 hiddenv8">❚❚</div>
      <div class="play-buttonv8">▷</div>
    </div>

    <!-- Video 2 -->
    <div class="slidev8">
      <div class="with-borderv8">
        <video class="tiktok-videov8" autoplay muted loop>
          <source src="{{ video_2_url | default: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4' }}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="pause-buttonv8 hiddenv8">❚❚</div>
      <div class="play-buttonv8">▷</div>
    </div>

    <!-- Video 3 -->
    <div class="slidev8">
      <div class="with-borderv8">
        <video class="tiktok-videov8" autoplay muted loop>
          <source src="{{ video_3_url | default: 'https://cdn.shopify.com/videos/c/o/v/171162a47d1b44f1a042656ad7f85d02.mp4' }}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="pause-buttonv8 hiddenv8">❚❚</div>
      <div class="play-buttonv8">▷</div>
    </div>

    <!-- Video 4 -->
    <div class="slidev8">
      <div class="with-borderv8">
        <video class="tiktok-videov8" autoplay muted loop>
          <source src="{{ video_4_url | default: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4' }}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="pause-buttonv8 hiddenv8">❚❚</div>
      <div class="play-buttonv8">▷</div>
    </div>

    <!-- Video 5 -->
    <div class="slidev8">
      <div class="with-borderv8">
        <video class="tiktok-videov8" autoplay muted loop>
          <source src="{{ video_5_url | default: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4' }}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="pause-buttonv8 hiddenv8">❚❚</div>
      <div class="play-buttonv8">▷</div>
    </div>
  </div>

  {% style %}
  .slider-containerv8 {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;
    max-width: {{ container_max_width | default: '1200px' }};
    margin-left: auto;
    margin-right: auto;
    padding: {{ container_padding | default: '0px 10px' }};
  }

  .sliderv8 {
    display: flex;
    gap: {{ slide_gap | default: '10px' }};
    scroll-snap-type: x mandatory;
  }

  .slidev8 {
    flex: 0 0 60%;
    max-width: {{ mobile_slide_width | default: '360px' }};
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  @media screen and (min-width: 769px) {
    .slidev8 {
      flex: 0 0 50%;
      max-width: {{ desktop_slide_width | default: '260px' }};
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }

  .tiktok-videov8 {
    width: 100%;
    height: auto;
    aspect-ratio: 9 / 16;
    border-radius: {{ video_border_radius | default: '10px' }};
    display: block;
  }

  .play-buttonv8,
  .pause-buttonv8 {
    position: absolute;
    width: {{ control_button_size | default: '50px' }};
    height: {{ control_button_size | default: '50px' }};
    background: {{ control_button_bg | default: 'rgba(0, 0, 0, 0.6)' }};
    color: {{ control_button_color | default: 'white' }};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: {{ control_button_font_size | default: '20px' }};
    cursor: pointer;
    z-index: 10;
  }

  .play-buttonv8 {
    display: flex;
    margin-left: 2px;
  }

  .pause-buttonv8 {
    display: none;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .pause-buttonv8.hiddenv8 {
    opacity: 0;
  }

  .slider-containerv8::-webkit-scrollbar {
    height: {{ scrollbar_height | default: '10px' }};
  }

  .slider-containerv8::-webkit-scrollbar-thumb {
    background: {{ scrollbar_thumb_color | default: '#aaa' }};
    border-radius: {{ scrollbar_border_radius | default: '10px' }};
  }

  .slider-containerv8::-webkit-scrollbar-track {
    background: {{ scrollbar_track_color | default: '#ddd' }};
  }

  .with-borderv8 {
    padding: {{ border_padding | default: '4px' }};
    border-radius: {{ border_radius | default: '10px' }};
    background: {{ border_gradient | default: 'linear-gradient(0deg, #fe2d52, #28ffff)' }};
  }
  {% endstyle %}

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll(".slidev8");

      slides.forEach((slide) => {
        const playButton = slide.querySelector(".play-buttonv8");
        const pauseButton = slide.querySelector(".pause-buttonv8");
        const video = slide.querySelector("video");
        let hidePauseButtonTimeout;

        const showPauseButton = () => {
          clearTimeout(hidePauseButtonTimeout);
          pauseButton.classList.remove("hiddenv8");
          hidePauseButtonTimeout = setTimeout(() => {
            pauseButton.classList.add("hiddenv8");
          }, 1000);
        };

        const togglePlayPause = () => {
          if (video.paused) {
            video.muted = false;
            document.querySelectorAll("video").forEach((v) => {
              if (v !== video) {
                v.pause();
                v.classList.remove("playingv8");
              }
            });
            video.play().catch((err) => console.error("Video playback failed:", err));
          } else {
            video.pause();
          }
        };

        playButton.addEventListener("click", togglePlayPause);
        pauseButton.addEventListener("click", togglePlayPause);

        video.addEventListener("play", () => {
          video.classList.add("playingv8");
          playButton.style.display = "none";
          pauseButton.style.display = "flex";
          showPauseButton();
        });

        video.addEventListener("pause", () => {
          video.classList.remove("playingv8");
          playButton.style.display = "flex";
          pauseButton.style.display = "none";
        });

        video.addEventListener("mouseenter", showPauseButton);
        video.addEventListener("click", showPauseButton);
      });
    });
  </script>
</div>`,
  customizationOptions: [
    {
      id: 'video_1_url',
      label: 'Video 1 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/videos/c/o/v/49f49e5ff92f404b89bdedd6fc371077.mp4'
    },
    {
      id: 'video_2_url',
      label: 'Video 2 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4'
    },
    {
      id: 'video_3_url',
      label: 'Video 3 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/videos/c/o/v/171162a47d1b44f1a042656ad7f85d02.mp4'
    },
    {
      id: 'video_4_url',
      label: 'Video 4 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4'
    },
    {
      id: 'video_5_url',
      label: 'Video 5 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/videos/c/o/v/d4dfdd955f2840b1b63b223ecc77cafd.mp4'
    },
    {
      id: 'container_max_width',
      label: 'Container Max Width',
      type: 'text',
      defaultValue: '1200px'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '0px 10px'
    },
    {
      id: 'slide_gap',
      label: 'Gap Between Slides',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'mobile_slide_width',
      label: 'Mobile Slide Width',
      type: 'text',
      defaultValue: '360px'
    },
    {
      id: 'desktop_slide_width',
      label: 'Desktop Slide Width',
      type: 'text',
      defaultValue: '260px'
    },
    {
      id: 'video_border_radius',
      label: 'Video Border Radius',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'control_button_size',
      label: 'Control Button Size',
      type: 'text',
      defaultValue: '50px'
    },
    {
      id: 'control_button_bg',
      label: 'Control Button Background',
      type: 'text',
      defaultValue: 'rgba(0, 0, 0, 0.6)'
    },
    {
      id: 'control_button_color',
      label: 'Control Button Color',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'control_button_font_size',
      label: 'Control Button Font Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'scrollbar_height',
      label: 'Scrollbar Height',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'scrollbar_thumb_color',
      label: 'Scrollbar Thumb Color',
      type: 'color',
      defaultValue: '#aaa'
    },
    {
      id: 'scrollbar_track_color',
      label: 'Scrollbar Track Color',
      type: 'color',
      defaultValue: '#ddd'
    },
    {
      id: 'scrollbar_border_radius',
      label: 'Scrollbar Border Radius',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'border_padding',
      label: 'Border Padding',
      type: 'text',
      defaultValue: '4px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'border_gradient',
      label: 'Border Gradient',
      type: 'text',
      defaultValue: 'linear-gradient(0deg, #fe2d52, #28ffff)'
    }
  ]
};