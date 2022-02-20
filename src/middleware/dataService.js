const url = "http://localhost:8000/api";

const getAllRoom = async () => {
  const rooms = await fetch(`${url}/rooms/`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });

  return rooms;
};

const getRoomById = async (id) => {
  const room = await fetch(`${url}/rooms/${id}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });
  return room;
};

const getAllBlog = async () => {
  const blogs = await fetch(`${url}/blogs/`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });

  return blogs;
};

const getBlogById = async (id) => {
  const blog = await fetch(`${url}/blogs/${id}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });
  return blog;
};

export { getAllBlog, getAllRoom, getBlogById, getRoomById };
