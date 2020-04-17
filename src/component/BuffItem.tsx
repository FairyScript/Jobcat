import React,{useState,useEffect} from 'react';

interface BuffProps{
  name: string;
  duration: number;
}
export const BuffItem: React.FC<BuffProps> = ({ name, duration }) => {
  const [max] = useState(duration - Date.now());
  const [countDown, setCD] = useState(duration);
  const refresh = () => {
    const t = duration - Date.now();
    t >= 0 && setCD(t);
    requestAnimationFrame(refresh);
  };

  useEffect(() => {
    const handle = requestAnimationFrame(refresh);

    return () => cancelAnimationFrame(handle);
  }, []);

  const consumer = countDown / 1000;
  return (
    <div>
      {name} 
      <progress id="file" value={countDown} max={max} />
      {consumer > 1?consumer.toFixed():consumer.toFixed(1)}
    </div>
  )
}