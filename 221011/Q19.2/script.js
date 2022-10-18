// Instructions
// You get an array of objects of users from your database:
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:

// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
const orderdList = document.body.append(document.createElement("ol"));
users.forEach((user) => {
  // document.createElement("li");
  let listItem = document.createElement("li");
  listItem.innerHTML = `${user.firstName} ${user.lastName}`;
  document.querySelector("ol").append(listItem);
});

// document.querySelector("ol").style.listStyle = "none";

// 2. Remove the bullet points of the ordered list with
// JavaScript.
// document.querySelectorAll("li");

// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:
// document.querySelectorAll("li").forEach((item, i) => {
//   item.setAttribute("data-id", users[i]["id"]);
// });
