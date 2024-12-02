import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers)
    const _id = users._id;
    
    const handleDelete =(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`,{
                    method: 'DELETE',
                    
                })
                .then(res=>res.json())
            .then(data=>{
                console.log('delte data', data)
                if(data.deletedCount>0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })

            const remaining = users.filter(user=> user._id!==_id)
            setUsers(remaining)
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
    }
    return (
        <div>
            <h3 className='text-3xl '>Users:{users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Createion Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=> <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td><button className='btn'>View</button>
            <button onClick={()=>{handleDelete(user._id)}} className='btn'>X</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Users;