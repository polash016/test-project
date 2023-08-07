import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Select,
    Option,
  } from "@material-tailwind/react";


const CardDetails = () => {
    const showDetails = useLoaderData()
    console.log(showDetails)
    const cleanDescription = () => {
        const element = document.createElement('div');
        element.innerHTML = showDetails.summary
        return element.innerText || element.textContent
    }
    const summary = cleanDescription()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const handleUserDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const screen = form.screen.value;
        const existingData = JSON.parse(localStorage.getItem('form-data')) || [];
        const data = {name, quantity, screen}
        const updatedData = [...existingData, data];
        localStorage.setItem('form-data', JSON.stringify(updatedData));
    }
    
    return (
        <div className="w-[90%] mx-auto text-center border-2 rounded mt-8">
            <h1 className="text-2xl font-bold m-4">Details</h1>
            <p className="tracking-wide leading-6 m-4">{summary}</p>
            <Button  onClick={handleOpen} className="mb-4">Buy Tickets</Button>
            {/* Modal start here */}
            {/* <Button onClick={handleOpen}>Log In</Button> */}
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full lg:max-w-[48rem]">
            <Typography className='text-center' variant="h3">
              Buy Here
            </Typography>
          <form onSubmit={handleUserDetails}>
          <CardBody>
            <div className="md:flex gap-4 md:space-y-0  space-y-2">
            <Input readOnly value={showDetails.name} label="Name" size="lg" />
            <Input readOnly value={showDetails.status} label="Status" size="lg" />
            </div>
            <div className="md:flex gap-4 mt-4 md:space-y-0  space-y-2">
            <Input readOnly value={showDetails.schedule?.time} label="Schedule" size="lg" />
            <Input readOnly value={`${showDetails.runtime} Minute`} label="Runtime" size="lg" />
            </div>
            <div className="space-y-4 mt-2">
            <Input name="name" label="User Name" size="lg" />
            <Input name="quantity" label="Ticket Quantity" type="number" size="lg" />
            <select className="w-full p-3 border-gray-500" name="screen" label="Screen">
            <option className="p-2" value="3d"> 3D </option>
            <option value='2d'> 2D </option>
            </select>
            </div>
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" onClick={handleOpen} fullWidth>
              Buy
            </Button>
          </CardFooter>
          </form>
        </Card>
      </Dialog>

      {/* modal ends here */}
        </div>
    );
};

export default CardDetails;