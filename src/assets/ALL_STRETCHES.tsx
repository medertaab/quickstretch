interface Exercise {
  title: string;
  duration: number;
  instructions: string[],
  images?: string[]
}

interface Stretch {
  [key : string] : {
    title: string;
    details: string;
    breakDuration: number;
    exercises: Exercise[]
  }
}

export const ALL_STRETCHES : Stretch  = {
  NECK_STRETCH: {
    title: "Neck stretch",
    details: "This stretch will help with your neck mobility. Pull your shoulders back, keep your back straight and feet on the ground",
    breakDuration: 5,
    exercises: [
      {
        title: "Left and right",
        duration: 30,
        instructions: ["Sit with your back straight", "Slowly turn your head to the left, as if you're trying to look over your shoulder", "Hold for two seconds", "Repeat on the right side"],
        images: ["./NECK_STRETCH/leftandright/1.png", "./NECK_STRETCH/leftandright/2.png", "./NECK_STRETCH/leftandright/1.png", "./NECK_STRETCH/leftandright/3.png"]
      }, {
        title: "Up and down",
        duration: 30,
        instructions: ["Place your hands on your chest", "Gently tilt your head upwards, looking towards the ceiling", "Hold for two seconds", "Slowly lower your head and tuck your chin in towards your chest, feeling a stretch in the back of your neck"],
        images: ["./NECK_STRETCH/upanddown/1.png", "./NECK_STRETCH/upanddown/2.png", "./NECK_STRETCH/upanddown/1.png", "./NECK_STRETCH/upanddown/3.png"]
      }, {
        title: "Side to side",
        duration: 30,
        instructions: ["Tilt your head towards your left shoulder, feeling a stretch in the right side of your neck", "Hold for two seconds", "Repeat on the right side"],
        images: ["./NECK_STRETCH/sidetoside/1.png", "./NECK_STRETCH/sidetoside/2.png", "./NECK_STRETCH/sidetoside/1.png", "./NECK_STRETCH/sidetoside/3.png"]
      }, {
        title: "In and out", 
        duration: 30,
        instructions: ["Tuck your chin in towards your chest, feeling a stretch in the back of your neck", "Hold for two seconds", "Stretch your head forward as far as you comfortably can, feeling a stretch in the front of your neck"],
        images: ["./NECK_STRETCH/inandout/1.png", "./NECK_STRETCH/inandout/2.png", "./NECK_STRETCH/inandout/1.png", "./NECK_STRETCH/inandout/3.png"]
      }, {
        title: "Sliding head",
        duration: 30,
        instructions: ["Keep your eyes level", "Slide your head to the left, feeling a stretch in the right side of your neck", "Hold for two seconds", "Repeat on the right side"],
        images: ["./NECK_STRETCH/sliding/1.png", "./NECK_STRETCH/sliding/2.png", "./NECK_STRETCH/sliding/3.png", "./NECK_STRETCH/sliding/2.png"]
      }, {
        title: "Half circle",
        duration: 30,
        instructions: ["Lift your ear on one side", "Slowly lower your head to tuck your chin in towards your chest, feeling a stretch in the back of your neck", "Repeat on the other side"],
        images: ["./NECK_STRETCH/halfcircle/1.png", "./NECK_STRETCH/halfcircle/2.png", "./NECK_STRETCH/halfcircle/3.png", "./NECK_STRETCH/halfcircle/2.png"]
      }
    ]
  }, HAND_STRETCH: {
    title: "Hand stretch",
    details: "These exercises can provide relief from hand, wrist and foreard pain, like that resulting from carpal tunnel syndrome",
    breakDuration: 5,
    exercises: [
      {
        title: "Fist stretch",
        duration: 30,
        instructions: ["Keep your elbows relaxed, make a fist with each hand and bend both of them up and down as far as you comfortably can"],
      },
      {
        title: "Side fist stretch",
        duration: 30,
        instructions: ["Rotate your fists sideways so the palms face each other, bend both fists away and towards yourself as far as you comfortably can"],
      },
      {
        title: "Wrist extension up",
        duration: 30,
        instructions: ["Elongate your arm in front of you and extend the hand toward yourself, assisting gently with the other hand"],
      }, {
        title: "Wrist extension down",
        duration: 30,
        instructions: ["Rotate your arm so the palm is faced up and extend the hand toward yourself, assisting gently with the other hand. Imagine the heel of your hand looking forward"],
      }, {
        title: "Wrist flexion",
        duration: 30,
        instructions: ["Rotate your arm so the palm is faced down and extend the hand toward yourself, assisting gently with the other hand. Pull at the hand"],
      }, 
    ]
  }, SHOULDER_STRETCH: {
    title: "Shoulder stretch",
    details: "These exercises can provide relief from hand, wrist and foreard pain, like that resulting from carpal tunnel syndrome",
    breakDuration: 5,
    exercises: [
      {
        title: "Shoulder rotation forward",
        duration: 20,
        instructions: ["Rotate your shoulders forward"]
      }, {
        title: "Shoulder rotation backward",
        duration: 20,
        instructions: ["Rotate your shoulders backward"]
      }, {
        title: "Right cross arm stretch",
        duration: 30,
        instructions: ["Bring your right arm forward and keep the elbow relaxed, use your left arm to gently pull the right arm across"]
      }, {
        title: "Left cross arm stretch",
        duration: 30,
        instructions: ["Bring your left arm forward and keep the elbow relaxed, use your right arm to gently pull the right arm across"]
      }, {
        title: "Chest stretch",
        duration: 30,
        instructions: ["Clasp your hands behind you and extend them down and back beghind you while pushing your chest forward"]
      }, {
        title: "Right upper trap stretch",
        duration: 30,
        instructions: ["Hold your right shoulder down and gently pull your head away with your left hand"]
      }, {
        title: "Left upper trap stretch",
        duration: 30,
        instructions: ["Hold your left shoulder down and gently pull your head away with your right hand"]
      }
    ]
  }
}