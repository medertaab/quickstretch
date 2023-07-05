export default function preloadImages(exercises: any) {
  exercises.forEach((exercise: any) => {
    exercise.images.forEach((image: string) => {
      const imageElement = new Image();
      imageElement.src = image;
    });
  })
}