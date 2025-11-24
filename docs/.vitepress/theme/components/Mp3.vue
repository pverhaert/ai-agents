<template>
  <section class="mp3-container">
    <div class="audioPlayer">
      <h3 v-if="title" class="audio-title">{{ title }}</h3>
      <audio
          controls
          :src="audioUrl"
          preload="metadata"
          controlsList="nodownload">
        Your browser does not support the audio element.
      </audio>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: 'genai_aiagents.mp3'
    },
    title: {
      type: String,
      required: false,
      default: '🎙️ Listen to the Podcast'
    }
  },
  computed: {
    audioUrl() {
      // If the URL starts with http/https, use it as is
      // Otherwise, treat it as a public folder path
      if (this.url.startsWith('http://') || this.url.startsWith('https://')) {
        return this.url;
      }
      // Add leading slash if not present for public folder files
      return this.url.startsWith('/') ? this.url : `/${this.url}`;
    }
  },
  mounted() {
    console.log('Mp3 component mounted with URL:', this.audioUrl);
  }
}
</script>

<style scoped>
.mp3-container {
  margin: 1.5rem 0;
}

.audio-title {
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.audioPlayer {
  width: 100%;
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.audioPlayer audio {
  width: 100%;
  max-width: 100%;
  height: 54px;
  outline: none;
  display: block;
}

.audioPlayer audio:focus {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
  border-radius: 4px;
}
</style>