const machines_data = [
    {
        "name": "Treadmill",
        "exercises": ["walking", "jogging", "running","incline walking" , "incline jogging","incline running" ],
        "floor" : 2
    },

    {
        "name": "Overhead press machine",
        "exercises": ["shoulder press"],
        "floor": 2
    },

    {
        "name": "Leg curls",
        "exercises": ["seated leg curls", "standing leg curls"],
        "floor": 2
    },

    {
        "name": "Leg extension",
        "exercises": ["leg extensions", "seated leg curls", "standing leg curls"],
        "floor": 2
    },

    {
        "name": "Assisted pullups/dips",
        "exercises": ["pull ups", "dips", "chin ups"],
        "floor": 2
    },

    {   "name": "Bicep curls",
        "exercises": ["bicep curls"],
        "floor": 2
    },

    {   "name": "Incline chest press",
        "exercises": ["chest press"],
        "floor": 2
    },

    {   "name": "Cable system",
        "exercises": ["cable crunch", "seated cable row", "cable curl", "lat pulldown", "cable lateral raise", "cable pressdown", "straight arm pulldown"],
        "floor": 2
    },

    {   "name": "Dumbells",
        "exercises": ["dumbbell squat", "side lateral raise", "bicep curls", "hammer curls", "dumbbell shoulder press", "dumbbell overhead tricep extension"],
        "floor": 2
    },

    {   "name": "Bench",
        "exercises": ["dumbell bench press", "dumbbell bicep curl", "dumbbell rows", "dumbbell shoulder press", "overhead dumbbell tricep extension bench", "bulgarian split squat"],
        "floor": 2
    } 
]

const exercise_data = [
    // treadmill
    {
        "name": "walking",
        "targeted_muscles": ["quadriceps", "hamstrings", "calves", "ankles", "glutes"],
        "type": ["endurance"],
        "link": "https://www.youtube.com/watch?v=lUg2VYhVOHY"
    },
    
    {   
        "name": "jogging",
        "targeted_muscles":  ["quadriceps", "hamstrings", "calves", "ankles", "glutes"],
        "type": ["endurance"],
        "link": "https://www.youtube.com/watch?v=K6I24WgiiPw"
    },
    
    {   
        "name": "running",
        "targeted_muscles":  ["quadriceps", "hamstrings", "calves", "ankles", "glutes"],
        "type": ["endurance"],
        "link": "https://www.youtube.com/watch?v=aKfJJ1TuyE4"
    },
    
    // leg curls
    {   
        "name": "sitting leg curls",
        "targeted_muscles": ["hamstrings", "calves"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=oFxEDkppbSQ"
    },
    
    {   
        "name": "standing leg curls",
        "targeted_muscles": ["hamstrings", "calves"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=QerRbPE55D8"
    },
    
    //overhead press
    {   
        "name":  "shoulder press",
        "targeted_muscles": ["shoulder"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=Wqq43dKW1TU"
    },
    
    // leg extension
    {   
        "name": "leg extension",
        "targeted_muscles": ["quads"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=YyvSfVjQeL0"
    },
    
    // assisted pull up machine
    {
        "name": "pull ups",
        "targeted_muscles": ["lats", "delts", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=wFj808u2HWU"
    },
    {   
        "name": "chin ups",
        "targeted_muscles": ["biceps", "lats"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=wFj808u2HWU"
    },
    {
        "name": "dips narrow",
        "targeted_muscles": ["traps", "pectoral"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=wjUmnZH528Y"
    },
    {
        "name": "dips wide",
        "targeted_muscles": ["pectoral", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=wjUmnZH528Y"
    },
    
    // biceps curls
    {
        "name": "bicep curls",
        "targeted_muscles": ["biceps", "forearms"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=rZM88p-VZe8"
    },
    
    // inclined chest press 
    {
        "name": "inclined chest press",
        "targeted_muscles": ["pectoral", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=ig0NyNlSce4"
    },
    
    
    // Cable Machine 
    {
        "name": "cable crunch",
        "targeted_muscles": ["upper abs", "lower abs"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=AV5PmZJIrrw"},
    
    {
        "name": "seated cable row",
        "targeted_muscles": ["upper back", "lats"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=GZbfZ033f74"
    },
    
    {   
        "name": "cable curl",
        "targeted_muscles": ["biceps", "forearms"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=NFzTWp2qpiE"
    },
    
    {
        "name": "lat pulldown",
        "targeted_muscles": ["lats", "biceps", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=CAwf7n6Luuc"
    },
    
    {
        "name": "cable lateral raise",
        "targeted_muscles": ["delts", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=PPrzBWZDOhA"
    },
    {
        "name": "cable pressdown",
        "targeted_muscles": ["triceps"],
        "type": ["strength"], 
        "link": "https://www.youtube.com/watch?v=PPrzBWZDOhA"
    },
    
    {
        "name": "straight arm pulldown",
        "targeted_muscles": ["lats", "delts", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=wcVDItawocI"
    },
    
    
    // dumbells 
    {
        "name": "dumbbell squat",
        "targeted_muscles": ["quadriceps", "glutes"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=v_c67Omje48"
    },
    
    {
        "name": "side lateral raise",
        "targeted_muscles": ["lateral delts", "traps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=3VcKaXpzqRo"
    },
    
    {
        "name": "hammer curls",
        "targeted_muscles": ["biceps", "triceps", "forearm"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=TwD-YGVP4Bk"
    },
    
    {
        "name": "dumbbell shoulder press",
        "targeted_muscles": ["delts", "triceps", "traps", "pectoral"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=qEwKCR5JCog"
    },
    
    {
        "name": "overhead dumbbell tricep extension",
        "targeted_muscles": ["triceps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=-Vyt2QdsR7E"
    },
    
    // bench
     
    {
        "name": "dumbell bench press",
        "targeted_muscles": ["triceps", "pectoral", "delts"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=VmB1G1K7v94"
    },
    
    {
        "name": "dumbell rows",
        "targeted_muscles": ["delts", "traps", "rhomboids", "middle back", "biceps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=roCP6wCXPqo"
    },
    
    {
        "name": "dumbell shoulder press",
        "targeted_muscles": ["pectoral", "traps", "triceps", "delts"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=qEwKCR5JCog"
    },
    
    {
        "name": "overhead dumbell tricep extension bench",
        "targeted_muscles": ["triceps"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=SkNsa3eBwLA"
    },
    
    {
        "name": "bulgarian split squat",
        "targeted_muscles": ["glutes", "biceps", "quads"],
        "type": ["strength"],
        "link": "https://www.youtube.com/watch?v=SkNsa3eBwLA"
    }]
    