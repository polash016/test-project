import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
//   import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
    return (
        <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Tv-Shows
        </Typography>
        <div className="relative flex w-full gap-2 w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
    );
};

export default NavBar;