db.createCollection("employees");

db.employees.insert({
  name: "SpongeBob SquarePants",
  position: "Fry Cook",
  salary: 15.0,
  schedule: ["Monday", "Wednesday", "Friday"],
});
