interface Exercise {
  title: string;
  duration: number;
  details: string
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
        details: "Shoulders back, stretch as much as you can without discomfort"
      }, {
        title: "Up and down",
        duration: 30,
        details: "Hold your chest with your hands, when looking down tuck your chin to feel a stretch in the back of the neck"
      }, {
        title: "Side to side",
        duration: 30,
        details: "Stretch your neck by tilting your ears as high as you can and mkaing your neck longer"
      }, {
        title: "Cellphone drill", 
        duration: 30,
        details: "Suck chin in then stretch it forward"
      }, {
        title: "Sliding head",
        duration: 30,
        details: "Keep eyes on the same level"
      }, {
        title: "Half circle",
        duration: 30,
        details: "Lift your ear on one side, tuck your chin, then repeat with the other side"
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
        details: "Keep your elbows relaxed, make a fist with each hand and bend both of them up and down as far as you comfortably can"
      },
      {
        title: "Side fist stretch",
        duration: 30,
        details: "Rotate your fists sideways so the palms face each other, bend both fists away and towards yourself as far as you comfortably can"
      },
      {
        title: "Wrist extension up",
        duration: 30,
        details: "Elongate your arm in front of you and extend the hand toward yourself, assisting gently with the other hand"
      }, {
        title: "Wrist extension down",
        duration: 30,
        details: "Rotate your arm so the palm is faced up and extend the hand toward yourself, assisting gently with the other hand. Imagine the heel of your hand looking forward"
      }, {
        title: "Wrist flexion",
        duration: 30,
        details: "Rotate your arm so the palm is faced down and extend the hand toward yourself, assisting gently with the other hand. Pull at the hand"
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
        details: "Rotate your shoulders forward"
      }, {
        title: "Shoulder rotation backward",
        duration: 20,
        details: "Rotate your shoulders backward"
      }, {
        title: "Right cross arm stretch",
        duration: 30,
        details: "Bring your right arm forward and keep the elbow relaxed, use your left arm to gently pull the right arm across"
      }, {
        title: "Left cross arm stretch",
        duration: 30,
        details: "Bring your left arm forward and keep the elbow relaxed, use your right arm to gently pull the right arm across"
      }, {
        title: "Chest stretch",
        duration: 30,
        details: "Clasp your hands behind you and extend them down and back beghind you while pushing your chest forward"
      }, {
        title: "Right upper trap stretch",
        duration: 30,
        details: "Hold your right shoulder down and gently pull your head away with your left hand"
      }, {
        title: "Left upper trap stretch",
        duration: 30,
        details: "Hold your left shoulder down and gently pull your head away with your right hand"
      }
    ]
  }
}