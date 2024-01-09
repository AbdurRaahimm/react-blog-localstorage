import React from 'react'
import Layout from '../components/Layout'

export default function Blog() {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(user => user.isLogin);
  // console.log(user.username);
  const username = user.username;
  const handleBlog = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const blog = {
      id: Date.now(),
      name:username,
      title,
      description
    }
    const blogs = JSON.parse(localStorage.getItem('blogs')) || []
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    e.target.reset();
    window.location.href = '/';
  }
  return (
    <Layout>
      <div className='bg-gray-100 py-10 flex justify-center items-center'>
        <div className="bg-white p-10 rounded-lg">
          <div className="text-center text-3xl text-gray-700 mb-2">
            Create Blog
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleBlog}>
              <div className="w-96">
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Title</label>
                  <input type="text" name='title' className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Description</label>
                  <textarea name="description" className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required></textarea>
                </div>
                <div className="flex flex-col mb-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded capitalize">Create post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
