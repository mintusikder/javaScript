const school = {
  name: "VNC",
  class: ["10", "11"],
  event: ["science", "bijoy dibos"],
  specialDay: {
    color: "blue",
    result: {
      gpa: "five",
    },
  },
};
school.specialDay.result.gpa = "666"
console.log(school.specialDay.result.gpa);
school.event[1] = "2121"

delete school.class
console.log(school.event[1])

console.log(school)