// Home.tsx placeholder
import React, { useState } from 'react';
import { generateGuide } from '../api/gemini';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import GuideCard from '../components/GuideCard';
import { useTheme } from '../App';

export default function Home() {
  const { theme } = useTheme();
  const [game, setGame] = useState('魔物獵人');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{text:string,images?: string[]} | null>(null);

  const onRun = async () => {
    const res = await generateGuide(game, input);
    setResult(res);
  };

  return (
    <div className={`min-h-screen bg-cover theme-${theme}`}>
      <header className="p-4 flex justify-between">
        <h1 className="text-2xl font-bold">AI 遊戲攻略整理器</h1>
        <ThemeSwitcher />
      </header>
      <main className="p-4 max-w-2xl mx-auto">
        <select className="border p-2 rounded" value={game} onChange={e=>setGame(e.target.value)}>
          <option>魔物獵人</option><option>薩爾達傳說</option><option>原神</option><option>其他</option>
        </select>
        <textarea className="w-full h-32 border p-2 rounded mt-2" value={input} onChange={e=>setInput(e.target.value)} placeholder="輸入任務內容" />
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={onRun}>生成攻略</button>
        {result && <GuideCard text={result.text} images={result.images}/>}
      </main>
    </div>
  );
}
