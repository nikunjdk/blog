var User = require("./models/User.js");
var Post = require("./models/Post.js");
var Category = require("./models/Category");

var userData = [];
var categoryData = [];
var postData = [];
var usernames = ["Nikunj", "Shubhi", "Shreya", "Shristi", "Mohit", "Tarun"];
var categories = [
  "Flowers",
  "Pets",
  "Children",
  "Save girl child",
  "Save Environment",
];

function createCategories() {
  categories.forEach(function (category) {
    var data = { name: category };
    categoryData.push(data);
  });
}

function createUsers() {
  var password = "12345";
  var email = "abc@pqy.xyz";
  usernames.forEach(function (username) {
    var data = {
      username: username.toString(),
      email: username + email,
      password: password,
      profilePic: "default.jpg",
    };
    userData.push(data);
  });
}

function createPosts() {
  var desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantiummodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
  for (let i = 1; i <= 50; i++) {
    let data = {
      title: "BLOG " + i.toString(),
      desc: desc,
      username: usernames[Math.floor(Math.random() * usernames.length)],
      categories: categories[Math.floor(Math.random() * categories.length)],
      photo: "defalt_post.jpg",
    };
    postData.push(data);
  }
}

function seedDB() {
  Category.deleteMany({}, function (err) {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting post.",
        error: err,
      });
    }
  });
  console.log("Deleted Categories");
  createCategories();
  Category.insertMany(categoryData, function (err) {
    if (err) {
      console.log(err);
    } else console.log("Categories added to db");
  });
  console.log("Categories created");

  User.deleteMany({}, function (err) {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting user.",
        error: err,
      });
    }
  });
  console.log("Users deleted");
  createUsers();
  User.insertMany(userData, function (err) {
    if (err) {
      console.log(err);
    } else console.log("Users added to db");
  });
  console.log("Users created");

  Post.deleteMany({}, function (err) {
    if (err) {
      return res.status(500).json({
        message: "Error when deleting post.",
        error: err,
      });
    }
  });
  console.log("Posts deleted");
  createPosts();
  Post.insertMany(postData, function (err) {
    if (err) {
      console.log(err);
    } else console.log("Posts added to db");
  });
  console.log("Posts created");
}

module.exports = seedDB;
