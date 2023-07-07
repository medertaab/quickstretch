export interface Exercise {
  title: string;
  duration: number;
  instructions: string[];
  images?: string[];
}

export interface Stretch {
  [key: string]: {
    title: string;
    speed: number; // in ms
    details: string;
    breakDuration: number;
    exercises: Exercise[];
  };
}

export const ALL_STRETCHES: Stretch = {
  neck_stretch: {
    title: "Neck stretch",
    details:
      "This stretch will help with your neck mobility. Pull your shoulders back, keep your back straight and feet on the ground",
    speed: 900,
    breakDuration: 5,
    exercises: [
      {
        title: "Left and right",
        duration: 30,
        instructions: [
          "Sit with your back straight",
          "Slowly turn your head to the left, as if you're trying to look over your shoulder",
          "Hold for two seconds",
          "Repeat on the right side",
        ],
        images: [
          "./neck_stretch/leftandright/1.png",
          "./neck_stretch/leftandright/2.png",
          "./neck_stretch/leftandright/1.png",
          "./neck_stretch/leftandright/3.png",
        ],
      },
      {
        title: "Up and down",
        duration: 30,
        instructions: [
          "Place your hands on your chest",
          "Gently tilt your head upwards, looking towards the ceiling",
          "Hold for two seconds",
          "Slowly lower your head and tuck your chin in towards your chest, feeling a stretch in the back of your neck",
        ],
        images: [
          "./neck_stretch/upanddown/1.png",
          "./neck_stretch/upanddown/2.png",
          "./neck_stretch/upanddown/1.png",
          "./neck_stretch/upanddown/3.png",
        ],
      },
      {
        title: "Side to side",
        duration: 30,
        instructions: [
          "Tilt your head towards your left shoulder, feeling a stretch in the right side of your neck",
          "Hold for two seconds",
          "Repeat on the right side",
        ],
        images: [
          "./neck_stretch/sidetoside/1.png",
          "./neck_stretch/sidetoside/2.png",
          "./neck_stretch/sidetoside/1.png",
          "./neck_stretch/sidetoside/3.png",
        ],
      },
      {
        title: "In and out",
        duration: 30,
        instructions: [
          "Tuck your chin in towards your chest, feeling a stretch in the back of your neck",
          "Hold for two seconds",
          "Stretch your head forward as far as you comfortably can, feeling a stretch in the front of your neck",
        ],
        images: [
          "./neck_stretch/inandout/1.png",
          "./neck_stretch/inandout/2.png",
          "./neck_stretch/inandout/1.png",
          "./neck_stretch/inandout/3.png",
        ],
      },
      {
        title: "Sliding head",
        duration: 30,
        instructions: [
          "Keep your eyes level",
          "Slide your head to the left, feeling a stretch in the right side of your neck",
          "Hold for two seconds",
          "Repeat on the right side",
        ],
        images: [
          "./neck_stretch/sliding/1.png",
          "./neck_stretch/sliding/2.png",
          "./neck_stretch/sliding/3.png",
          "./neck_stretch/sliding/2.png",
        ],
      },
      {
        title: "Half circle",
        duration: 30,
        instructions: [
          "Lift your ear on one side",
          "Slowly lower your head to tuck your chin in towards your chest, feeling a stretch in the back of your neck",
          "Repeat on the other side",
        ],
        images: [
          "./neck_stretch/halfcircle/1.png",
          "./neck_stretch/halfcircle/2.png",
          "./neck_stretch/halfcircle/3.png",
          "./neck_stretch/halfcircle/2.png",
        ],
      },
    ],
  },
  hand_stretch: {
    title: "Hand stretch",
    details:
      "These exercises can provide relief from hand, wrist and foreard pain, like that resulting from carpal tunnel syndrome",
    speed: 1200,
    breakDuration: 5,
    exercises: [
      {
        title: "Fist stretch",
        duration: 30,
        instructions: [
          "Keep your elbows relaxed",
          "Make a fist with each hand",
          "Bend both of them up and down as far as you can comfortably",
        ],
        images: ["./hand_stretch/fist1/1.png", "./hand_stretch/fist1/2.png"],
      },
      {
        title: "Side fist stretch",
        duration: 30,
        instructions: [
          "Rotate your fists sideways so that your palms face each other",
          "Bend both fists away from and towards yourself as far as you can comfortably",
        ],
        images: ["./hand_stretch/fist2/1.png", "./hand_stretch/fist2/2.png"],
      },
      {
        title: "Wrist extension up",
        duration: 30,
        instructions: [
          "Extend one arm in front of you",
          "Point your hand towards the ceiling",
          "Gently assist the stretch with your other hand",
        ],
        images: ["./hand_stretch/wrist1/1.png", "./hand_stretch/wrist1/2.png"],
      },
      {
        title: "Wrist flexion",
        duration: 30,
        instructions: [
          "Rotate your arm so that your palm faces down",
          "Point your hand towards the floor",
          "Gently assist the stretch with your other hand by pulling your hand towards your body",
        ],
        images: ["./hand_stretch/wrist2/1.png", "./hand_stretch/wrist2/2.png"],
      },
    ],
  },
  shoulder_stretch: {
    title: "Shoulder stretch",
    details:
      "These exercises exercises are beneficial in improving flexibility, reducing stiffness, and relieving tension in the shoulders and upper back",
    breakDuration: 5,
    speed: 400,
    exercises: [
      {
        title: "Shoulder rotation forward",
        duration: 20,
        instructions: ["Rotate your shoulders forward"],
        images: ["./shoulder_stretch/rotateforward/1.png", "./shoulder_stretch/rotateforward/2.png", "./shoulder_stretch/rotateforward/3.png", "./shoulder_stretch/rotateforward/4.png", "./shoulder_stretch/rotateforward/5.png"]
      },
      {
        title: "Shoulder rotation backward",
        duration: 20,
        instructions: ["Rotate your shoulders backward"],
        images: ["./shoulder_stretch/rotateback/1.png", "./shoulder_stretch/rotateback/2.png", "./shoulder_stretch/rotateback/3.png", "./shoulder_stretch/rotateback/4.png", "./shoulder_stretch/rotateback/5.png"]
      },
      {
        title: "Right cross arm stretch",
        duration: 30,
        instructions: [
          "Bring your right arm forward and keep the elbow relaxed", "Use your left arm to gently pull the right arm across",
        ],
        images: ["./shoulder_stretch/crossright/1.png", "./shoulder_stretch/crossright/2.png"]
      },
      {
        title: "Left cross arm stretch",
        duration: 30,
        instructions: [
          "Bring your left arm forward and keep the elbow relaxed", "Use your right arm to gently pull the right arm across",
        ],
        images: ["./shoulder_stretch/crossleft/1.png", "./shoulder_stretch/crossleft/2.png"]
      },
      {
        title: "Chest stretch",
        duration: 30,
        instructions: [
          "Clasp your hands behind you", "Extend them down and back behind you", "Gently keep pushing your chest forward",
        ],
        images: ["./shoulder_stretch/chest/1.png", "./shoulder_stretch/chest/2.png"]
      }
    ],
  },
};
