// gemini.ts placeholder
import axios from 'axios';

export async function generateGuide(game: string, prompt: string) {
  const resp = await axios.post('/api/generate', { game, prompt });
  return resp.data; // { text: string, images?: string[] }
}
