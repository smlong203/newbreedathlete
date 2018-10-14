import axios from "axios";

export default {
  // Gets all programs
  getPrograms: function () {
    return axios.get("/api/programs");
  },
  // Gets the program with the given id
  getProgram: function (id) {
    return axios.get("/api/programs/" + id);
  },
  // Deletes the program with the given id
  deleteProgram: function (id) {
    return axios.delete("/api/programs/" + id);
  },
  // Saves a program to the database
  saveProgram: function (programData) {
    return axios.post("/api/programs", programData);
  }
};
