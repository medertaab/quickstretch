import { useState, useEffect } from 'react';

function useImagePreloader(images : string[]) {
  const [isPreloaded, setIsPreloaded] = useState(false) as any;

  useEffect(() => {
    const preloadImages = async () => {
      setIsPreloaded(false)
      try {
        const imagePromises = images.map((imageSrc : string) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = imageSrc;
          });
        });
        await Promise.all(imagePromises);
        setIsPreloaded(true)
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  return {isPreloaded};
}

export default useImagePreloader