// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#project-name').value.trim();
//     const description = document.querySelector('#project-desc').value.trim();
//     const postNumb = window.location.pathname.charAt.length
//   console.log(postNumb)
//     if (name && description) {
//       const response = await fetch(`/api/post/${postNumb}`, {
//         method: 'PUT',
//         body: JSON.stringify({ name, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
  
//   document
//     .querySelector('.update-project-form')
//     .addEventListener('submit', newFormHandler);
  