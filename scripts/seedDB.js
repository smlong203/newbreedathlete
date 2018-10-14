'use strict';
var models = require('../models');

models.Program.bulkCreate([
    { name: 'BREEDX Base', description: "Base level program" },
    { name: 'BREEDX Core', description: "Core level program" },
    { name: 'BREEDX Plus', description: "Plus level program" },
    { name: 'BREEDX OCR', description: "OCR program" },
    { name: 'BREEDX Bodyweight', description: "Bodyweight program" },
]).then(() => {
    console.log("Created programs")
    return models.Program.findAll()
}).then(programs => {
    console.log(`Created ${programs.length} programs`);
})

models.Workout.bulkCreate([
    { ProgramId: 1, name: 'Base Race' },
    { ProgramId: 2, name: 'Monster Crush' },
    { ProgramId: 3, name: 'Pain Train' },
    { ProgramId: 4, name: 'Obstacle Master' },
    { ProgramId: 5, name: 'Body Blast' },
    { ProgramId: 1, name: 'Base Dash' },
    { ProgramId: 2, name: 'Monster Mayham' },
    { ProgramId: 3, name: 'Pain Plane' },
    { ProgramId: 4, name: 'Obstacle Run' },
    { ProgramId: 5, name: 'Body Upper' },
    { ProgramId: 1, name: 'Base Destroy' },
    { ProgramId: 2, name: 'Monster Day' },
    { ProgramId: 3, name: 'Pain Inferno' },
    { ProgramId: 4, name: 'Obstacle Dash' },
    { ProgramId: 5, name: 'Body Lower' },
]).then(() => {
    console.log("Created workouts")
    return models.Workout.findAll()
}).then(workouts => {
    console.log(`Created ${workouts.length} workouts`);
})

models.Exercise.bulkCreate([
    { WorkoutId: 1, name: 'Burpees', description: "ABC" },
    { WorkoutId: 2, name: 'Burpees', description: "KLM" },
    { WorkoutId: 3, name: 'Burpees', description: "XYZ" },
    { WorkoutId: 4, name: 'Burpees', description: "XYZ" },
    { WorkoutId: 5, name: 'Burpees', description: "XYZ" },

    { WorkoutId: 1, name: 'Crunches', description: "ABC" },
    { WorkoutId: 2, name: 'Crunches', description: "KLM" },
    { WorkoutId: 3, name: 'Crunches', description: "XYZ" },
    { WorkoutId: 4, name: 'Crunches', description: "KLM" },
    { WorkoutId: 5, name: 'Crunches', description: "XYZ" },

    { WorkoutId: 1, name: 'Sprints', description: "ABC" },
    { WorkoutId: 2, name: 'Sprints', description: "KLM" },
    { WorkoutId: 3, name: 'Sprints', description: "XYZ" },
    { WorkoutId: 4, name: 'Sprints', description: "KLM" },
    { WorkoutId: 5, name: 'Sprints', description: "XYZ" },

    { WorkoutId: 1, name: 'Pull ups', description: "ABC" },
    { WorkoutId: 2, name: 'Pull ups', description: "KLM" },
    { WorkoutId: 3, name: 'Pull ups', description: "XYZ" },
    { WorkoutId: 4, name: 'Pull ups', description: "KLM" },
    { WorkoutId: 5, name: 'Pull ups', description: "XYZ" },

    { WorkoutId: 1, name: 'Squats', description: "ABC" },
    { WorkoutId: 2, name: 'Squats', description: "KLM" },
    { WorkoutId: 3, name: 'Squats', description: "XYZ" },
    { WorkoutId: 4, name: 'Squats', description: "KLM" },
    { WorkoutId: 5, name: 'Squats', description: "XYZ" },

    { WorkoutId: 1, name: 'Lunges', description: "ABC" },
    { WorkoutId: 2, name: 'Lunges', description: "KLM" },
    { WorkoutId: 3, name: 'Lunges', description: "XYZ" },
    { WorkoutId: 4, name: 'Lunges', description: "KLM" },
    { WorkoutId: 5, name: 'Lunges', description: "XYZ" }
]).then(() => {
    console.log("Created exercises")
    return models.Exercise.findAll()
}).then(exercises => {
    console.log(`Created ${exercises.length} exercises`);
})

models.Client.bulkCreate([
    { ProgramId: 1, firstname: "John", lastname: "Doe", email: "john.doe@email.com" },
    { ProgramId: 2, firstname: "Jane", lastname: "Moe", email: "jane.moe@email.com" },
    { ProgramId: 3, firstname: "Jenny", lastname: "James", email: "jenny.james@email.com" },
    { ProgramId: 4, firstname: "Ali", lastname: "Kamby", email: "ali.kamby@email.com" },
    { ProgramId: 5, firstname: "Mary", lastname: "Mae", email: "mary.mae@email.com" },

    { ProgramId: 1, firstname: "Alex", lastname: "Pat", email: "alex.pat@email.com" },
    { ProgramId: 2, firstname: "Pam", lastname: "Ham", email: "pam.ham@email.com" },
    { ProgramId: 3, firstname: "Jack", lastname: "Smith", email: "jack.smith@email.com" },
    { ProgramId: 4, firstname: "Jenny", lastname: "James", email: "jenny.james@email.com" },
    { ProgramId: 5, firstname: "Thomas", lastname: "Tom", email: "thomas.tom@email.com" },

    { ProgramId: 1, firstname: "Sally", lastname: "Lou", email: "sally.lou@email.com" },
    { ProgramId: 2, firstname: "Amber", lastname: "Adams", email: "amber.adams@email.com" },
    { ProgramId: 3, firstname: "Josh", lastname: "Kane", email: "josh.kane@email.com" },
    { ProgramId: 4, firstname: "Adam", lastname: "Marks", email: "adam.marks@email.com" },
    { ProgramId: 5, firstname: "Tiffany", lastname: "Kitkat", email: "tiffany.kitkat@email.com" },
]).then(() => {
    console.log("Created clients")
    return models.Client.findAll()
}).then(clients => {
    console.log(`Created ${clients.length} clients`);
})