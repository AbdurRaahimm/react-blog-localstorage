import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import timeAgo from '../utilis/timeAgo'


export default function Dashboard() {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || []
  return (
    <Layout>
      <div className='bg-gray-100 py-10'>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
           {/* if length 0 then show not post  */}
            {blogs.length === 0 && <div className="w-full text-center text-2xl">No Post Found</div>}
            {
              blogs.map(blog => {
                const {id, name, title, description} = blog
                return (
                  <div className="w-full md:w-1/3 px-4 mb-4" key={id}>
                  <div className="bg-white rounded-lg">
                    <div className="p-4">
                      <div className="flex justify-between">
                        <h4 className="text-xl font-semibold mb-2 capitalize">{title.slice(0, 22)}</h4>
                        {/* <p className="text-gray-700 text-base">{new Date(id).toDateString()}</p> */}
                        <p className="text-gray-700 text-base">{timeAgo(id)}</p>
                      </div>
                      <p className="text-gray-700 text-base">{description.slice(0, 40)}</p>
                      {/* show user name */}
                      <div className="flex items-center mt-4">
                        <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: "url(https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256)" }}></div>
                        <div>
                          <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold"> {name}</span></p>
                        </div>
                      </div>
                      {/* see more */}
                      <div className="flex justify-end items-center mt-4">
                        <Link to={`/blog/${id}`} className="text-green-500 hover:underline">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </Layout>
   
  )
}
