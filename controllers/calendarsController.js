// var models = require('../models');

// module.exports = {
//   // CRUD
//   create: function (req, res) {
//     models.Calendar.create(req.body)
//       .then(function (newCalendar) {
//         return res.json(newCalendar)
//       })
//       .catch(function (error) {
//         console.log(err)
//         return res.status(500).json(error);
//       })
//   },
//   getAll: function (req, res) {
//     models.Calendar.findAll({
//       include: [
//         {
//           model: models.Workout,
//           as: 'workouts'
//         },
//         {
//           model: models.Client,
//           as: 'clients'
//         }
//       ]
//     })
//       .then(function (clients) {
//         return res.json(clients);
//       })
//       .catch(function (error) {
//         console.log(err)
//         return res.status(500).json(error);
//       });
//   },
//   edit: function (req, res) {
//     let { id, workoutId, date } = req.body;

//     let newCalendar = {
//       id
//     };

//     if (workoutId) {
//       newCalendar.workoutId = workoutId;
//     }
//     if (date) {
//       newCalendar.date = date;
//     }

//     if (newCalendar.id && (newCalendar.workoutId || newCalendar.date)) {
//       models.Calendar.update(
//         newCalendar,
//         {
//           where: {
//             id: newCalendar.id
//           }
//         })
//         .then(function (res) {
//           return res.json({ status: "updated" });
//         })
//         .catch(function (error) {
//           console.log(err)
//           return res.status(500).json(error);
//         });
//     } else {
//       // Otherwise, tell the user that we can't update with wrong information
//       res.status(400).json({ error: "Calendar update needs date or workout." })
//     }
//   },
//   delete: function (req, res) {
//     models.Calendar.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function (res) {
//         return res.json({ status: "updated" });
//       })
//       .catch(function (error) {
//         console.log(err)
//         return res.status(500).json(error);
//       });

//   }
// }
