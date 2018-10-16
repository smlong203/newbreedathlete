import axios from "axios";

export default {
  //============== PROGRAMS =============================
  // Gets all programs
  getPrograms: function () {
    return axios.get("/api/programs");
  },
  // Gets the program with the given id
  getProgramById: function (id) {
    return axios.get("/api/programs/" + id);
  },
  // Deletes the program with the given id
  deleteProgram: function (id) {
    return axios.delete("/api/programs/" + id);
  },
  // Saves a program to the database
  saveProgram: function (programData) {
    return axios.post("/api/programs", programData);
  },

  //============== CLIENTS =============================
  // Gets all clients
  getClients: function () {
    return axios.get("/api/clients");
  },
  // Gets the client with the given id
  getClientById: function (id) {
    return axios.get("/api/clients/" + id);
  },
  // Gets all clients in a specific program
  getClientsByProgramId: function (programId) {
    return axios.get("/api/clients/Programs?ProgramId=" + programId);
  },
  // Deletes the client with the given id
  deleteClients: function (id) {
    return axios.delete("/api/clients/" + id);
  },
  // Saves a client to the database
  saveClient: function (clientData) {
    return axios.post("/api/clients", clientData);
  },


  //============== WORKOUTS =============================
  // Gets all workouts
  getWorkouts: function () {
    return axios.get("/api/workouts");
  },
  // Gets the workout with the given id
  getWorkoutById: function (id) {
    return axios.get("/api/workouts/" + id);
  },
  // Gets all workouts in a specific program
  getWorkoutsByProgramId: function (programId) {
    return axios.get("/api/workouts/Programs?ProgramId=" + programId);
  },
  // Deletes the workout with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function (workoutData) {
    return axios.post("/api/workouts", workoutData);
  },

  //============== EXERCISE =============================
  // Gets all exercises
  getExercises: function () {
    return axios.get("/api/exercises");
  },
  // Gets the exercise with the given id
  getExerciseById: function (id) {
    return axios.get("/api/exercises/" + id);
  },
  // Gets all exercises in a specific workout
  getExercisesByWorkoutId: function (workoutId) {
    return axios.get("/api/exercises/Workout?WorkoutId=" + workoutId);
  },
  // Deletes the exercise with the given id
  deleteExercise: function (id) {
    return axios.delete("/api/exercises/" + id);
  },
  // Saves a exercise to the database
  saveExercise: function (exerciseData) {
    return axios.post("/api/exercises", exerciseData);
  }
};
