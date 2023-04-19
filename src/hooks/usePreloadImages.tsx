import React from 'react'

export default function usePreloadImages() {
  
  function preloadImages(exercises : any) {
    exercises.forEach((exercise : any) => {
      exercise.images.forEach((image : string) => {
        const imageElement = new Image();
        imageElement.src = image;
      })
    })
  }

  return preloadImages
}
