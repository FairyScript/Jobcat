import React,{useState,useEffect} from 'react';

interface BuffProps{
  name: string;
  duration: number;
}
export const BuffItem: React.FC<BuffProps> = ({ name, duration }) =>{
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

  return (
    <div>
      {name}
      {Math.floor(countDown/1000)}
    </div>
  )
}