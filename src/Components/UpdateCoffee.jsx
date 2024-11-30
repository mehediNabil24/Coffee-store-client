import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo= form.photo.value;

        const updateCoffee = {name,quantity, supplier, taste, category, details, photo}
        console.log(updateCoffee)

        //send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.matchedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'Update',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    

    }
    
    return (
        <div>
            
            <div className="bg-pink-200 p-24">
        <h2 className="font-bold text-3xl">Update Coffee:{name}</h2>
        <form onSubmit={handleUpdate} className="space-y-8">
          
            {/* form-row name and quantity */}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="name" defaultValue={name}
            placeholder="Coffee Name"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Available Quantity" name="quantity" defaultValue={quantity}
          />
        </div>
      
      </div>
            {/* form-row supplier and taste*/}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="supplier" defaultValue={supplier}
            placeholder="Supplier"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Taste" name="taste" defaultValue={taste}
          />
        </div>
      
      </div>
      
            {/* form-row category and details */}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="category" defaultValue={category}
            placeholder="Category"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Details" name="details" defaultValue={details}
          />
        </div>
      
      </div>

        {/* form-row photo-url */}
        <div className="">
      
        <div className=" w-full">
          <input
            className="input input-bordered join-item w-full" name="photo" defaultValue={photo}
            placeholder="Photo URL"
          />
        </div>
       
      
      </div>

      <input className="btn btn-block" type="submit" value="Update Coffee" />
      </form>
    </div>
            
        </div>
    );
};

export default UpdateCoffee;