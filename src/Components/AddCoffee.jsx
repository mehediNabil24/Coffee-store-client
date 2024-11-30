import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo= form.photo.value;

        const newCoffee = {name,quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        //send data to the server

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
  return (
    <div className="bg-pink-200 p-24">
        <h2 className="font-bold text-3xl">Add a Coffee</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
            {/* form-row name and quantity */}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="name"
            placeholder="Coffee Name"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Available Quantity" name="quantity"
          />
        </div>
      
      </div>
            {/* form-row supplier and taste*/}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="supplier"
            placeholder="Supplier"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Taste" name="taste"
          />
        </div>
      
      </div>
      
            {/* form-row category and details */}
        <div className="md:flex justify-between gap-10">
      
        <div className=" w-1/2">
          <input
            className="input input-bordered join-item w-full" name="category"
            placeholder="Category"
          />
        </div>
        <div className="w-1/2">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Details" name="details"
          />
        </div>
      
      </div>

        {/* form-row photo-url */}
        <div className="">
      
        <div className=" w-full">
          <input
            className="input input-bordered join-item w-full" name="photo"
            placeholder="Photo URL"
          />
        </div>
       
      
      </div>

      <input className="btn btn-block" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
