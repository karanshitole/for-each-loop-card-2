 const cl = console.log;
 let playerArr = [
 {
	 fname: "Rohit",
	 lname: "Sharma",
	 nickname: "Hitman",
	 city: "Mumbai",
	 number: 45,
 },
 {
	 fname: "Rahul",
	 lname: "Lokesh",
	 nickname: "cool-wk",
	 city: "Karnataka",
	 number: 01,
 },
 {
	 fname: "Rohit",
	 lname: "Sharma",
	 nickname: "Hitman",
	 city: "Mumbai",
	 number: 45,
 },
 {
	 fname: "Virat",
	 lname: "Kohli",
	 nickname: "Chiku",
	 city: "Delhi",
	 number: 18,
 },
 {
	 fname: "Sachin",
	 lname: "Tendulkar",
	 nickname: "Master",
	 city: "Mumbai",
	 number: 10,
 },
 {
	 fname: "MS",
	 lname: "Dhoni",
	 nickname: "Mahi",
	 city: "Ranchi",
	 number: 07,
 },
 ]
 
 let allTr = ``;
 playerArr.forEach((playerObj, i) => {
	
	 allTr += `
	            <tr>
			       <td>${i + 1}</td>
			       <td>${playerObj.fname}</td>
			       <td>${playerObj.lname}</td>
			       <td>${playerObj.nickname}</td>
			       <td>${playerObj.city}</td>
			       <td>${playerObj.number}</td>
			    </tr>
				
				`
 })
 const stdContainer = document.getElementById("stdContainer");
  stdContainer.innerHTML = allTr;
  
  const postsArr = [
  
  {
	  title : "javascript",
	  content: `JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. 
		 As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating.`
  },
  {
	  title : "HTML",
	  content: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. 
	      It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.`
  },
  {
	  title : "bootstrap",
	  content: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
	  It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.`
  },
  {
	  title : "css",
	  content: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. 
	  CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`
  },
   {
	  title : "Sass",
	  content: `Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes.
	  The original syntax, called "the indented syntax," uses a syntax similar to Haml.`
  },
   {
	  title : "Angular",
	  content: `Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. 
	  Angular is a complete rewrite from the same team that built AngularJS.`
  },
  
  ]
  let postCards = ``;
  postsArr.forEach((post) =>{
	  cl(post)
	  postCards +=`  <div class="col-md-4">
	                 <div class="card mb-3">
	                 <div class="card-header">
		              <h2 class="m-o">${post.title}</h2>
		              </div ="card-body">
		             <p class="m-0">${post.content}
		             JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. 
		             As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating.</p>
		              <div>
		              <div class="card-footer d-flex justify-content-between">
		              <button class="btn btn-success">Edit</button>
	             	  <button class="btn btn-danger">Delete</button>
	             	</div>
	            	</div>
	               </div>
	             </div>
	           </div> `
  })
  const postContainer = document.getElementById("postContainer");
  postContainer.innerHTML = postCards;