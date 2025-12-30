// import { useEffect, useState } from "react";

// function Oruform({ saveContent, editItem }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     if (editItem) {
//       setTitle(editItem.title);
//       setDescription(editItem.description);
//     }
//   }, [editItem]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title.trim()) {
//       alert("Title required");
//       return;
//     }

//     saveContent({
//       id: editItem ? editItem.id : Date.now(),
//       title,
//       description
//     });

//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>{editItem ? "Edit Content" : "Add Content"}</h3>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />

//       <br /><br />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//       />

//       <br /><br />

//       <button type="submit">
//         {editItem ? "Update" : "Add"}
//       </button>
//     </form>
//   );
// }

// export default Oruform;


// function ContentList({ contents, onEdit, onDelete }) {
//   return (
//     <div>
//       <h3>Content List</h3>

//       {contents.length === 0 && <p>No content available</p>}

//       <ul>
//         {contents.map(item => (
//           <li key={item.id}>
//             <strong>{item.title}</strong> – {item.description}

//             <button onClick={() => onEdit(item)}>Edit</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ContentList;

// import { useEffect, useState } from "react";
// import ContentList from "./components/ContentList";
// import Oruform from "./components/Oruform";

// function App() {
//   const [contents, setContents] = useState([]);
//   const [editItem, setEditItem] = useState(null);

  
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("cmsData")) || [];
//     setContents(data);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cmsData", JSON.stringify(contents));
//   }, [contents]);

//   const saveContent = (item) => {
//     if (editItem) {
//       setContents(
//         contents.map(c => c.id === editItem.id ? item : c)
//       );
//       setEditItem(null);
//     } else {
//       setContents([...contents, item]);
//     }
//   };

//   const deleteContent = (id) => {
//     setContents(contents.filter(item => item.id !== id));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Simple CMS (Machine Test)</h2>

//       <Oruform

//         saveContent={saveContent}
//         editItem={editItem}
//       />



//       <ContentList
//         contents={contents}
//         onEdit={setEditItem}
//         onDelete={deleteContent}
//       />
//     </div>
//   );
// }

// export default App;