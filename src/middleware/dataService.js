const getAllRoom = async () => {
  const rooms = await fetch(`${process.env.REACT_APP_API_URL}/rooms/`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });

  return rooms;
};

const getRoomById = async (id) => {
  const room = await fetch(`${process.env.REACT_APP_API_URL}/rooms/${id}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });
  return room;
};

const getAllBlog = async () => {
  const blogs = await fetch(`${process.env.REACT_APP_API_URL}/blogs/`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });

  return blogs;
};

const getBlogById = async (id) => {
  const blog = await fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    });
  return blog;
};

export { getAllBlog, getAllRoom, getBlogById, getRoomById };
